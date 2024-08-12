# Nomad Market 14

## 5. Server Actions

### 5.1 Server Actions

- inline server actions
  - create a function and add "use server" on the top of the function inside

### 5.2 useFormStatus

- useFormStatus는 form의 child 컴포넌트에서만 사용될 수 있다
  - [form-button.ts](https://github.com/Eastynfromeast/nomad-market-14/components/form-button.tsx)

### 5.3 useFormState

- "use server"는 server component에서만 사용 가능하다
  - client component에서 사용해야 한다면 컴포넌트를 따로 뺴줘야 한다
  - [action.ts](https://github.com/Eastynfromeast/nomad-market-14/app/login/actions.ts)
- useFormState는 action 함수와 초기 값을 인자로 받는다
  ```
  const [state, action] = useFormState(onSubmit, { errors: ["", ""] });
  ```

## 6. Validation

### 6.0 Introduction to Zod

    ```
    // explaining requirements of our data
    const usernameSchema = z.string().min(5).max(10);

    // validating
    usernameSchema.parse(data.username);
    ```

### 6.1 Validation Error

    ```
    // safeParse() does not throw the error unlike parse()
    	const result = formSchema.safeParse(data);
    ```

### 6.2 Refinement

- refine(true or false return 함수,"에러 메시지")

  - refine(우리가 refine하려는 data의 조건문, )

  ```
  const checkUsername = (username: string) => !username.includes("potato");

  .refine(checkUsername, "No potatoes allowed!"),
  ```

- refine을 object 바깥에서 하면서, 에러 메시지를 노출하고 싶다면 path로 책임 요소를 알려줘야 한다
  ```
  const formSchema = z.object({
    ///
    }).refine(checkPassword, { message: "Both passwords should be the same!", path: ["confirmPassword"] });
  ```

### 6.3 Transformation

- input은 name이 있어야만 한다

### 6.4 Refactor

- input의 props는 일일히 다 지정해주지 않아도 된다. 왜냐? `InputHTMLAttributes<HTMLInputElement>` 가 있으니까

### 6.6 Log In Validation

### 6.7 Coerce

- validator.js

- coerce : input에서 string으로 입력된 number를 number로 강제 전환!
  ```
  const tokenSchema = z.coerce.number();
  ```

## 7 Prisma

### 7.1 Set up

    ```
      npm i prisma
      npx prisma init
    ```

- After `npx prisma init`
  1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
  2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
  3. Run prisma db pull to turn your database schema into a Prisma schema.
  4. Run prisma generate to generate the Prisma Client. You can then start querying your database.
  5. Tip: Explore how you can extend the ORM with scalable connection pooling, global caching, and real-time database events. Read: https://pris.ly/beyond-the-orm

### 7.2 Schemas

```
  npx prisma migrate dev
```

- create `/lib/db.ts`

### 7.3 Prisma Studio

```
  npx prisma studio
```

- 스키마의 변경사항을 적용하기 위해서는 저장 -> `npx prisma migrate dev` -> npx prisma studio 재실행

### 7.4 Relationships

```
  model User {
    id         Int        @id @default(autoincrement())
    username   String     @unique
    email      String?    @unique
    ...
    SMSToken   SMSToken[]
  }

  model SMSToken {
    id         Int      @id @default(autoincrement())
    token      String   @unique
    created_at DateTime @default(now())
    updated_at DateTime @updatedAt
    user       User     @relation(fields: [userId], references: [id])
    userId     Int  <- db에 실제 저장되는 값
  }
```

### 7.5 onDelete

- 연결되어 있는 schema가 사라졌을 때 어떻게 할 것인지 설정 가능!
  - Cascade : 해당 스키마도 사라짐
  - SetNull : 연결된 스키마를 null로 처리, 연결된 id 영역도 optional 처리해줘야
  - Restrict : 부모레코드가 참조되고 있는 동안은 삭제되는 걸 막음 (default?)
  ```
    model SMSToken {
    user       User     @relation(fields: [userId], references: [id], onDelete: Cascade)
    userId     Int
  }
  ```

## 8 Authentication

- 무엇을 하나요?
  - check if username is taken
  - check if the email is taken
  - hash password
  - save the user to db
  - log the user in
  - redirect "/home"

### 8.1 Database Validation

- validation을 zod에게 맡김!

  ```
  // check if the email is taken
  const checkUniqueEmail = async (email: string) => {
    const user = await db.user.findUnique({
      where: {
        email: email,
      },
      select: {
        id: true,
      },
    });
    return !Boolean(user);
  };

  ///
  email: z.string().email().toLowerCase().refine(checkUniqueEmail, "There is an account already registered with that email"),
  ```

### 8.2 Password Hashing

- hash password
- bcrypt

  ```
  // npm i bcrypt @types/bcrypt
  const hasedPassword = bcrypt.hash(result.data.password, 12);
  ```

  ### 8.3 Iron Session

- log the user in
- 아, iron session 로그인에 쓰는 거였구나 ㅎ
- [password generator](https://1password.com/password-generator/)

  ```
  	const cookie = await getIronSession(cookies(), {
  		cookieName: "delicious-carrot",
  		password: process.env.COOKIE_PASSWORD!,
  	});
  ```

### 8.5 Email Log In

- what we gonna do
  - find user with the email
  - if the user is found, check password hash
  - log the user in
  - redirect "/profile"

### 8.6 superRefine

- 데이터베이스에서 계속 부르지 않고 validation 단계마다 확인하고 멈추게 하기
- how to abort early?
  ```
  const formSchema = z.object({
    ///
  }).superRefine(async ({ username }, ctx) => {
  	const user = await db.user.findUnique({
  		where: {
  			username,
  		},
  		select: {
  			id: true,
  		},
  	});
  	if (user) {
  		ctx.addIssue({
  			code: "custom",
  			message: "This username is already taken",
  			path: ["username"],
  			fatal: true,
  		});
  		return z.NEVER;
  	}
  })
  .refine(///)
  ```

### 8.7 Log Out

- make sure that we understand how the authentication work

- Log out : session을 삭제함

  ```
  	const logOut = async () => {
  	"use server";
  	const session = await getSession();
  	await session.destroy();
  	redirect("/");
  };
  ```

- `notfound()`
  - NextJS가 제공하는 Super Cool한 navigation
  - The notFound function allows you to render the not-found file within a route segment
  ```
  async function getUser() {
    const session = await getSession();
    if (session.id) {
      const user = await db.user.findUnique({
        where: {
          id: session.id,
        },
      });
      if (user) {
        return user;
      }
    }
    notFound();
  }
  ```

### 8.9 Middleware

- middleware runs at every single requests in your website!

- `nextUrl` gives you lots of informations about your location
  ```
  	console.log(request.nextUrl.pathname);
  ```

### 8.10 Matcher

- how we can stop the middleware from running in certain requests

  - when we want to exclude requests for JS, CSS, favicon file and etc

- middleware의 함수명은 **middleware** 여야 되고, config object의 이름은 **config** 가 되어야 한다는 사실을 명심하자!

```
export const config = {
	matcher: ["/", "/profile", "/create-account", "/user/:path"],
  // 아니면 정규식 사용 가능!
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
```

### 8.11 Edge Runtime

- middleware는 아무거나 실행할 수 있을 정도로 강력하지는 않음
  - edge runtime에서 실행되고 nodeJS runtime에서는 실행되지 않음
  - The Edge runtime is used for Middleware (routing rules like redirects, rewrites, and setting headers).
  - The Edge Runtime which contains a more limited set of APIs.

### 8.12 Authentication Middleware

## 9 Social Authentication

## 10. Products

### 10.1 Tab Bar

### 10.2 Skeletons

- super easy to create skeleton in NextJS 14
  - 해당 루트 디렉토리 내에 loading.tsx를 생성하고
  - 모양을 만든다! 끝!

### 10.3 Product Component

- NextJS `<Image/>` 태그

  - NextJS가 알아서 최적화!
  - [This API reference will help you understand how to use props and configuration options available for the Image Component](https://nextjs.org/docs/pages/api-reference/components/image)

    ```
    // 렌더링된 HTML
    <img srcset="/_next/image?url=%2Fimages%2Fnuri_annoyed_240711.png&w=256&q=75 1x, /_next/image?url=%2Fimages%2Fnuri_annoyed_240711.png&w=640&q=75 2x">

    // JSX
    <Image fill src={photo} alt={title} quality={100} />
    ```

### 10.4 Detail Skeleton

- [Intl.RelativeTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat)
  - The Intl.RelativeTimeFormat object enables language-sensitive relative time formatting.
  ```
    const formatter = new Intl.RelativeTimeFormat("ko");
  ```

### 10.5 Product Detail

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

### 10.6 Image Hostnames

- 이미지 최적화는 돈이 든다 => NextJS Image를 사용하려면 이미지 링크를 설정해야함
- [NextJS 공식문서 확인!](https://nextjs.org/docs/pages/building-your-application/optimizing/images#remote-images)

### 10.7 Pagination Actions

- 버튼 눌러서 다음 프로덕트 가져오기

  1. product-list 컴포넌트 따로 빼주기
  2. 해당 페이지 디렉토리 내부에 `action.ts` 만들고 함수 추가!
  3. product-list 컴포넌트 버튼에 클릭이벤트로 `action.ts` 속 함수 콜

  ```
  export async function getMoreProducts(page: number) {
    const products = await db.product.findMany({
      select: {
        title: true,
        price: true,
        created_at: true,
        photo: true,
        id: true,
      },
      skip: 1,
      take: 1,
      orderBy: {
        created_at: "desc",
      },
    });
    return products;
  }
  ```

- 프리즈마한테 타입 추론 시키기
  ```
  export type InitialProducts = Prisma.PromiseReturnType<typeof getInitialProducts>;
  ```

### 10.8 Recap

### 10.9 Infinite Scrolling

- 역시 infinite scroll에는 `new IntersectionObserver()`

## 11 Product Upload

- Zod, React Hook Form, Server Actions의 조합을 배우게 됩니다!

### 11.0 Introduction

- 영원히 못 생길... file input 모양 바꾸는 트릭!
  - input을 `hidden` 처리하고 label 클릭하면 input 클릭 동작이 일어남
  ```
  	<label
      htmlFor="photo"
      className="border-2 aspect-square border-dashed rounded-md flex flex-col justify-center items-center text-neutral-300 border-neutral-300 cursor-pointer group">
      <PhotoIcon className="w-20  transition group-hover:text-neutral-400" />
      <p className="text-neutral-400 text-sm">사진을 추가해주세요.</p>
    </label>
    <input onChange={onImageChange} type="file" id="photo" name="photo" className="hidden" />
  ```

### 11.1 Form Action

- `URL.createObjectURL()`
  - 로컬에서 볼 수 있는 url 생성
  - 파일을 브라우저 메모리 어딘가에 저장

### 11.2 Product Upload

- not professional 하지만 괜찮은 이미지 저장 임시방편
  ```
  if (data.photo instanceof File) {
  	const photoData = await data.photo.arrayBuffer();
    await fs.appendFile(`./public/images/${data.photo.name}`, Buffer.from(photoData));
  }
  ```

### 11.3 Image Setup

- Upload strategies

  1. User upload photos to our server -> upload photo to the cloudflare

  - cons: two duplicated request! -> need to pay the bandwidth :(

  2. browser -> cloudflare -> user -> server

- [cloudflare Doc](https://developers.cloudflare.com/images)

- Cloudflare 계정을 만들고 5달러 지불해서 Cloudflare Images 사용하기

### 11.4 Upload URLs

- 유저가 사진을 선택하는 즉시 업로드 URL을 요청

### 11.5 Image Upload

- formData를 가로채서 file 말고 string인 uploadURL로 바꾸기

  ```
  	const interceptAction = (_: any, formData: FormData) => {
      // upload imge to cloudflare
      // replace `photo` in formData
      // call uploadProduct()
    };

    const [state, dispatch] = useFormState(interceptAction, null);
  ```

- cloudflare에 업로드된 이미지를 보려면 경로 뒤에 `/avatar` 혹은 `/public` 등의 variant가 필요
  - `/avatar` 가 따로 생성되지 않으면 cloudflare admin 페이지에서 variants로 가서 생성!

### 11.6 Variants

- cloudflare admin -> images -> variants
- image transformation via url 을 하면 403 forbidden 에러가 뜸...

### 11.8 RHF Refactor

- how to combine validtion adding React Hook Form with server action and zod

- [@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers)

  ```
  npm i @hookform/resolvers
  ```

- react-hook-form의 handleSubmit은 validation이 끝나고 시작됨!

## 13 Caching

### 13.0 Introduction

- how to cache anything we want!
  - fetch fn is cached automatically
  - data를 맨날 부르면 안된다!

### 13.1 nextCache

- unstable_cache allows you to cache the results of expensive operations, like database queries, and reuse them across multiple requests.

- unstable_cache 의 parameters
  - 데이터베이스와 대화할 함수
  - 캐시 이름

```
import { unstable_cache as homeCache } from "next/cache";
const getCachedProducts = homeCache(getInitialProducts, ["home-products"]);
```

### 13.2 revalidate

- nextCache의 함수가 처음 호출되고 60초가 지나지 않았으면 NextJS는 cache 안에 있는 데이터를 return 할 것이다!
  - 60초마다 실행된다는 것 X
  - 60초가 지나서 **새로운 요청이 있다면** 함수를 재호출할 것

```
const getCachedProducts = homeCache(getInitialProducts, ["home-products"], {
	revalidate: 60,
});
```

### 13.3 revalidatePath

- how to revalidate the data on demand
  1. URL 타겟팅
  ```
  const revalidate = async () => {
    "use server";
    revalidatePath("/home");
  };
  ```

### 13.4 revalidateTag

- revalidate based on the tag

```
const getCachedProduct = nextCache(
	getProduct,
	["product-detail"], { // cache-key는 유니크해야함
	tags: ["product-detail"], // tags는 cache-key와 동일하지 않아도 되고 유니크하지 않아도 됨
});

const revalidate = async () => {
  "use server";
  revalidateTag("product-title");
};
```

### 13.5 fetch Cache

- NextJS에서는 fetch 함수가 nextCache 함수와 동일한 속성을 제공해줌
  - fetch 함수 중 GET request일 때만 캐싱될 것

```
async function fetchExample(){
  fetch("https://api.com),{
    next:{
      revalidate: 60,
      tags:["test"]
    }
  }
}
```

### 13.6 Production Cache

- development mode에서는 db를 계속 hit함
- production mode에서는 다름!
  ```
  npm run dev // development mode
  npm run build // production mode
  ```
  - static vs dynamic ? <- 누가 보는지에 따라 내용이 달라지는가?
    - static : 사용자가 달라져도 동일
      - ex. login, create-account, and home!
      - static한 페이지에서는 사용자의 리퀘스트가 db를 호출하지 않는다?
      - static page는 한번만 코드가 실행된다 <- refresh 한다고 해서 html을 새로 만들지 않는다
    - dynamic
      - ex. profile, /products/\[id]
    - home 이 왜 static 한가?
      - 쿠키를 사용하지 않으며 사용자가 누군지 상관 없고 header도 사용하지 않음

### 13.7 Route Segment Config

- customization option we have
- [Route Segment Config](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config)

- dynamic : dynamic 값 설정

  - auto : 기본값. 캐싱을 엄청나게 할 것이다 as much as possible
  - force-dynamic : static -> dynamic 페이지로 바꿔라

  ```
  export const dynamic = "force-dynamic";
  ```

- revalidate : 특정한 시간에 페이지를 재검증하도록 NextJS에게 지시 가능
  ```
  export const revalidate = 60;
  ```

### 13.10 generateStaticParams

- url에 변수가 있어도 static 페이지로 만들 수 있음 -> `generateStaticParams()`
- products/[id]
  - id가 4인 product detail 페이지를 static하게 바꿈
  ```
  export async function generateStaticParams() {
    return [{ id: "4" }];
  }
  ```

### 13.11 dynamicParams

- [Control what happens when a dynamic segment is visited that was not generated with generateStaticParams.](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamicparams)

- `dynamicParams` 변수가 `true` 로 설정되면 `generateStaticParams()`로 설정되지 않은 페이지들은 render되고, 데이터베이스가 호출될 것
-

```
export const dynamicParams = true;
```

## 14 Optimistic Updates

### 14.0 Introduction

- Every model needs to have single field with ID

  - Like는 한 유저가 해당 포스트에 한번만 할 수 있으므로 id를 지정해주는 방식이 달라짐
  - `@@id(name: "id", [userId, postId])` : id를 userId와 postId로 조합해서 가질 것!

    ```
    model Like {
      ...
      user       User     @relation(fields: [userId], references: [id], onDelete: Cascade)
      post       Post     @relation(fields: [postId], references: [id], onDelete: Cascade)
      userId     Int
      postId     Int

      @@id(name: "id", [userId, postId])
    }
    ```

### 14.1 See Posts

### 14.2 Likes and Dislikes

```
	const likePost = async () => {
		"use server";
		const session = await getSession();
		try {
			await db.like.create({
				data: {
					postId: id,
					userId: session.id!,
				},
			});
			revalidatePath(`/posts/${id}`);
		} catch (e) {}
	};
```

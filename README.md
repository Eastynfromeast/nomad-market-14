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

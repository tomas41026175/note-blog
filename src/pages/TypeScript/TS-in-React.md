# TS in React

## 型別宣告方式

interface

```ts
interface Person {
  name: string;
  age: number;
}
```

type

```ts
type Person = {
  name: string;
  age: number;
};
```

兩者選用: type 可以達成一行內直接宣告 ，interface 必須是 object

### 繼承方式的差異

```ts
interface Person {
  name: string;
  age: number;
}
interface SuperPerson extends Person {
  address: string;
}
```

```ts
type Person = {
  name: string;
  age: number;
};
type SuperPerson = Person & {
  address: string;
};
```

## 屬性

React.CSSProperties; //用於宣告 CSS 的時候

```ts
ex: style = { style: CSSProperties };
```

children 的型別
分別為是否支援 ref

```ts
React.ComponentProps<"button">;
React.ComponentPropsWithRef<"button">;
React.ComponentPropsWithoutRef<"button">;
```

## as const

將 type 變更為 readonly

## Omit

用於將特定型別排除在外

```ts
type User = {
  age: number;
  name: string;
};

type Guest = Omit<User, "age">;
// Guest = name:string
```

## index.d.ts & types.ts 差異

index.d.ts 通常用於 module & library

types.ts 通常用於全域通用型別

index.d.ts 用于为现有的 JavaScript 代码提供类型，而 types.ts 用于在 TypeScript 项目中共享和重用类型定义。

## unknown

當 call api 的時候，由於我們不會知道得到的資料會是甚麼型別，所以使用 unknown 宣告 data 的型別

## generics

推薦使用泛型時使用 regular function 較為簡潔

arrow function

```ts
// type T = string | number;

// const convertToArray = <T,>(value: T): T[] => {
//   return [value.toUpperCase()];
// };
```

regular function

```ts
// type T = string | number;

// function convertToArray<T>(value: T): T[] {
//   return [value];
// }
```

### 泛型宣告方式

```ts
type ButtonProps<T> = {
  count: T;
  countHistory: T[];
};

function Button<T>({ count, countHistory }: ButtonProps<T>) {
  return <button>Test Btn </button>;
}
```

這邊表示 ButtonProps 接收一個型別，其中 count & countHistory 都必須為 T / T[]

## useRef

```ts
const ref = useRef<HTMLButtonElement>(null);

<button ref={ref}></button>;
```

## as

```ts
type ButtonColor = "red" | "blue" | "green";

const testGetLocal = localStorage.getItem("buttonColor") as ButtonColor;
```

## import Type

一目了然

```ts
import { type Color } from "./types";
```

## Zod (*)

```ts
.then((data:unknown)=>{
// run it though Zod
const todo = todoSchema.parse(data);
//do sth with data
})
```

## ts-reset

### DefinitelyTyped
第三方library提供各種型別

### next-env.ts
用於存放隱私資料
//next-env.ts
```ts
// TEMP = "test.com/api/v1"
TEMP = "QHWDAJSQWQWODNASODQDD"
```

//component
```ts
fetch('temp.com',{
    next:{
        TEMP:
    }
})
```
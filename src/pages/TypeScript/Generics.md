# TS - 泛型( Generics ) & Utility type

## 語法
generics 的語法 ===<T>，然後在中間慣例上會是一個英文大寫字母，代表任意值。

```
//用generics寫出input跟return type的寫法。
 function doSomething<T>(input: T):T {
  ...做計算
  return result
  }
```

```
//使用方法
doSomething<number>(10);
```

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
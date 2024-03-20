# Monad

- 單子模式 (Monad Pattern): 用於處理具有副作用的函數式程式設計，例如 I/O 或狀態管理。
  - Monad：一種將值和相應的行為包裝在一起的模式，用於處理副作用和異常處理等場景，例如 Maybe 和 Either。'
- Maybe Monad: 用于处理可能为空的值。在不使用 Maybe 的情况下，你可能需要在函数中到处检查 null 或 undefined，这会使代码变得复杂且容易出错。Maybe Monad 允许你将这种可能为空的值封装起来，然后通过 Monad 的操作来安全地处理这个值，而不需要到处检查 null。
  - Maybe 通常有两种形式：Just 表示有一个值，Nothing 表示没有值。
  - 使用 Maybe 可以避免直接使用 null 或 undefined，从而减少运行时错误。

```ts
// 定义Maybe类型
type Maybe<T> = Just<T> | Nothing;

type Just<T> = { kind: "just"; value: T };
type Nothing = { kind: "nothing" };

// 创建Maybe值的帮助函数
function just<T>(value: T): Just<T> {
  return { kind: "just", value };
}

function nothing(): Nothing {
  return { kind: "nothing" };
}

// 使用示例
function getName(user: { name: string | null }): Maybe<string> {
  return user.name === null ? nothing() : just(user.name);
}

const user = { name: "John Doe" };
const maybeName = getName(user);

if (maybeName.kind === "just") {
  console.log(`The user's name is ${maybeName.value}`);
} else {
  console.log("The user doesn't have a name.");
}
```

- Either Monad: 用于表示一个操作可能有两种不同的结果：一个成功的结果和一个失败的结果。这与异常处理相似，但使用 Either 可以更明确地表达这种双重可能性，并且可以更函数式地处理错误。
  - Either 通常有两种形式：Right 通常用于表示成功的结果，而 Left 用于表示错误或失败的结果。
  - Either 可以用于替代异常抛出，提供了一种更纯粹的函数式方式来处理错误和异常情况。

```ts
// 定义Either类型
type Either<L, R> = Left<L> | Right<R>;

type Left<L> = { kind: "left"; value: L };
type Right<R> = { kind: "right"; value: R };

// 创建Either值的帮助函数
function left<L>(value: L): Left<L> {
  return { kind: "left", value };
}

function right<R>(value: R): Right<R> {
  return { kind: "right", value };
}

// 使用示例
function parseInteger(str: string): Either<string, number> {
  const parsed = parseInt(str, 10);
  return isNaN(parsed)
    ? left(`Cannot convert "${str}" to integer`)
    : right(parsed);
}

const result = parseInteger("123");

if (result.kind === "right") {
  console.log(`The parsed number is ${result.value}`);
} else {
  console.log(result.value); // 输出错误信息
}
```

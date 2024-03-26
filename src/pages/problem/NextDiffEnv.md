# 在 Next 中使用不同環境

## 前置知識

public 環境變數在 build 的時候就已經定下 無法改變

## 情境

build & start 的時候使用不同環境

```sh
pnpm build:tst

pnpm start:uat
```

## 解決方案

透過 server 階段獲得 private 環境變數，然後做為參數傳遞進 component

```tsx
"use server";

const HOME = async () => {
  const CURRENT_ENV = process.env.CURRENT_ENV;

  return <ClientComponent env={CURRENT_ENV} />;
};
```

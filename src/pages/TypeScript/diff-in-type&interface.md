# TS - interface & type差異
## Type
```
type Name = {
    letter: string,
    length: number
}

function a(name: Name) {
   ...省略
}

function b(name: Name) {
   ...省略
}

```

## Interface
```
interface Name {
    letter: string,
    length: number
}

function a(name: Name) {
   ...省略
}

function b(name: Name) {
   ...省略
}
```

## 差異:
1. Interface 可以透過extends進行擴充，而 type 只能用 Union 或是 Intersection 來重新產生一個新的 Type。
```
interface Name {
  letter: string;
  length: number;
}

interface newName extends Name {
  age: number;
}
```

Type 透過 Union 或是 Intersection 產生一個新的 Type
```
type Bear = Animal & {
  honey: boolean,
};
```

2. Interface 可以重複宣告來增加新的 type，Types 不能重複宣告

```
interface Name {
  letter: string;
  length: number;
}

interface Name {
  age: number;
}
```

```
type Bear = {
  age: 10,
};

type Bear = {
  gender: male,
};

//報錯
```

## 結論
Interface: 彈性較大，適合用在功能是可以被重複再利用的地方，或是功能可能會被多方程式碼或第三方套件依賴的地方。
Type: 比較沒有彈性，適合用在不希望被人擴充、單純想代表一種獨立的靜態資料時。
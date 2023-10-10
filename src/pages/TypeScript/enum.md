# TS - 枚舉(enum)
## 場景
- switch的時候為case1.2.3.4結合命名，以達到降低後續維護成本&提高code可讀性

- 使用枚舉類型給一組數值賦予名稱
- 可通過value取得id
- 也可以通過id取得value
- id重複時，會進行覆蓋
- 有兩種類型 
    - constant member(常數項)
    - compute member(計算所得項)
        - 需要放置在確定賦值得枚舉項目之前，後面不能放尚未手動賦值的枚舉項目。
- 常數枚舉 !== 常數項
    - 會在編譯階段被刪除
    - 會打印value
    - 不能包含計算成員
    - 使用const  enum宣告
- 外部枚舉
    - 會在編譯階段被刪除
    - 用於聲明文件
    - 使用delcare enum宣告
- 可以同時使用declare & const 進行宣告

```
enum NumberType{
    one = 1, //手動賦值， 若沒有賦值，默認為0
    two, //後面的value若是沒有賦值，根據前一個有value的值 + 1
    three = 10, 
    four, //11
}

console.log(NumberType.one) // 1

//id重複時，會進行覆蓋
enum NumberType{
    one = 2, 
    two = 1, 
    three, //output只會有3個項目 one會被three覆蓋
    four, //
}

//有兩種類型
enum Color{
    red, //常數項
    blue = 'blue'.length, //計算所得項
    green,
}
```

```
//常數枚舉使用const enum定義

const enum Obj{
    o,
    b,
    j = 10+10 //不算計算所得項
}

```

```

//外部枚舉使用declare enum定義
    //用在聲明文件

declare enum ABC{
    a,
    b,
    c = 10+10 //不算計算所得項
}

```
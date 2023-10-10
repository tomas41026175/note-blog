# TS - 類型別名(type) & 字符串字面量類型
## 使用type給類型指定別名
- 常用於聯合類型

```
type s = string //通過type方法 指定s為string

let str: s = '123'  //指定str型別為s 也就是string
//str = 123

type group = string | number | boolean

let x:group = 123

```

## 字符串字面量類型
- 指定value

```
type stringType = 'tomas' | 'tom' | 'john'

let names: stringType = 'tomas' //此處value只能是上面宣告過的其中一個
```
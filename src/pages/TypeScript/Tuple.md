# TS - 元組(Tuple)
## 合併不同類型的對象

```
let Tarr:[number,string] = [123,'123']

// 自動視為聯合類型
// 添加value時，需要是number / string類型，也就是上面宣告過的型別
Tarr.push(456)
Tarr.push(true) //error
```
# TS - 類型指定(as)
## 將任何一個類型直接指定為特定的型態
- 當確定資料型態時，可以使用
    - 兩種宣告方式
        1. 使用 變數 as 型別 
        2. 使用<型別>變數
```
function temp(x:string | number):number{
    if((x as string.length)){
        return (<string>x).length // 第一種
    }else{
        return x.toString().length //第二種
    }
}
```
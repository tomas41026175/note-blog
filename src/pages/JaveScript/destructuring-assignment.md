# Js - 解構函數(array)、對象解構(obj)
###### tags: `JavaScript` `重新認識JaveScript`
- 解構函數
- 目的
    - 將array的元素快速批量賦值給一系列變數的簡潔語法。
- 基本語法
    - 賦值運算符 = 左側的[]用於批量聲明變數，右側array的元素將被賦值給左側。
    - 變數的順序對應array的元素位置進行賦值操作。
    ```
    const arr = [1,2,3]
    
    const [a,b,c] = arr
    // a,b,c  = 1,2,3
    ```
- 對象解構
- 目的
    - 將obj屬性&方法快速批量賦值的語法
- 基本語法
    - const {uname,age} = {uname:'abc', age:18}
- 場景
    - 當遇到obj中的命名已經被使用過
        - 可以改變變數的名稱
        ```
        const {uname: username, age} = {uname:'abc', age:18}
        uname: username == 變數: 給誰
        ```
    - 解構array對象
        ```
        const pig = [
            {
                uname:'pig',
                age: 6,
            }
        ]
        const [{ uname, age }]=pig
        // uname : pig, age: 6
        ```
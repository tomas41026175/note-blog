# hosting-1
- 變量提升
    - 會將所有var宣告的數值提升至當前作用域的最上方。
    - 指提升宣告，不提升賦值。
    - let/const 中不存在hosting
    - 變量提升出現在相同作用域中
    - **推薦先宣告在訪問value**
    ```
    console.log(num + '件')
    var num = 10
    上方的code又等於
    var num
    console.log(num + '件') //這邊的num = undefined
    var num = 10
    ```
- 函數提升
    - 會把所有函數的宣告提升到當前作用域的最上方
    ```
        fn()
        function fn() {
            console.log('print')
        }
        又等於
        function fn() {
            console.log('print')
        }
        fn()
    ```
    - 當下面這狀況的問題在於
        - 函數表達式不存在提升現象
    ```
        fn()
        var fn() = function () {
            console.log('123') //函數表達式不存在提升現象
        }
    ```
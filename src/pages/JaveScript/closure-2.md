# 閉包(Closure) - 2
- 閉包 = 內層函數 + 外層函數的變量
    - 內部函數引用外層的參數
    - 一個func中還有一個引用內部參數的func
    ```
        const fn = () =>{
            let a = 0
            cosnt fnn = () =>{
                return a + 1 
            }
            return  fnn
        } 
        fn() // fnn這個function
        因為是一個func所以要使用就變成
        => fnn()() //  a + 1 = 1 //所以答案為1
         
         所以可以說fn這組func是一個閉包
    ```
- 應用
    - 實現隱私的資料數據
        - 實現一個計數器 當被調用一次就+1
        - count & count1 即使指向同一個閉包fn，但他的value是分開計算的
        - 這邊外部引用fn的時候，會持續引用裡面的fnn，所以可能產生內存洩漏的問題
        ```
        const fn = () =>{
            let a = 0
            cosnt fnn = () =>{
                return a ++
            }
            return  fnn
        } 
        let count = fn()
        count() // 1
        count() // 2
        let count1 = fn() 
        count1() // 1
        ```
- 閉包的問題
    - 怎麼理解閉包
        - 閉包 = 內部函數 + 外層函數的變量
    - 閉包有甚麼作用
        - 封閉數據，實現數據私有化，外部也可以**訪問函數內部的變量**
        - 他允許func將與其所操作的某些數據(環境)關聯起來 
    - 可能引起的問題
        - 會有內存洩漏的問題
# 正則表達式
    - 用於定義一些字符串的規則
        - 電腦可以根據正則表達式，來檢查一個字串是否符合規則
        - 獲取將字符串中符合規則的內容篩選出來
        ```
            //創建一個正則表達式
            //語法
            let reg = new RegExp('正則表達式','匹配模式')
            // 使用typeof檢查正則對象會返回obj
            //方法
                - test()
                    - 使用這個方法可以用來檢查一個字串是否符合正則表達式的規則
                        - 返回value為布林值
                - i/g
                    - i 為忽略大小寫
                    - g 為全局匹配模式
            ----
            let reg  = new RegExp('a','i') //檢查是否有a但忽略大小寫
            let reg  = new RegExp('a','g') //檢查是否有a 必須小寫
            
            let str = 'a'
            
            let result = reg.test9(str) //true  只要有a就是true
            console.log(reg.test('bcabc')) // true
            
            ```
    - 判斷email
        1. 前面可以是xxx
        2. 中間一個@
        3. 後面也可以是xxx
        4. .com獲取其他的東西
    
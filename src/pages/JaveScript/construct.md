# Js - 建構函數(construct) / 實例化 / 實例方法 & 靜態方法
###### tags: `JavaScript` `重新認識JaveScript`
- 建構函數
    - 目的
        - 通過建構函數，創建多個類似的對象。
    - 規定
        1. 命名以大寫開頭
        2. 只能由new操作符創建
    - 基本語法
    ```
        function Pig(name,age,gender){
            this.name = name
            this.age = age
            this.gender = gender
        }
        
        這
        //建立對象a
        const peppa = new Pig('peggy',6,'女')
    ```
    - 執行過程
        1. 創建新對象
        ```
            function Pig(name) {
                this.name = name
            }    
        ```
        2. 構建函數this指向新對象
        ```
            new Pig('peggy')
        ```
        3. 執行建構函數code，修改this，添加新的屬性。
        4. 返回新的對象
    - 結論
        - 建構函數的作用，寫法
            - 通過建構函數，創建多個類似的對象。
            - new + 大寫字母開頭的函數
        - new關鍵字調用函數的行為被稱作
            - 實例化
        - 建構函數需要return嗎? return 是甚麼
            - 不需要
            - 建構函數自動返回新的對象

- 實例方法 & 靜態方法
    - 說明
        1. 為建構函數傳入參數，創建結構相同但value不同的對象
        2. 建構函數創建的實例對象**彼此獨立**互不影響
    - 實例對象的屬性&方法被稱為**實例成員(實例屬性&方法)**
    - 實例成員
        ```
         funtion Pig(name){
                        this.name = name
                    }
                    const peiqi = new Pig('peggy')
                    peiqi.name = '小豬peggy' //實例屬性
                    peiqi.sayHi = () =>{    //實例方法
                        console.log('Hi')
                    }
                    const qiaozhi = new Pig('qiaozhi')
                    console.log(peiqi === qiaozhi) //false 雖然用同一個方法創建，但地址不同
        ```
---        
- 靜態成員
    - 說明
        1. 建構函數上的屬性&方法
        2. 靜態方法中的this指向建構函數
        ```
            function Person(name, age){
                //省略實例成員
            }
            //靜態屬性
            Person.eyes = 2
            Person.arms = 2
            console.log(Person.eyes) //2
            //靜態方法
            Person.walk = ()=>{
                console.log('walking')
                
                //this指向Person
                console.log(this.eyes)
            }
        ```
- 結論
    - 實例成員(屬性&方法)寫在誰身上
        - **實例對象**的屬性&方法就是實例成員
        - 實例對象**相互獨立**，**實例成員**當前實例對象使用
        - 只對當前對象有用
    - 靜態成員寫在誰身上
        - 建構函數的方法&屬性
        - 只能夠過函數訪問
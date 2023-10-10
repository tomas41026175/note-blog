# Js- 實體參數 & 形式參數 & _call & _apply & Argument
- 形參的作用為接收實參
    - 形參 = func中的內部值
    - 實參 = 實際上引入func中的參數
    1. 當實參為原始值的時候，形參為實參的拷貝，因此func中的形參不會影響實參。
    ```
    function test(){
        str = 'ch' //形參
        return str
    }
    test() //'ch'
    const str1 = 'china'
    const str2 = 'test(str1)'
    console.log(str1) //china
    console.log(str2) //ch  這邊帶入實體參數str2，但func中並未調用所以印出str='ch' 
    ```
    2.當實體參數為引用值，此時形參為實餐的內存地址拷貝，因此體內形參值的變化在一定情況下會引響實參。
    ```
    function test(obj){
        //obj實際上為實體參數obj的引用，也就是說形參與實參同時指定一個內存地址。
        obj.name = 'ts' // 此時改變的為內存地址中的value，所以會同時影響形參與實參。
                        
        obj = {         // 此時對於形參obj進行重新賦值，給他一個新的內存地址
            name: 'react', //從這邊往後的形參obj將與原先實參的obj完全無關
            star: 13000,
        }
        obj.star = 20000; //所以這邊改變的也只是型參的star屬性
        return obj
    }
    const obj1 = {
        name : 'js'
        star : 100000
    }
    const obj2 = test(obj1)
    console.log(obj1) // name: 'ts', star : 100000
    console.log(obj2) // name : 'react', star: 20000
    ```
    3. 
    4. 
- _apply & _call
    - 都是函數對象的方法，需要函數來調用
    - 當對於func調用call() & apply()都會執行函數
    - 可以將一個對象指定為第一個函數，這個對象將會變成函數指定的**this**
        - 可以修改函數的this
    ```
    func(){
        console.log(this)    
    }
    func.apply(obj) // obj
    ```
    
- call
    - 可以將參數放在對象後面依次傳遞
- apply
    - 需要將參數封裝到一個Array中統一使用
- this
    - 以函數形式調用時，this永遠都是window
    - 以方法調用，this就是調用方法的對象
    - 以構建函數調用時，this是新建立的對象
    - 使用call & apply調用時，this為指定的對象
- Argument
    - 在調用func時，func會自動傳入2個隱藏的參數
        1. 函數上下文的this
        2. 封裝實體參數的arguments
        3. 
            - arguments是一個類Array對象，可以通過**索引**來操作數據，也可以**獲取長度**。
            - 在調用func時，我們所傳遞的參數都會被保存在arguments中
            - 即使不定義形參也可以透過argumetns調用實體參數
                ```
                    arguments[0]
                    arguments[1]...
                ```
            - 包含一個callee屬性
                - 對應一個func對象，就是當前正在指向的func的對象
    ```
    function func(){
        console.log(arguments) //
        console.log(arguments.length) // 0 !!保存實體參數 所以目前為0
    }
    //argument =>類似Array的參數 
    func() //
    ```
# Arrow function(箭頭函數)
- 目的
    - 不綁定this
    - 更簡潔的code
- 使用場景
    - 替代原本需要匿名函數的地方
    - 
- 語法
    - 基本語法
      ```
          const fn= (x)=>{}
      ```
    - 只有一個型參，可以省略小括號
       ```
          const fn = x =>{}
       ```
    - 只有一行code可以省略大括號、return
      ```
         const fn = x =>console.log(x)
      ```
    - 可以直接返回一個對象 !!
      ```
          const fn = (umane) => ({name: uname})
          fn('abc') //{name:'abc'}
      ```
- 應用
    1. 利用arrow func求和
    ```
      const getSum = (...arr) =>{
          let sum = 0
          arr.forEach((e)=>{
              sum += e
          })
          return sum
      }
      cosnt result = getSum(2,3) //5
    ```
    2. this
        - 指向上一層的作用域
    ```
    const obj = {
        uname:'pink老師',
        sayHi:function (){
            let i = 10
            const count = () =>{ //this指向上一級function中的func
            console.log(this) //obj
            }
            count()
        }
    }
    obj.sayHi() //
    ```
- 結論
    1. 屬於表達式函數，不存在提升
    2. 只有一個參數可省略括號
    3. 只有一行code可以省略{}，並自動返回value
    4. 加括號的函數返回對象字面量表達式
    5. 沒有arguments，使用剩餘參數。
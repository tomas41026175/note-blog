# Js - 剩餘參數 & 展開運算符
###### tags: `JavaScript` `重新認識JaveScript`
- 當不確定參數時，可透過
    - arguments(動態參數)
        - 偽數組
        - 抓取所有實參
        - 有一個callee方法
        - arrow function中沒有arguments
    - 剩餘參數 (a,b,...c)
        ```
         const getSum =(a,b,..c) =>{
             console.log(c) // []<=a,b之外剩餘的所有參數
         }
        ```
- 展開運算符
    - 特點
        - 不會修改原本Array的value
    - 使用場景
        - 求最大值(最小值)，合併Array
        ```
        const arr1 = [3,4,5]
        cosnt arr2 = [1,2,3]
        const arr3 = [...arr1,...arr2]
        ```
        - Array中沒有直接求最大值的方法，透過...配上Math.Max(...arr) //最大值
         
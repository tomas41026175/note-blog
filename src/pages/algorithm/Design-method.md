# 演算法 - Design method
**1. Linear Search (Sequential Search)**
    - 會逐步檢查Array中的所有element,只有在找到element / 到最後一個element才會停止
    - 找到回傳element 沒找到回傳-1
- P(不發音)seudocode for Lineaar Search
    ```
        LINEAR-SEARCH(array,n):
        for i from o to array.length - 1:
            if(array[i]==n):
                return i
        return -1
        
        example:
            func linearSearch(arr,n){
                for(let i =0; iMarr.length; i++){
                    if(arr[i]===n){
                        return n
                    }
                }
                return -1
            }
        
    ```
    - Worst Case Performance: O(n) 要找的項目在最後一項
    - Best Case Performance: O(1) 要找的項目在第一項
    - Average performance: O(n/2) 平均來說可以在中間找到項目

**2. Binary Search**
    - 不斷將Array進行二分 以中間值做比較
    - 比Linear Search 有效率 但只能用在Sorted Array
    
```
            BINARY-SEARCH(array, num)
            min = 0
            max = array.length – 1
            while min <= max:
                middle = (min + max) / 2
                if num > array[middle]:
                    min = middle + 1
                else if num < array[middle]:
                    max = middle – 1
                else:
                    return middle
            return -1

        ex.
        function binarySearch(arr,n){
            let min =0
            let max = arr.length-1
            while(min <=max){
                 let middle = Math.floor((max + min)/2)
                 if (n>arr[middle]){
                     min = middle + 1
                 }else if(n<arr[middle]){
                     max = middle -1
                 }else if(n === arr[middle]){
                     console.log('Found number' + n +"at position" + middle)
                     return middle
                 }
            }
            console.log( 'Cann't find nunber)
            return -1
        }
```
-
    - Worst Case Performance: O(logn) 要找的項目在最後一項
    - Best Case Performance: O(1) 要找的項目在正中間
    - Average performance: O(logn) 平均來說可以在中間找到項目
    
**3. Counter**
    - 比分版的概念
    - 是一個常用的技巧
    - 可以有效地降低演算法的複雜度
    ```
        ex1 當需要迴圈嵌套的的時候 可以使用Counter
        arrayA = [15,3,6,8,24,16]
        arrayB = [11,3,9,6,15,8]
        比較兩個陣列中重複的value
        1 - 使用迴圈嵌套來比較兩個array =>O(n)
        2 - 使用counter = 連接兩條array路每個數出現的次數,print出>2的number
    ```
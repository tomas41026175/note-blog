# 演算法 - Design method

**1. Linear Search (Sequential Search)** - 會逐步檢查 Array 中的所有 element,只有在找到 element / 到最後一個 element 才會停止 - 找到回傳 element 沒找到回傳-1

-   P(不發音)seudocode for Lineaar Search

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

    -   Worst Case Performance: O(n) 要找的項目在最後一項
    -   Best Case Performance: O(1) 要找的項目在第一項
    -   Average performance: O(n/2) 平均來說可以在中間找到項目

**2. Binary Search** - 不斷將 Array 進行二分 以中間值做比較 - 比 Linear Search 有效率 但只能用在 Sorted Array

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

    - Worst Case Performance: O(logn) 要找的項目在最後一項
    - Best Case Performance: O(1) 要找的項目在正中間
    - Average performance: O(logn) 平均來說可以在中間找到項目

**3. Counter** - 比分版的概念 - 是一個常用的技巧 - 可以有效地降低演算法的複雜度
ex1 : 當需要迴圈嵌套的的時候 可以使用 Counter
arrayA = [15,3,6,8,24,16]
arrayB = [11,3,9,6,15,8]
比較兩個陣列中重複的 value
1 - 使用迴圈嵌套來比較兩個 array =>O(n)
2 - 使用 counter = 連接兩條 array 路每個數出現的次數,print 出大於 2 的 number

```js
const findCommonValues = (arrA, arrB) => {
    let result = []; //make an empty array to store the result
    let arr3 = arrA.concat(arrB); //concatenate the two arrays into one
    let counter = {}; //make an empty object to store the values and their count

    for (let i = 0; i < arr3.length; i++) {
        if (!counter[arr3[i]]) {
            //if the value is not in the object, add it and set the count to 1
            counter[arr3[i]] = 1;
        } else {
            // if the value is in the object, increment the count
            counter[arr3[i]]++;
        }
    }

    for (let property in counter) {
        //loop through the object and push the values that have a count of 2 or more into the result array
        if (counter[property] >= 2) {
            // if the count is 2 or more, push the value into the result array
            result.push(property); // push the value into the result array
        }
    }
    console.log(result); // print the result array
    return result; // return the result array
};
```

**4. Pointer(指針/指標/箭頭)**

-   為了減少複雜度
    -   空間效率：不需要額外的數據結構或空間。
    -   時間效率：通常可以達到較低的時間複雜度，因為可以在一次遍歷中解決問題。
-   分類 :
    -   雙指針：這是最常見的形式，通常用於陣列或串列。使用兩個指針，一個開始於開頭，另一個開始於結尾。根據某些條件，這兩個指針會朝彼此移動。
    -   快慢指針：在鏈表中查找中間元素或檢測循環時特別有用。一個指針移動得比另一個快。
    -   滑動窗口：通常使用兩個指針來定義陣列或串列中的一個子段，通常用於找到滿足某些條件的連續子
    -   多指針：在某些複雜的問題中，可能需要使用多於兩個的指針。
-   注意事項 :
    -   初始化指針：根據問題的需要，將指針放在合適的位置。
    -   選擇適當的遍歷條件：確定何時停止遍歷。
    -   移動指針：根據問題的需要和當前的元素，選擇如何移動指針。
    -   維護其他必要的狀態或變數：這可以包括計數器、返回值或其他狀態指示器。
-   情境
    -   已排序的陣列：
        -   對撞指針：例如在找到兩個數之和等於給定值的問題中，可以使用一個指針從開頭開始，另一個從結尾開始，然後將這兩個數相加。根據和與目標值的比較，可以移動一個或另一個指針。
        -   三數之和：解決三數之和為 0 的問題時，可以固定一個數，然後使用對撞指針技巧尋找其他兩個數。
    -   未排序的陣列或串列：
        -   快慢指針：在鏈表中尋找循環或中間節點時，快慢指針都非常有用，無需鏈表已排序。
        -   滑動窗口：在求最大連續子數組和或最長不重複子串等問題中，可以使用滑動窗口技巧，而不需要事先排序陣列或串列。
    -   矩陣：
        -   在已排序的二維矩陣中尋找元素時，也可以使用指針技巧，從矩陣的一個角開始搜尋，根據比較結果移動指針。

```ts
type Result = [number, number];

const averagePair = (arr: number[], average: number): Result[] => {
    const goal = average * 2;
    let resultArr: Result[] = [];
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] + arr[right] === goal) {
            resultArr.push([arr[left], arr[right]]);
            left++;
            right--;
        } else if (arr[left] + arr[right] > goal) {
            right--;
        } else {
            left++;
        }
    }

    return resultArr;
};
```

**5.Sliding Window**

-   滑動窗口是一種常用於數組和字符串問題的算法策略。這種技巧主要是用來解決需要考慮連續子序列或子串的問題，尤其是這些問題需要在線性時間複雜度或要求最佳解答的情況。

-   特點 :

    -   窗口移動：滑動窗口策略主要涉及到兩個指標，即窗口的左端點和右端點。這兩個指標在算法的運行中可能會向右移動，從而"滑動"窗口。
    -   窗口大小：滑動窗口的大小可以是固定的，或者是動態改變的。當窗口的大小固定時，通常用於解決需要連續子序列具有特定長度的問題。當窗口大小可以改變時，通常是用於尋找符合某些條件的最小或最大子序列。
    -   窗口內數據的更新：當窗口滑動時，我們可以線性地更新窗口內的信息，例如窗口內元素的總和、最大值、最小值等。這種策略可以避免不必要的重複計算。

-   常見應用 :

    -   尋找最大/最小的連續子序列和。
    -   查找長度最小的子序列，其總和大於給定值。
    -   計算所有大小為 K 的連續子序列的平均值。
    -   字符串問題，例如尋找包含所有字符的最短子串。

-   優點：
    -   效率：使用滑動窗口策略，通常可以將時間複雜度降低到 O(N)。
    -   簡單性：相對於其他策略，滑動窗口在某些問題上提供了更清晰、更直觀的解決方案。

**6.Recursion**

-   function 會調用自己
-   Recursion 使用 stack 的資料結構，function in another function 被稱為 call stack，在每次 call 的時候會往這個 stack 中加上一個 stack frame，
-   也是一種 數列(sequences) 的關係
    ex:

```
T(1) = 10
T(n) = T(n-1) +15
```

```ts
const recursive = (n: number): number => {
    if (n === 1) return 10;
    return recursive(n - 1) + 15;
};
recursive(4); //55
```

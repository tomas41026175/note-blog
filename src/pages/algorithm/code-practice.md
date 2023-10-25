# Code-practice

## Frequency problem - Counter

-   Frequency Problem (頻率問題)
-   比對兩個字串其中不同字母的出現頻率
-   透過物件儲存字母出現的次數，再比對兩個物件的值是否相同
-   時間複雜度 O(n + m + k) => O(n)
-   空間複雜度 O(n + m) => O(n)

```ts
// 宣告型別
type HandleObjProps = {
    [key: string]: number;
};

const frequency = (str1: string, str2: string): boolean => {
    if (str1 === str2) return true;
    // 透過 handle function 處禮物件
    const obj1 = handleObj(str1); //O(n)
    const obj2 = handleObj(str2); //O(m)

    //驗證兩個物件的 key 值和 value 值是否相同
    for (let key in obj1) {
        //O(k)
        if (!(key in obj2)) {
            // 這邊的作用是確保兩個物件的 key 值都一樣
            return false;
        }
        if (obj2[key] !== obj1[key]) {
            //並且確保兩個物件的 value 值也一樣
            return false;
        }
    }

    return true;
};

//抽出重複邏輯
//複雜度為O(n) n = str長度
const handleObj = (str: string): HandleObjProps => {
    const tempObj: HandleObjProps = {};
    for (let char of str) {
        tempObj[char] = (tempObj[char] || 0) + 1;
    }
    return tempObj;
};

console.log(frequency('abcde', 'abgde'));
```

## Average Pair - Pointer & Loop

-   從一個已排列的整數 Array 中找出平均值為 average 的組合
-   可以使用迴圈 & 指針解出
-   思路 :
    -   迴圈 : 從第一個元素開始 與後面所有元素相加 符合條件的加入新 Array 中，最後回傳 new Array。
    -   指針(pointer) : 從前後開始相加，若總和等於目標就加入 new Array 並且 前後各往前一步，若是相加大於目標 右邊-1，小於則 左邊-1。
        -   這個思路的前提條件 : 排序過的陣列

```ts
type Result = [number, number];

const averagePair = (arr: number[], average: number): Result[] => {
    const goal = average * 2;
    let resultArr: Result[] = [];
    let left = 0;
    let right = arr.length - 1;

    // for (let i = 0; i < arr.length - 1; i++) {
    //     for (let j = i + 1; j < arr.length; j++) {
    //         if (arr[i] + arr[j] === goal) {
    //             resultArr.push([arr[i], arr[j]]);
    //         }
    //     }
    // }

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

## Palindrome - Pointer

-   Palindrome : 一個字顛倒後還是同一個字
-   思路 :
    -   透過 pointer 選取第一 & 最後的 string 只要不相等 就 return false ，相等就繼續比對。

```ts
const palindrome = (str: string): boolean => {
    const definedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const definedSteLen = definedStr.length;

    const left = 0;
    const right = definedStr.length - 1;

    if (definedSteLen === 1) return true;
    while (left < right) {
        if (definedStr[left] !== definedStr[right]) return false;
    }
    return true;
};
```

## Subsequence Problem - Pointer

    - Subsequence 是一個新 String ，在不改變原 String 的情況下。
    - ex : ear & early 就符合 Subsequence
    - 思路 : 在 Subsequence 中搜索原 string 的第一個字，若是符合就繼續比對後面的字，若是比對完成前有 false，則往後找，直到 Subsequence length - origin string length

單指針

```ts
const isSubsequence = (sub: string, ori: string): boolean => {
    let left = 0;

    // for (let i = 0; i < sub.length; i++) {
    //     if (sub[i] === ori[left]) {
    //         left++;
    //         if (left === ori.length) return true;
    //     }
    // }

    for (let char of sub) {
        if (char === ori[left]) {
            left++;
            if (left === ori.length) return true;
        }
        if (left === ori.length) return true;
    }

    return false;
};
```

雙指針 - 思路 : 在 Subsequence 中同時比對 ori & sub

```ts
const isSubsequence = (sub: string, ori: string): boolean => {
    let subIndex = 0;
    let oriIndex = 0;

    while (subIndex < sub.length && oriIndex < ori.length) {
        if (sub[subIndex] === ori[oriIndex]) {
            oriIndex++;
        }
        subIndex++;
    }
    return oriIndex === ori.length;
};
```

## Max & Min Sum - sliding window

-   找出連續數字中的最大 & 最小總和
-   Number.NEGATIVE_INFINITY & Number.POSITIVE_INFINITY

Max Sum

```ts
const maxSum = (arr: number[], size: number): number | null => {
    let max_value = Number.NEGATIVE_INFINITY; // -Infinity

    if (size > arr.length) return null;
    for (let i = 0; i < arr.length - size + 1; i++) {
        // let window: number[] = [];
        let attempt = 0; // sum of the window
        for (let j = i; j < i + size; j++) {
            // j is the index of the window
            // i + size is the end of the window
            attempt += arr[j];
        }
        if (attempt > max_value) max_value = attempt;
        // if the sum of the window is greater than the max_value, then the max_value is the sum of the window
    }

    console.log(max_value);
    return max_value;
};

maxSum([1, 2, 3, 5, 4, 8, 51, 4, 5, 2, 11, 3, 1, 4, 9, 49, 5, 4, 7, 4, 5, 8, 9, 6, 4], 5);
```

Min Sum

```ts
const minSum = (arr: number[], size: number): number | null => {
    let min_value = Number.POSITIVE_INFINITY;

    if (size > arr.length) return null;
    for (let i = 0; i < arr.length - size + 1; i++) {
        // let window: number[] = [];
        let attempt = 0; // sum of the window
        for (let j = i; j < i + size; j++) {
            // j is the index of the window
            // i + size is the end of the window
            attempt += arr[j];
        }
        if (attempt < min_value) min_value = attempt;
    }

    console.log(min_value);
    return min_value;
};
```

###　 Improve

-   window 中前後的差距只有第一 & 最後的數字有差異
-   window 移動的時候扣掉當前 window 第一個元素的前一個數字 & 加上當前 window 的最後一個數字，就是目前的 window 總和。

Max Sum

```ts
const maxSum = (arr: number[], size: number): number | null => {
    if (size > arr.length) {
        return null;
    }
    // Find the sum of first window of size K
    let maxValue = 0;
    for (let i = 0; i < size; i++) {
        // Correction: The loop should only go up to 'size', not the entire 'arr' length
        maxValue += arr[i];
    }

    // Compute sums of remaining windows by
    let currentWindowValue = maxValue;
    for (let j = size; j < arr.length; j++) {
        // Remove the leftmost element of the previous window and add the current element to the window sum
        currentWindowValue = currentWindowValue + arr[j] - arr[j - size];
        if (currentWindowValue > maxValue) {
            maxValue = currentWindowValue;
        }
    }

    return maxValue; // Correction: The function should return 'maxValue' not 'currentWindowValue'
};
```

## Min Sub array Length - sliding window & Pointer

-   兩個參數 arr & number
-   return 一個其中的 sum 大於等於 number 的 array 長度
-   return 的 array 中元素在 oriArray 中必須相鄰

-   思路 : 找出總和大於目標的子陣列，並且逐漸刪去多餘的部分，並向後找。
-   流程 :
    -   使用兩個指標 start 和 end 從陣列的起始位置開始。
    -   持續增加 end 指標直到子陣列的和大於或等於 num。
    -   當子陣列的和達到或超過 num，記錄子陣列的長度，然後將 start 指標向右移以減小子陣列的長度。
    -   重複此過程，持續更新子陣列的最小長度，直到 start 指標達到陣列的末尾。
    -   返回找到的最小長度，如果沒有找到任何子陣列的和大於或等於 num，則返回 0。

```ts
const minSubArrayLen = (arr: number[], num: number): number => {
    let total = 0; // 紀錄目前的總和
    let start = 0; // 起始點
    let end = 0; // 結束點
    let minLen = Infinity; // 最小長度

    // 當起始點小於陣列長度時
    while (start < arr.length) {
        // 如果目前總和小於 num 且結束點小於陣列長度
        if (total < num && end < arr.length) {
            total += arr[end]; // 總和加上結束點的值
            end++; // 結束點往後移
        } else if (total >= num) {
            // 如果目前總和大於等於 num
            minLen = Math.min(minLen, end - start); // 表示在 minLen 與 end - start 中取最小值
            total -= arr[start]; // 總和減去起始點的值 等於總和減去最前面的值
            start++; // 起始點往後移
        } else {
            break;
        }
    }

    return minLen === Infinity ? 0 : minLen;
};
```

## Unique Letters String - sliding window & Counter

-   function 接受一個 arr , return 一個沒有重複字的 sub string
-   思路 :
    -   採取 sliding window 的方式，若 char 沒重複就擴大 window ，若重複則從第一個字元開始移除。
    -   根據是否已經出現過來判斷 start 是否往前

```ts
const findUniqueString = (str: string): string => {
    let start = 0;
    let end = 0;
    let maxStart = 0; // 開始位置
    let maxLength = 0; // 最大長度
    let seenChars = new Set<string>(); //Counter

    while (end < str.length) {
        if (!seenChars.has(str[end])) {
            seenChars.add(str[end]); // 記錄已經出現過的字元
            end++;
            if (end - start > maxLength) {
                maxStart = start;
                maxLength = end - start;
            }
        } else {
            //如果已經出現過，就把開頭的字元刪除 (直到沒有重複的字元)
            seenChars.delete(str[start]); // 刪除開頭的字元
            start++;
        }
    }

    return str.slice(maxStart, maxStart + maxLength);
};
```

## Largest Product

    - 最高乘積

```ts
const largestProduct = (arr: number[], n: number): number => {
    let maxSum = -Infinity;
    let currentProduct;
    let left = 0;
    let right = n - 1;

    while (right < arr.length) {
        currentProduct = 1;
        for (let i = left; i <= right; i++) {
            currentProduct *= arr[i];
        }
        if (currentProduct > maxSum) {
            maxSum = currentProduct;
        }
        left++;
        right++;
    }
    return maxSum;
};
```

## Fibonacci Sequence - recursive

-   F(0) = 0
-   F(1) = 1
-   F(n) = F(n-1)+F(n-2)
-   這邊將計算的部分抽出來 作為 recursive 進行

```ts
//簡單來說 recursive 需要先處理 input 會發生的 error 狀況，再來處理每次 call 的時候需要根據 input 做甚麼事情建立 function ，最後再處理 recursive 的終止條件。
const fibonacci = (n: number) => {
    if (n < 0) return [];

    const fib: number[] = [];

    const recursive = (n: number) => {
        if (n === 0) return 0;
        if (n === 1) return 1;
        return recursive(n - 1) + recursive(n - 2);
    };

    for (let i = 0; i <= n; i++) fib.push(recursive(i));

    return fib;
};
```

### memoization ver

    - 將以計算過的數字存起來，若 input 的 result 已經計算過就直接Return
    - 可以在 n 的 value 很大的時候 減少重複計算所造成的效能耗損

```ts
const fibonacci = (n: number): number[] => {
    if (n < 0) return [];

    const fib: number[] = [];
    const cache: number[] = [];

    const recursive = (n: number): number => {
        if (cache[n] !== undefined) return cache[n];

        let result: number;
        if (n === 0) {
            result = 0;
        } else if (n === 1) {
            result = 1;
        } else {
            result = recursive(n - 1) + recursive(n - 2);
        }

        cache[n] = result;
        return result;
    };

    for (let i = 0; i <= n; i++) fib.push(recursive(i));

    return fib;
};
```

## Fibonacci Sequence - iteration

```ts
const fibonacci = (n: number) => {
    if (n < 0) return [];

    const fib = new Array(n + 1);

    fib[0] = 0;
    if (n > 0) fib[1] = 1;

    for (let i = 2; i <= n; i++) fib[i] = fib[i - 1] + fib[i - 2];

    return fib;
};
```

## Array of Arrays - recursive

-   透過一個 function 蒐集一個嵌套 Array 中的資料。

```ts
const collectArrayData = (arr: any[]): any[] => {
    let newArr: any[] = []; //收集元素
    for (let ele in arr) {
        // 找出當前所有元素
        if (Array.isArray(ele)) {
            //如果是陣列 就繼續抓
            collectArrayData(ele);
        } else {
            //如果不是就存起來
            newArr.push(ele);
        }
    }
    return newArr;
};
```

使用 flat 進行嵌套扁平化 - 不確定嵌套有幾層 就只用 infinity

```ts
const newArr = arrs.flat(Infinity);
```

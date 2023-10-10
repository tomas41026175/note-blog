# Js中自動轉型的比重
1. 字符串和數字的運算：如果一個操作數是字符串類型，另一個操作數是數字類型，則 JavaScript 會將字符串類型的操作數轉換為數字類型。
```
console.log("10" + 5); // 輸出 "105"
console.log("10" - 5); // 輸出 5
```
2. 字符串和布爾值的運算：如果一個操作數是字符串類型，另一個操作數是布爾值類型，則 JavaScript 會將布爾值類型的操作數轉換為數字類型（0 或 1），然後將其轉換為字符串類型。
```
console.log("hello" + true); // 輸出 "hellotrue"
console.log("world" + false); // 輸出 "worldfalse"
```
3. 數字和布爾值的運算：如果一個操作數是數字類型，另一個操作數是布爾值類型，則 JavaScript 會將布爾值類型的操作數轉換為數字類型（0 或 1），然後進行數字運算。例如：
```
console.log(10 + true); // 輸出 11
console.log(5 - false); // 輸出 5
```
4. 對象和原始值的運算：如果一個操作數是對象類型，另一個操作數是原始值類型，則 JavaScript 會嘗試將原始值類型的操作數轉換為對象類型。例如：
```
console.log({} + 5); // 輸出 "NaN"
console.log(true + {}); // 輸出 "true[object Object]"
```
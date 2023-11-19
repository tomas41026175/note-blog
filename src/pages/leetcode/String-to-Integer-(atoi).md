# 8. String to Integer (atoi)

思路 : 若不是數字回傳 0 ， 設定數字上下限 +- 2147483647，透過 parseInt 將 input 轉換成整數

```ts
function myAtoi(s: string): number {
    const num = parseInt(s, 10);
    if (isNaN(num)) {
        return 0;
    }

    if (num < -2147483648) {
        return -2147483648;
    }

    if (num > 2147483647) {
        return 2147483647;
    }

    return num;
}
```
string.length
# 151. Reverse Words in a String - medium ( regular expressive & string in js)

思路 : 移除所有多餘空格 拆出所有單字 最後進行反轉 並回傳

-   O(n\*n)

```ts
function reverseWords(s: string): string {
    const temp = s.split(' ').reverse();
    const newTemp = temp
        .filter(e => e !== '')
        .map(word => {
            return removeSpace(word, ' '); //O(n*n)
        });
    const newString = newTemp.join(' ');
    return newString;
}

const removeSpace = (s: string, charToRemove: string): string => {
    return s.replace(new RegExp(charToRemove, 'g'), '');
};
```

-O(n)

```ts
function reverseWords(s: string): string {
    return s.split(/\s+/).reverse().join(' ');
}
```

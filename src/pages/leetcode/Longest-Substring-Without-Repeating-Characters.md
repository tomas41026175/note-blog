# 3. Longest Substring Without Repeating Characters - medium (sliding window & pointer)

思路 : 透過 sliding window & pointer 配合 Set 結構，實現比對 2 個連續字元，若是不同就存入 Set ，若是相同則移除重複元素 並且左指針往後。
複雜度 :
時間 : O(n)
空間 : O(n)

```ts
function lengthOfLongestSubstring(s: string): number {
    const tempSet = new Set();
    let left = 0;
    let right = 0;

    while (right < s.length) {
        if (!tempSet.has(s[right])) {
            // 如果不存在，就加入到set中
            tempSet.add(s[right]); // 加入到set中
            right++; // 右指针右移
        } else {
            tempSet.delete(s[left]); // 如果存在，就删除左指针的值
            left++; // 左指针右移
        }
    }

    return [...tempSet].length;
}
```

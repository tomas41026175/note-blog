# 5. Longest Palindromic Substring - medium

(sliding window) ( Manacher’s Algorithm && 中心擴展法（Center Expansion） )

首先要先了解甚麼是 Palindromic，Palindromic === 回文 === 一個正序 & 反序 都是一樣的字串。

```ts
const longestPalindrome = (str: string) => {
    if (str.length <= 1) return str;

    let start = 0,
        end = 0;

    for (let i = 0; i < s.length; i++) {
        const len1 =
    }
};

const expandAroundCenter = (s:string,l:number,r:number):number=>{
    while(l >= 0 && r < s.length && s[l] === s[r]){
        l--
        r++
    }
    return r - l - 1
}
```

Manacher’s Algorithm :

```ts
function longestPalindrome(s: string): string {
    if (s.length === 0) return '';

    // Step 1: Transform the original string to simplify palindrome checking
    let T = '^';
    for (let c of s) {
        T += `#${c}`;
    }
    T += '#$';

    const n = T.length;
    let P = new Array(n).fill(0);
    let C = 0,
        R = 0;

    for (let i = 1; i < n - 1; i++) {
        if (R > i) {
            const mirror = 2 * C - i; // equals to C - (i - C)
            P[i] = Math.min(R - i, P[mirror]);
        }

        // Attempt to expand palindrome centered at i
        while (T[i + (1 + P[i])] === T[i - (1 + P[i])]) {
            P[i]++;
        }

        // If palindrome centered at i expands past R, adjust center and R
        if (i + P[i] > R) {
            C = i;
            R = i + P[i];
        }
    }

    // Extract the longest palindrome
    const maxLen = Math.max(...P);
    const centerIndex = P.indexOf(maxLen);
    const start = (centerIndex - maxLen) / 2;
    return s.substr(start, maxLen);
}

// Test
const testString = 'babad';
console.log(longestPalindrome(testString)); // It should print "bab" or "aba"
```

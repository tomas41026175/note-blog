# 演算法 - Big(O) Notition
* 是一項描述演算法複雜度的工具

## 如何計算Big(O)的Value
* 原則
    1. Constant doesn't matter 常數並不重要
    2. Small Terms don't matter 底數不重要 只取最大的n 
        - ex f(n) = 3N² + 2n +3 無視 3 2 3 =>big(O) = O(n²)
* text 
    * f(n) = 2n =>O(n)
    * f(n) = 13n^3 +6n +7 =>套用原則2 =>13n^3 => O(n³)
    * f(n) = 4log2n =>O(logn)
    * f(n) = 5 => O(n⁰) => O(1)
* 常見的Value(由上至下 為 由好至壞) 至少達到3.4
    1.O(1)
    2.O(longn)
    3.O(n)
    4.O(nlogn)
    5.O(n^2)
    6.O(n^3)
## 概念
- 因考慮最壞狀況,所以可以直接取最大n值

## Asymptotic Notation
1< logn < √n < n < nlogn < n² < ... <2^2<3^3<4^4...< n^n
    - n(含n)往前都算是lowerbound ⌒(Omega)()
    - n(含n)往後都算是upperbound
    
##    BigOmega & Big Theta
-    BigOmega = func的複雜度最優上限 = f(n) = ⌒(g(n)) iff ∋ realnumber c,No
        -    s.t. f(n)>= c.g(n)>= O ∀ n>=n

-    Big theta =  f(n) = O(g(n)) iff ∋ positive real number ::在2
        -    c1,c2,n0 s.tO<= C1.g(n)<=f(n)<.C2g(n)
    
## Array & Object

### Objeect
-    Isertion => O(1)
-    Removal => O(1)
-    Searching => O(n)
-    Accessing => O(1)

### Array
- Isertion
    - push =>O(1)
    - unshift => O(n)
- Remove
    - pop =>O(n)
    - shift => O(1)
- Searching => O(n)
- Accessing => O(n)
- 
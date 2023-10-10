# 演算法 - 複雜度
* 複雜度(Complexity)
    -    時間複雜度
    -    空間複雜度
* 所有加減乘除以及><=...都算做一個operation(運算)
* f(n) = n²
```
ex1.
func(n){
    let sum = 0;
    for(let i = 0 ;i<=n; i++){
        sum+=1
    }
    return sum
}
f(n) = 3n
```
```
ex2
func(n){
    return (1+n)*n/3
}
f(n) = 3
```
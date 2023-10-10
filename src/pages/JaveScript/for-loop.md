# JavaScript - for迴圈
###### tags: `JavaScript`

## if/else
statement(敘述式):沒有回傳值
expression(判斷式):可以被印出來（console.log）
```
let x = 1;
let y = 2;
if(z = x + y){

}
```
## for...loop
```
for(let X = 0; x < array.length; x++){
    const a = array[x];
}
```
## for...in
#### 迭代key
```
for (const key in foo ){
    console.log(key)
}
for (const key in foo){

}
```
## for...of
#### iterate 迭代器
```
    for (const value of Object.values(bar){
        console.log(value)
    }
```
## React 單一原則(盡量用immutable)
### mutabale 可變
```
const foo = ['a','b','c']
const bar = {a: 1,b: 2,c: 3}

bar.a = 2
console.log(bar)
```
### immutable 不可變
```
    console.log(
    "spread",
        {
            //spread syntax
            ...bar,
            a: 2
        }   
    )
    console.log("bar",bar)
```
### spread語法：（["first", ...array, "last"]）
ES6中資料會因前後順序被覆蓋
含頭不含尾
```
array.slice（0,2）取得0往後2個位置的value

const foo = ["a", "b", "c", "d", "e"];

//移除index位置的value

let index = 3;
const foo1 = [
  //spread syntax
  //串接2串slice
  ...foo.slice(0, index),
  ...foo.slice(index + 1)
];
console.log(foo1);
```
## 解構語法 destruction
```
    const foo = ['a','b','c']
    const bar = {
        a: 1,
        b: 2,
        c: 3
    }
    
    const{ a , ...rest } = bar
    console.log("rest",rest)
    
    const[x , y, ...rest] = foo
    console.log)(x , y, rest2)
```
# function
```
//argument 引數
//parameter 參數

function(arg1, arg2){
    return arg1 + arg2
}
console.log(foo(1,2))
```
### arrow function(ES6)
```
const foo = (arg1, arg2) =>{
return arg1 + arg2
}
```
### setTimeout(延遲處理)
```
setTimeout(
    () => {
    console.log('in setTimeout')
    },
    1000
)
```
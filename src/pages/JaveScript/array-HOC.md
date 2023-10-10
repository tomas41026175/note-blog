# Array高階函數
###### tags: `JavaScript`
## 何謂高階函數
**當函數滿足下列條件時可稱之為高階函數**

1. 接受一個或多個函數作為輸入
2. 輸出一個函數

## 常見的高階函數

1. ```forEach```
2. ```map```
3. ```redeuce```
4. ```filter```

## ```forEach```
### ```forEach```常見用法
forEach大多數使用於撰寫迴圈，透過迴圈去抓取每個索引(index)的元素(item)，不使用for each的情況下一般使用for迴圈來達成目標。
```
for (let i =0 ; i <arr.lenth ; i++){
    console.log(arr[i]);
}
```
但這種方式的缺點為需要一直透過index取得陣列的對應item，並將item傳回函數中，並且我們需要設定index的上限。

但是透過forEach我們可以使這段代碼更加有效率以及簡潔。
```
arr.forEach(item => console.log(item))
```
```forEach```字面上語意為for each...，當使用於陣列時，即為表示針對所有元素執行...，所以可以將需要的元素傳遞進```console.log```，且不需要設定上限。

### ```forEach```的格式
在forEach中允許傳送三個參數進入回傳(callback)函式中，分別為```item(element)```、```index```、```array```。
```
const callback = (item,index,array) => {
if(index%2===0) return;
console.log(item);
}
```
因可得到```index```的值，所以迴圈執行條件可以撰寫在```callback```函數中，有了```item```、```index```，基本上可以做到所有一般迴圈可以做的事情。


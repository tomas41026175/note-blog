# DOM事件
e.currentTarget：指向目標外層
e.target：指向目標層
差異處為內外層

在function內加上e.preventDefault：關閉預設事件（行為）
監聽事件一律用on開頭：
```
    ex: 
        const Card =({onDelete})=>{
        <h1>card</h1>
        <button
        onClick=()=>{onDelete()}>Delete me</button>}
    ------------------------------
        <Card onDelete=>{handleDelete}</Card>/>
```
## callback function用法
```
const handleClick(e)=>{
console.log("click me!!");
}
const handleOnChange(e)=>{
console.log("i'm Changing")
}
<button onClick={handleClick}>Click me</button>
<input onChange={handleOnChange}>

```
## 狀態管理
1. onUpdate  && onUpdate(); =>有的時候再執行 可提升元件的穩定性
2. 要取得元件內的狀態可用callback將資訊帶出來
### hook
```
React state hook
狀態鎖在元件內
a綁定b的狀態/分散管理
<Card/> ---> foo
<buttom/> ---> bar
<XXX/> ---> xxx

------------------
狀態統一管理
<provider>

</provider>
```

```
const [editable(狀態)一開始為undefine,setEditable（一個function）] = useState(ture)
```

### Usestate
```
const [editible(statement狀態),setEditable(setter如何變更狀態)] = Usestate(boolean);
[] = list的解構
setEditable= (editible)=>{
 .....處理過程   
}
```


簡單來說
```
const [editible(ture/false),setEditable(ture/flase,v=>v+1) = Usestate(editable status);
用於function的時候,當前的數據會被當作參數使用
可以使用initialState作為重製狀態
```

#### 局部渲染
Usestate放的位置會影響更新的部分，如不想整個區塊被重劃，需將Usestate丟進setEditable。
將Usestate放在共同需要更改狀態的父層。

### Video re-rendering
要注意影片的重新渲染，因為抓到status的value會影響到video
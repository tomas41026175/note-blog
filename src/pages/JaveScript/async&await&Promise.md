# JavaScript(ES6) - Async/await/Promise(學習筆記)
###### tags: `JavaScript`
## 重點 : 
1. Await必須在Async function內執行。
2. 執行一個Async function之後會得到一個Promise。
***
### promise(expresstion)
* 寫出來立即執行，可用函式包住
* 使用.then .catch處裡Resolve/reject

```
const myPromise = new Promise((resolove, reject) => {
    const x= 1
    if (x>0){
        resolve(x)
    } else {
        reject("qq")
    }
})

myPromise

.then((data) => {
    return data + 1
})
//沒問題進入then
.then((data) => {
    return data + 2
})
//出問題進入catch
.catch((error) => {
    
})

```
### async(非同步) / await（等待）
* async function：回傳promise的簡寫
* 為了防止函式暴掉使用try...catch來處理resolve/reject
```
const getMYNewPromise = async (a, b) =>{
    
    try{
        const user = await getUser()
    }catch(error){
        console.error(error)
    }


    const x = a+ b 
    if(x > 0){
        return x
    } else {
    throw new Error('qq')
    }
}

```
### 不使用promise跟async的情況下，可使用callback function（回調）
```
//callback = bar的callback function

const bar = (callback) =>{
    callback()
}
////

const bar = (a, b, sussessCallback, failtureCallback) =>{
    const x = a + b
    
}
bar(() =>{
    console.log('i am callback')
})
```



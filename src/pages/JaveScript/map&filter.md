# JavaScript - map、fliter
###### tags: `JavaScript`
### map(映射) 
1. 轉換器的概念
2. 會將所有元件帶入
3. 有回傳值（若無可用forEach）
```
array.map(
(value) =>{
return value;
}
)
```
### fliter(篩選)
```
const fliteredArray = array.fliter(
    value =>{
    if(value === "x"){
    return ture
    }
    esle{
    return false
    }
    }
)

const fliteredArray = array.fliter(
    ///取奇數
    value => value%2 ===1  )
    
```

# TS - interface 接口
- interface 接口
    - 規範: 首字母大寫 ，部分語言中加上大寫 'I'
    - '?'表示可有可無
    - ```[propName:string] : any  => 任意屬性&任意value```
    - 當宣告任意屬性之後， 其他屬性都必須為他的子集

    - readonly屬性
        - 只要在屬性前加上readonly 該數值宣告後不可變

```
interface IPerson {
    readonly id: number;
    name: string;
    age: number;
    sex?: string;
    [propName:string] : any; // 這邊為any 不影響
    // [propName:string] : string; //這邊為string， 所以只要不是String的屬性都會through err
}
```
```
let person: IPerson = { 
    id : 12,
    name: 'Tom', 
    age: 20, 
    // sex: 'male' ,
};
```

- Array Interface
    - 使用任意屬性宣告接口
    - 不常用
```
interface INewArray{
    [index: number] : number; //表示array中的元素為number
}

let arr:INewArray = [1,2,3,4]

```
- function interface
    - 參數 & return value
```
interface ISearchFunc{
    // 對應參數 & return value
    (a:string, b:string):boolean
}

const fun1:ISearchFunc = function(a:string,b:string):boolean{
    return true
}

```
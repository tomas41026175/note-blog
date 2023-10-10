# TypeScript - mix
###### tags: `TypeScript`
- 介面型別
  - interface
  - 用於定義函式型別
  - 不會轉譯為JS
    ```
    interface MathFunc{
    (x:number,y:number):number
    }  
    
    interface 為宣告介面型別。
    MathFunc 為介面的名稱，後面用大括弧來定義介面裡面的屬性名稱與型別。
    (x: number, y: number) 為傳入的參數及其型別。
     number 接在冒號後的型別為傳出得型別。
    ```
    ```
    let add: MathFunc;
    add = function add(x: number, y: number) {
        return x + y;
    }
    console.log(add(10,20));
    
    相等於
    
    let add: MathFunc;
    add = function add({x}: {x:number}, {y}: {y:number}) {
        return x + y;
    }
    console.log(add(10,20));
    ```
- 索引型別
    - 先宣告一個介面型別，用來描述索引型別。
    ```
    interface indexArr {
    [index: number]: string;
    }
    
    let arr: indexArr = ['AAA', 'BBB', 'CCC'];
    let x: string = arr[0];
    let y: string = arr[1];
    let z: string = arr[2];

    console.log(x); //AAA
    console.log(y); //BBB
    console.log(z); //CCC
    ```
- 類別(Class)
  - 使用class關鍵字定義類別
  - 使用constructor關鍵字定義建構函式
  - 類別不能直接當funciton來呼叫
  - 類別一定要搭配new關鍵字使用
  - 類別中可以包含以下成員 :
      - 屬性(Property)
      - 建構函式(Constructor)
      - 函式(Function)
```
    class 類別名稱 {
    //類別程式碼
    }
```

```
    class Employee {
    //屬性(Property)
    empId: number;
    empName: string;

    //建構函式(Constructor)
   constructor(id: number, name: string) {
        this.empId = id;
        this.empName = name;
    }

    //函式(Function)
   showInfo() {
        return this.empId + "-" + this.empName;
        };
    }
```

- 選擇性屬性(Optional Properties)
    - 增加函式彈性
    - 自行決定是否調用參數
    - 參數後面加上"?"
```
//宣告介面
interface MyFunc{
    x:number;
    y?:number;
}

//函式
let func1=(p:MyFunc)=>{
    if(p.y){
        console.log(p.x,p.y);
    }else{
        console.log(p.x);
    }
}

//使用函式
func1({x:10,y:20});
func1({x:10});
```

- 修改物件-新增
    - JS中可以透過obj.xxxx = (){ return this.id + '-' + this.name  }直接新增obj成員
    - TS中需要先在物件定義Type Template
```
//宣告物件
let employee = {
    empId : 1 ,
    empName : "Mary" ,
    showInfo : function(){} //Type Template
}

//修改成員
employee.showInfo = (){
   return this.empId + "-" + this.empName ;
```

- 成員存取修飾詞(Access Modifier)
  - 控制成員可視性
  - 預設成員隱含為public
  - 包含**public**、**protected**與**private**
      - public : (預設)不受限外部程式碼存取
      - protected : 應用在有繼承關係的類別程式碼可存取
      - private : 只有類別中的程式才可以存取此成員

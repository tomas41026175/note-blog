# TS - 各種型別的應用場景

## TypeScript (TS) 是 JavaScript (JS) 的超集，因此在 TS 中，除了 JS 中原有的型別外，還新增了一些額外的型別。以下列出 TS 與 JS 有區別的一些型別，並提供應用情境和範例：

1. 靜態型別 (Static Typing):
    - TS 提供了靜態型別檢查，這是與 JS 最大的區別之一。在 TS 中，可以明確聲明變數、函數參數、物件屬性等的型別，讓編譯器能夠在開發時期檢查型別錯誤，增加程式碼的可靠性。

應用情境 & 範例：

```
// TS中聲明變數age為number型別
    let age: number = 30;
// 編譯器會檢查下方賦值是否為number型別，避免錯誤
    age = "thirty"; // 這裡會提示型別錯誤
```

2. 列舉型別 (Enum Types):
    - TS 提供了列舉型別，可以為一組有名稱的常數值指定名稱，方便使用和增加程式碼可讀性。

應用情境 & 範例：

```
// 宣告列舉型別
    enum Color {
        Red,
        Green,
        Blue,
    }

// 使用列舉型別
    let colorChoice: Color = Color.Green;
    if (colorChoice === Color.Green) {
        console.log("You chose Green.");
    }
```

3. 任意型別 (Any Type):

    - TS 引入了 any 型別，可以用來表示不確定型別的變數。使用 any 型別可能會減少類型檢查，應盡量避免使用 any 型別以保持型別安全。

    應用情境 & 範例：

    ```
    // 希望接收任意型別的資料
        function processInput(input: any) {
        // 使用input，但在編譯期間無法確定其型別
        }
    ```

4. 元組型別 (Tuple Types): - TS 引入了元組型別，用來表示具有固定長度和特定順序的陣列。

    應用情境 & 範例：

    ```
    // 聲明元組型別
        let person: [string, number] = ["Alice", 30];
    // 正確使用元組型別
        let name: string = person[0];
        let age: number = person[1];
    // 錯誤使用元組型別
        let invalid: boolean = person[0]; // 這裡會提示型別錯誤
    ```

5. 類型斷言 (Type Assertions):
    - TS 提供了類型斷言，用來告訴編譯器某個變數的確切型別，類似於類型轉換。

```
// 聲明變數並斷言型別
    let someValue: unknown = "hello";
    let strLength: number = (someValue as string).length;
```

## 泛型(Generics):

-   允許在函數、介面、類別等地方使用參數化的型別，使得這些組件能夠更具彈性地處理不同型別的數據。泛型的使用可以提高代碼的重用性和靈活性。

1.  函數泛型：

    - 泛型函數可以在函數定義中使用一個或多個型別參數，這些參數在函數體內可以當作型別使用。
  
- 應用情境 & 範例：

    ```
    
    function identity<T>(arg: T): T {
        return arg;
    }

    // 使用時指定具體的型別
    let result1 = identity<number>(10); // 回傳 10，並且型別為 number
    let result2 = identity<string>("hello"); // 回傳 "hello"，並且型別為 string
    ```
    
1. 介面泛型：
   - 泛型也可以應用在介面的定義中，使得介面內的某些成員的型別參數化。
- 應用情境 & 範例：
    ```
    //T => Type縮寫
    interface Box<T> {
        value: T;
    }

    // 使用時指定具體的型別
    let box1: Box<number> = { value: 10 }; // 型別為 Box<number>
    let box2: Box<string> = { value: "hello" }; // 型別為 Box<string>
    ```

1. class泛型：
   - 泛型也可以應用在class的定義中，使得類別的屬性、方法等能夠使用泛型。
- 應用情境 & 範例：
    ```
    class Queue<T> {
        private elements: T[] = [];

        enqueue(element: T) {
            this.elements.push(element);
        }

        dequeue(): T | undefined {
            return this.elements.shift();
        }
    }

    // 使用時指定具體的型別
    let numberQueue = new Queue<number>();
    numberQueue.enqueue(1);
    numberQueue.enqueue(2);
    let firstElement = numberQueue.dequeue(); // 型別為 number
    ```

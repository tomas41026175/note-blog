# hosting-2
- **只有聲明(宣告) / 函數會被提升**
    - 不會提升的example
        1. 表達式（expression）：表達式的值是在執行時計算的，因此表達式本身不會被提升。例如：
        ```
        console.log(x); // Uncaught ReferenceError: x is not defined
        var x = 1 + 2;
        ```
        2. 匿名函式（anonymous function）：匿名函式本身是一個表達式，它的值是在執行時計算的，因此匿名函式本身不會被提升。例如：
        ```
        sayHello(); // Uncaught TypeError: sayHello is not a function
        var sayHello = function() {
          console.log('Hello!');
        };

        ```
        3. let 和 const 變量聲明：使用 let 和 const 聲明的變量是不會被提升的。這是因為它們是在塊級作用域中聲明的，只有在聲明的位置之後才能使用。
            - 塊級作用域 = 使用```{}```中聲明的變數
                - ex => if(){這邊 === 塊級作用域}
            - 函數作用域 = 函數的{}中的變數
        - 例如：
        ```
        console.log(x); // Uncaught ReferenceError: x is not defined
        let x = 1;
        ```
        4. **在塊級作用域中使用var聲明的變數還是會被提升至全局作用域**
       
- 指在執行代碼之前將變量和函式聲明移動到作用域的頂部的過程。
- 在代碼執行之前，JavaScript 引擎會先解析並將所有變量和函式聲明存儲到記憶體中。這樣做是為了避免因變量或函式的作用域未被確定而導致的錯誤。
- ex1
    ```
    console.log(x); // 結果為 undefined
    var x = 1;
    
    這段code實際上為
    
    var x
    console.log(x)
    x = 1
    ```
    - 在上面的代碼中，變量 x 被聲明並賦值為 1。然而，在第一行 console.log(x) 中，變量 x 還沒有被賦值，因此結果為 undefined。這是因為 JavaScript 引擎在執行代碼之前已經將變量 x 聲明到了作用域的頂部，但是尚未給它賦值。
- ex2
    ```
    helloWorld(); // 結果為 'Hello, World!'

    function helloWorld() {
      console.log('Hello, World!');
    }
    ```
    - 在上面的代碼中，我們先調用了函式 helloWorld()，然後才聲明該函式。這是因為 JavaScript 引擎會在代碼執行之前先將該函式聲明移動到作用域的頂部，從而使我們可以在任何位置調用它。
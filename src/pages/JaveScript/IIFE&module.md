# IIFE(立即執行函數) , module(模組化)
###### tags: `JavaScript`
- IIFE 的作用是為了創建一個局部作用域，避免變量污染全局作用域。通過將函數聲明轉換為函數表達式，然後立即調用該函數，可以在不污染全局作用域的情況下聲明變量、定義函數等操作。
    - 括號將函數聲明轉換為了函數表達式，並且在後面的括號中立即調用了這個函數。在這個函數中定義的所有變量和函數都在函數內部的局部作用域中，不會影響到全局作用域。
    ```
    (function() {
          // 在这里定义变量和函数
        })();

    (function(a, b) {
		  // 在这里使用 a 和 b
		})(1, 2);
    ```
    - 實際應用
        1. 隱藏變數和函式
        ```
        (function () {
          var myVariable = "Hello World!";

          function myFunction() {
            console.log("I am a private function.");
          }

          // IIFE 執行後，myVariable 和 myFunction 將不會暴露在全局範圍中
        })();

        ```
        
        2. 模塊模式
        ```
        var myModule = (function () {
          var privateVariable = "I am a private variable.";

          function privateFunction() {
            console.log("I am a private function.");
          }

          return {
            publicVariable: "I am a public variable.",
            publicFunction: function () {
              console.log("I am a public function.");
            }
          };
        })();

        // 只有 myModule 中公開的屬性和方法可以訪問
        console.log(myModule.publicVariable);
        myModule.publicFunction();
        ```
        
        3. 防止全局變量的更改
        ```
        (function () {
          var myVariable = "Hello World!";

          // 這裡可以在 IIFE 中改變 myVariable 的值
          myVariable = "Hello Universe!";

          // 但是在 IIFE 外部，myVariable 的值仍然是 "Hello World!"
        })();

        console.log(myVariable); // 這裡會報錯，因為 myVariable 是未定義的
        ```
        
        4. 非同步代碼
        ```
        (function () {
              // 假設有一個異步函式，返回一個 Promise 對象
              function asyncFunction() {
                return new Promise(function (resolve, reject) {
                  // 做一些異步操作
                  setTimeout(function () {
                    resolve("Hello World!");
                  }, 1000);
                });
              }

              // 在 IIFE 中等待異步操作完成
              asyncFunction().then(function (result) {
                console.log(result); // 在這裡輸出 "Hello World!"
              });
            })();

        ```
    
- module 
    - ES6中 一個文件一個module,ES6是第一個原生支持模塊的 JavaScript 版本，它引入了 import 和 export 關鍵字，讓 JavaScript 開發者可以更容易地使用模塊。
    - 模塊提供了一個機制來隔離代碼，減少全局命名空間污染，並且使代碼更加可重用和易於維護。
- 應用
    1. 組織代碼
        - 使用模塊可以讓您更好地組織代碼，將代碼拆分為更小的文件，每個文件可以負責特定的功能。這有助於使代碼更易於維護和擴展。
    2. 避免全局污染
        - 在 JavaScript 中，全局命名空間是共享的，這意味著變量和函式名稱可能會與其他代碼庫中的名稱發生衝突。使用模塊可以防止這種污染發生，因為每個模塊都有自己的作用域，其中的變量和函式名稱不會影響其他模塊。
    3. 代碼重用
        - 模塊提供了一個機制來重用代碼。一個模塊可以導出一些功能，其他模塊可以通過 import 來使用這些功能，從而避免代碼重複。
    4. 模塊加載器
        -  模塊加載器是一個 JavaScript 模塊，它可以在運行時加載其他模塊。這種方法可以實現非同步代碼加載，從而提高應用程序的性能和可伸縮性。
    ```
    bar.js
    function hello(who) {
    return "Let me introduce: " + who;
    }
    export hello;
    foo.js
    // 仅从 "bar" 模块导入 hello()
    import hello from "bar";
    var hungry = "hippo";
    function awesome() {
    console.log(
    hello( hungry ).toUpperCase()
    );
    }
    export awesome;
    baz.js
    // 导入完整的 "foo" 和 "bar" 模块
    module foo from "foo";
    module bar from "bar";
    console.log(
    bar.hello( "rhino" )
    ); // Let me introduce: rhino
    foo.awesome(); // LET ME INTRODUCE: HIPPO
    ```
# 閉包(Closure)
     - 一個可以訪問、操作外部作用域的func
     - 一个函数和其相关引用环境（lexical environment）的组合体
     - 將一個或多個變數和函數封裝在一起形成一個獨立的作用域，在需要的時候能夠存取和操作這些變數和函數，並且不受外部作用域的影響。
     - 可以用於實現模塊化、封裝和緩存等功能
         - ex 
           - 創建一個私有變量，它只能通過函數內部的方法進行修改，從而實現封裝
             ```gherkin=
             function createCounter() {
                  let count = 0;
                  function counter() {
                    count++;
                    console.log(count);
                  }
                  return counter;
                }

                const myCounter = createCounter(); 
                //作用為將createCounter執行後所產生的閉包綁定在myCounter上，已達成每次調用myCounter時都可以訪問到相同的閉包
                myCounter(); // 输出 1
                myCounter(); // 输出 2
                myCounter(); // 输出 3
                //由於count在createCounter之中被宣告 所以在調用時不會被reset為0
             ```
             
            - 惰性函數：將函數的計算推遲到實際需要的時候再執行，可以節省內存和 CPU 資源。例如，我們可以使用閉包來實現一個惰性計算的乘法函數：
            ```gherkin=
            function multiply(x) {
              return function(y) {
                return x * y;
              };
            }

            const double = multiply(2); 
            //double 等同於 function(x){return x * 2}
            const triple = multiply(3);
            //triple 等同於 function(x){return x * 3}

            console.log(double(5)); // 输出 10
            console.log(triple(5)); // 输出 15

            ```
            - 記憶函數：將函數的計算結果緩存起來，以避免重覆計算。
                - 例如，我們可以使用閉包來實現一個記憶函數，它會將之前計算過的結果緩存起來，以避免重覆計算：
                ```gherkin=
                function memoize(fn) {
                  const cache = {};

                  return function(...args) {
                    const key = JSON.stringify(args);

                    if (cache[key]) {
                      console.log('cached result');
                      return cache[key];
                    }

                    const result = fn(...args);
                    cache[key] = result;
                    console.log('new result');
                    return result;
                  };
                }

                function fibonacci(n) {
                  if (n <= 1) {
                    return n;
                  }

                  return fibonacci(n - 1) + fibonacci(n - 2);
                }

                const memoizedFibonacci = memoize(fibonacci);

                console.log(memoizedFibonacci(10)); // 输出 55，并打印 "new result"
                console.log(memoizedFibonacci(10)); // 输出 55，并打印 "cached result"

                ```
            - 實現模塊化：使用閉包來封裝模塊的內部實現細節，並將模塊的公共接口暴露出來。例如，我們可以使用閉包來實現一個簡單的模塊化系統：
                ```gherkin=
                const myModule = (function() {
                  let count = 0;

                  function increment() {
                    count++;
                  }

                  function getCount() {
                    return count;
                  }

                  return {
                    increment,
                    getCount,
                  };
                })();

                myModule.increment();
                myModule.increment();
                console.log(myModule.getCount()); // 输出 2
                ```
            - 實現函數重載：在 JavaScript 中本身是不支持函數重載，但可以使用閉包來實現。例如：
                ```gherkin=
                function add() {
                  var argLength = arguments.length;

                  if (argLength === 0) {
                    return 0;
                  } else if (argLength === 1) {
                    return arguments[0];
                  } else {
                    var sum = 0;
                    for (var i = 0; i < argLength; i++) {
                      sum += arguments[i];
                    }
                    return sum;
                  }
                }

                var add = (function() {
                  function add() {
                    var argLength = arguments.length;

                    if (argLength === 0) {
                      return 0;
                    } else if (argLength === 1) {
                      return arguments[0];
                    } else {
                      var sum = 0;
                      for (var i = 0; i < argLength; i++) {
                        sum += arguments[i];
                      }
                      return sum;
                    }
                  }

                  return add;
                })();

                // 调用方式
                add(1, 2); // 3
                add(1); // 1
                add(); // 0
                ```
                - 函數重載 : 一組具有相同名稱但參數個數或類型不同的函數，可以根據調用時傳遞的參數的不同來執行不同的代碼邏輯。
                    - 在JavaScript中，由於函數的參數個數和類型都是可以動態變化的，因此不能像Java和C++一樣直接實現函數重載。但可以通過函數內部判斷傳入參數的類型和個數來實現類似的效果
                    1. 使用 if...else if...else if...結構來實現不同參數的邏輯
                    ```gherkin=
                    function myFunc(param1, param2) {
                      if (typeof param1 === 'number' && typeof param2 === 'number') {
                        // 处理两个数字参数的逻辑
                      } else if (typeof param1 === 'string' && typeof param2 === 'string') {
                        // 处理两个字符串参数的逻辑
                      } else {
                        // 处理其他情况的逻辑
                      }
                    }
                    ```
                    2. 使用對象參數來實現不同參數的邏輯
                    ```gherkin=
                    function myFunc(options) {
                      if (typeof options.param1 === 'number' && typeof options.param2 === 'number') {
                        // 处理两个数字参数的逻辑
                      } else if (typeof options.param1 === 'string' && typeof options.param2 === 'string') {
                        // 处理两个字符串参数的逻辑
                      } else {
                        // 处理其他情况的逻辑
                      }
                    }
                    ```
                    3. 使用默認參數來實現不同參數的邏輯
                    ```gherkin=
                    function myFunc(param1, param2 = null) {
                      if (typeof param1 === 'number' && typeof param2 === 'number') {
                        // 处理两个数字参数的逻辑
                      } else if (typeof param1 === 'string' && typeof param2 === 'string') {
                        // 处理两个字符串参数的逻辑
                      } else if (typeof param1 === 'number' && param2 === null) {
                        // 处理单个数字参数的逻辑
                      } else {
                        // 处理其他情况的逻辑
                      }
                    }
                    ```
                    - **note**:需要注意的是，在使用這些方法實現函數重載時，函數內部的代碼邏輯需要自行處理參數類型和個數的判斷，並且需要保證代碼的可讀性和可維護性。


            - 實現柯里化：將一個接受多個參數的函數轉換為一個接受單一參數（最初函數的第一個參數）的函數，並返回接受剩余參數並返回結果的新函數。例如：
                ```gherkin=
                function add(x, y) {
                  return x + y;
                }

                function curry(fn) {
                  return function() {
                    if (arguments.length < fn.length) {
                      var args = Array.prototype.slice.call(arguments);
                      var _fn = function() {
                        var innerArgs = Array.prototype.slice.call(arguments);
                        return fn.apply(null, args.concat(innerArgs));
                      }
                      return curry(_fn);
                    } else {
                      return fn.apply(null, arguments);
                    }
                  }
                }

                var addCurried = curry(add);

                // 调用方式
                addCurried(1)(2); // 3
                ```gherkin=
            - 實現回調函數(callback Function)：將一個函數作為參數傳遞給另一個函數，在後者執行完畢後，將前者作為返回值返回。例如：
                ```gherkin=
                function delay(fn, delayTime) {
                  return function() {
                    var args = arguments;
                    setTimeout(function() {
                      fn.apply(null, args);
                    }, delayTime);
                  }
                }

                function sayHello(name) {
                  console.log('Hello, ' + name);
                }

                var delayedSayHello = delay(sayHello, 1000);

                // 调用方式
                delayedSayHello('John'); // 1秒后输出 "Hello, John"

                ```
            - 實現封裝
                - 封裝是面向對象編程的一個核心概念，它指的是將數據和方法包裝在一個類中，對外暴露接口，同時隱藏內部實現細節，從而保證了程序的安全性和可維護性。在 JavaScript 中，可以使用閉包實現簡單的封裝，例如：
                ```gherkin=
                function createPerson(name, age) {
                  let _name = name; // 私有变量
                  let _age = age; // 私有变量

                  return {
                    getName() {
                      return _name;
                    },

                    setName(name) {
                      _name = name;
                    },

                    getAge() {
                      return _age;
                    },

                    setAge(age) {
                      _age = age;
                    },
                  };
                }

                const person = createPerson("Tom", 20);
                console.log(person.getName()); // 输出 "Tom"
                person.setName("Jerry");
                console.log(person.getName()); // 输出 "Jerry"
                
                在上面的例子中，使用一個名為 createPerson 的函數返回一個對象，這個對象包含了 getName、setName、getAge 和 setAge 四個方法。由於 _name 和 _age 變量是在 createPerson 函數中定義的，所以它們對外部不可見，從而實現了簡單的封裝。
                ```
                
            - 實現非同步操作
            	```gherkin=
            	function fetchData(url) {
                  return function (callback) {
                    fetch(url)
                      .then((response) => response.json())
                      .then((data) => {
                        callback(data);
                      });
                  };
                }

                const getData ==fetchData("https://jsonplaceholder.typicode.com/todos/1");

                getData(function (data) {
                  console.log(data);
                });
                在上面的例子中，定義了一個名為 fetchData 的函數，它返回一個函數，這個函數會執行網絡請求並將請求結果傳遞給回調函數。在調用 fetchData 函數時，我們將要請求的 URL 傳遞給它，並得到一個名為 getData 的函數。當我們調用 getData 函數時，它會執行網絡請求並將請求結果傳遞給回調函數，從而實現了異步操作。
            	```
            - 實現模擬私有方法
                ```gherkin=
                function createPerson(name) {
                  let privateAge = 0;

                  function increaseAge() {
                    privateAge++;
                  }

                  return {
                    getName() {
                      return name;
                    },
                    getAge() {
                      return privateAge;
                    },
                    celebrateBirthday() {
                      increaseAge();
                      console.log(`Happy birthday, ${name}! You are now ${privateAge} years old.`);
                    }
                  };
                }

                const john = createPerson('John');

                console.log(john.getName()); // 'John'
                console.log(john.getAge()); // 0

                john.celebrateBirthday(); // 'Happy birthday, John! You are now 1 years old.'
                john.celebrateBirthday(); // 'Happy birthday, John! You are now 2 years old.'

                console.log(john.getAge()); // 2
                john.privateAge = 10; // 这不会影响 privateAge
                console.log(john.getAge()); // 2
                
                在上面的代碼中，createPerson 函數返回一個對象，該對象具有三個方法：getName、getAge 和 celebrateBirthday。privateAge 變量只能在 createPerson 函數內部訪問，因此外部無法直接訪問和修改該變量。

                increaseAge 函數是一個內部函數，它可以訪問 privateAge 變量並增加其值。celebrateBirthday 方法調用 increaseAge 方法，並輸出一個生日祝福消息，其中使用 privateAge 的值。通過這種方式，可以將 privateAge 封裝在閉包內部，從而實現了一個私有方法。
                ```
                
                
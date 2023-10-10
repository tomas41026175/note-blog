# Pure Function (純函數)
###### tags:`Functional Programming` `JavaScript`
**將相同的輸入丟入，永遠都會回傳相同的輸出，並且不對任何該函數以外的任何作用域產生影響。**
-----------------------------------------------------------------------
- 以上定義可以分成兩個部分，一是相同輸入將獲得相同輸出。對於一個函數 ，輸入便是指其參數（Parameter），而輸出自然就是其回傳值。
    - pure function函數不但不會受到其他作用域的影響，也不會影響其他作用域的值，也就是沒有副作用（Side Effect）
    ```
    // impure function
    let intercept = 2
    function math(x) {
      return (3 * x) + intercept
    }
    const result = math(4) // 14
    
    // pure function
    function math(itr) {
      return function(x) {
        return (3 * x) + itr
      }
    }
    const result = math(2)(4) // 14
    ```
- 益處 (Benefit) 
    - 有利重構（Refactor）
        - 
        - 同輸入同輸出的特性，讓它具備高**可預測性**
            - 在初期開發時，儘管預先知道是個簡單的初版，仍會盡可能將內容抽成各個函數，並確保其為Pure Function 。將來替換時，僅需要理解該函數的作用，便能合理且快速地重構它。
    - 方便測試
        - 由於高**可預測性**，方便滿足測試條件
            - 一個容易預測的函數，會很容易想到Test Case ，以及對應的actual value 與expect value 。
        - 由於Pure Function 不受到其他作用域影響，只有輸入值才會導致結果的改變。
            - 將不必再費心去準備許多環境就能做到測試的目的。在同一段測試區塊中，也大幅減少事後還原的動作。
    - 易與其他函數組合（Compose）
        - 在Functional Programming 中，有一個運用數學上結合律（associative laws）的組合技巧（function compose）。
        ```
        function someMath(n) {
          return 6 + (5 * n)
        }
        function g(n) {
          return n * 5
        }
        function f(n) {
          return n + 6
        }
        const z = someMath(x)
        // 等同於
        const y = g(x)
        const z = f(y)
        // 能利用組合率
        z = f(g(x))
        
        將資料（上例的x）視作進入一道管線（pipeline）。
            => 直線資料流
        ```
    - 並行運作
        - 情境
            - 在開多個執行緒來讓程式碼並行運作時，有一個可能會遇見的問題是Race Condition 。產生Race Condition 的其中一個可能，發生於某a 執行緒改變了某一項外在條件，導致b 甚至更多執行緒的結果不合預期，甚至發生錯誤。
            - 由於Pure Function 不產生副作用也不受到外在影響的特性，不必擔心各個執行緒會影響他者運行的結果。我們能夠輕易地讓Pure Function 並行運作，不必擔憂產生Race Condition 的情況。
    - 利於建快取（Cache）
        - Pure Function 的結果只取決於傳進的Parameter ，因此若結合閉包（closure）的作法，能夠妥善建立快取機制。判斷Parameter 是否是已經給進過的，若是則提取快取中的值，反之則加入快取並重新計算一個數值回傳。範例如下：
        ```
            function cacheMath(n){
              const cache = {}
              return function(){
                if (n in cache) return cache[n]
                const result = doSomeComplexMathMethod(n)
                cache[n] = result
                return result
              }
            }
        ```
        - 可想而知的是，若回傳值除了受到n 亦會受到其他因素影響，由於回傳值的可預測性降低了，我們將無法有效的建立該快取制度。
    - 專注於特定情境（Context）
        - 最後這一點就相對開發時的心態。在理解Pure Function後，抱持著每個函數都盡可能達成其概念前提，這有助於開發者專注於各個情境。畢竟，真的很難在含有多個目的、情境的前提下，還能夠滿足Pure Function 的條件。

        - 而這樣的專注能讓開發者較為不易陷入一個需求所導致的過度複雜思考，在起始時分離需求成不同目標，將目標轉換為不同的小函數，一一擊破。
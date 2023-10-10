- Immutability
    - 當變數宣告後可修改時容易造成難以預測輸出結果

- 迴圈(mutation)
    - 修改迴圈外的變數
    - 在mutable的狀況下可用
  
- 遞迴(recursion)
    - 在immutability下可使用
    - 使用map filter reduce代替
        - tail recursion
        - 編譯器自動釋放記憶體
  
- Imperative
    - 一步一步達成目的
    - 有中間的步驟
    - 無法縮減為一個expresstion

- Declarative
    - 直接達成目的
    - SQL / HTML
    - code可以縮減為一個expresstion
    - ex: value直接return

- functional programming
    - 是一個高階的寫法
        - 高階語言的概念
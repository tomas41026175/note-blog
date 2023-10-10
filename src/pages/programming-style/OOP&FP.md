# 物件導向,程序導向
---
- 程序導向(Functional Programming)
    - 依照指令邏輯順序執行
    - 強調pure function，避免副作用和改變狀態，讓code更加簡潔、可靠。
    - 避免共享狀態、副作用、改變狀態，透過FP實現狀態管理。
    ```
    const initialState = { count: 0 };

    function increment(state) {
      return { count: state.count + 1 };
    }

    function decrement(state) {
      return { count: state.count - 1 };
    }

    let state = initialState;
    state = increment(state); // { count: 1 }
    state = increment(state); // { count: 2 }
    state = decrement(state); // { count: 1 }
    //初始狀態 == initialState
    //透過兩個pure function管理狀態
    // 當我們
    ```
    - OOP中 func只是方法的一種，在FP中func是code的主體/計算的基本單元
    - 以func為主，配合高階函數、閉包..等語言特性
    - Monad可以用來管理side effect, state, err ... 之類的運算
        - 將這些會產生副作用的操作封裝成一個容器，然後提供一組操作這個容器的func，這個func可以保證容器內的value不會被修改，Monad以這種方式處裡副作用，同時保持func的Immutable特性
        - 使用pure function進行狀態管理，常見方式是提供一個狀態容器，並提供一組func來操作這個容器，這些func會return一個新的容器狀態，不會更改原本的value。
    - Promise 是一個常見的Monad，Promise將一個async 操作封裝成一個容器，透過.then/.catch進行操作，其他還有Maybe,Either,IO,Reader,Writer...

- 物件導向(OOP)
    - 具體化 => 透過物件封裝,繼承的概念，使code更具可讀性、維護性、實現狀態管理
    - 透過func作為操作物件的方法
    - 需支援class extend , 多態..語言特性
    - 以物件的角度進行分析,解決問題
    - 解決OOP單向執行問題
    - 使用方便 容易維護 可重複使用
    - 解決擴充功能問題

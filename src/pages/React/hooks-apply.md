# Hooks簡單應用

useState: 用於在函數組件中添加狀態。可以使用它來存儲和更新組件的局部狀態值。
應用場景：處理組件內部的狀態，如表單輸入、開關狀態等。

useContext: 用於在函數組件中訪問 React 上下文。可以消費全局的狀態或功能。
應用場景：訪問全局的狀態或功能，如主題、用戶信息等。

useReducer: 用於在函數組件中管理覆雜的狀態邏輯。類似於 Redux 中的 reducer。
應用場景：處理覆雜的狀態邏輯，包括多個狀態之間的關聯和操作。

useRef: 用於在函數組件中創建可變的 ref 對象。可以用來訪問 DOM 元素或保存持久化數據。
應用場景：訪問 DOM 元素、保存上一次的狀態等。

useCustomHook: 自定義 Hook，可以將多個 Hook 組合成一個自定義的 Hook，以覆用邏輯。
應用場景：抽象出通用的邏輯，用於多個組件之間的覆用。

useEffect: 用於在函數組件中執行副作用操作。副作用可以是訂閱數據、設置事件監聽、發送網絡請求等。
應用場景：在組件掛載、更新、卸載時執行一些操作，如獲取數據、更新 DOM、訂閱事件等。

useCallback: 用於在函數組件中緩存回調函數，以避免在每次渲染時創建新的回調。
應用場景：優化子組件傳遞的回調函數，避免不必要的重新渲染。

useMemo: 用於在函數組件中緩存計算結果，以避免在每次渲染時重新計算。
應用場景：優化性能，避免不必要的計算操作。

useEffect,useCallback,useMemo 差異

useEffect:沒有 return value
useCallback: 儲存 callback function
useMemo 差異: 儲存 value

useEffect：

用途：用於處理副作用操作，即在組件渲染後執行一些操作，如數據獲取、訂閱事件、操作 DOM 等。
觸發時機：默認情況下，在每次組件渲染後都會執行。也可以通過第二個參數（依賴數組）控制何時觸發。
用法：useEffect(callback, [dependencies])
示例：


```
useEffect(() => {
  // 副作用操作，例如訂閱事件、獲取數據等
  return () => {
    // 清除副作用操作，例如取消訂閱、清除計時器等
  };
}, [dependencies]);
```

useCallback：

用途：用於緩存回調函數，避免在每次渲染時創建新的回調函數。
作用：在依賴項不變的情況下，返回同一個函數引用。
用法：useCallback(callback, [dependencies])
示例：


```
const handleClick = useCallback(() => {
  // 回調函數邏輯
}, [dependencies]);
```

useMemo：

用途：用於緩存計算結果，避免在每次渲染時重新計算。
作用：在依賴項不變的情況下，返回緩存的計算結果。
用法：useMemo(callback, [dependencies])
示例：


```
const result = useMemo(() => {
  // 需要緩存的計算邏輯
  return computeResult(dependencies);
}, [dependencies]);
```

區別總結：

useEffect 用於處理副作用操作，可以在組件渲染後執行一些操作，通常用於數據獲取和 DOM 操作。
useCallback 用於緩存回調函數，用於優化子組件傳遞的回調函數，避免不必要的重新渲染。
useMemo 用於緩存計算結果，用於優化性能，避免不必要的計算操作。

# React Intl

- npm install --save react-intl
- 透過更改 local 及 message

## immer.js

- Immer 是一個 immutable 庫，核心實現是利用 ES6 的 proxy，幾乎以最小的成本實現了 js 的不可變數據結構


## Hook
### - Memorized Hook- useMemo, useCallback

- useMemo => 
	避免重複進行複雜耗時的計算
	把計算的結果存起來用。為了檢查什麼時候該重新計算，每次 render 時還會額外去比對 depdendencies 陣列裡面的內容。
- useCallback => 
  	主要目的是避免在 component 內部宣告的 function，因為隨著每次 render 不斷重新被宣告跟建立，每次拿到的都是不同的 instance。
 	 這樣的 function 如果被當成 prop 往下傳給其他 component，就可能導致下面的 component 無意義地被重新 render。

- -useRef => 不會觸發Re render
	計算 Render 了幾次 
	  const renderCount = useRef(0);  // { current: 0 }
  
  	```
    useEffect(() => {
    		renderCount.current += 1;
 	 })
     ```
     
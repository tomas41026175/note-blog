# useCallback
- 近似於useMemo
- 回傳一個緩存的function
```
Wrong : Error infinity func
const App = () => {
  const [count, setCount] = React.useState(0);
  
  const getData = () => {
    setTimeout(() => {
       setCount((pre) => pre + 1)
    }, 2000);
  }
```

```
<!-- 改用useCallback將第二次之後的func存起來 因為沒有監聽變數，所以只執行一次 -->
const App = () => {
  const [count, setCount] = React.useState(0);
  
  const getData = React.useCallback(() => {
    setTimeout(() => {
       setCount((pre) => pre + 1)
    }, 2000);
  }, [])
```
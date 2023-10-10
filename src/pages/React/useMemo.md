# useMemo
- 類似於Vue中的Computed(計算屬性) : 只有在資料**有變動時**才會重新計算&執行
- Callback 與 Array兩項參數
    - useMemo會記錄Callback計算後的結果
    - 第二項Array用於加入監聽變數 === useEffect中的Array
        - Array中無參數時，則會每次render就執行useMemo
- 使用背景 : 需要執行重新運算，但不想要re-render
- 回傳一個緩存值(value)
```
  const filterUsers = React.useMemo(() => {
    return users.sort((a, b) =>  {
      if(state) {
        return a.dob.age < b.dob.age ? 1 : -1
      }
      return a.dob.age > b.dob.age ? 1 : -1
    });
  }, [ state ])
```
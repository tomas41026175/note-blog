# useState
- useState
    - 本身提供的兩項參數分別為
        - 接收一個對象類型 / 函數，使用對象更新state
        - 第二個為組件操作非同步處理
```
ex onClick
    ()=>{
        this.setState((preState,preProps)=>{return {count: this.state.count+1}}
        console.log('count',this.staet.count)) // 更新(點擊)後的數據
        
2.
        ()=>{
        this.setState((preState,preProps)=>{return {count: this.state.count+1}}
        console.log('count',this.staet.count)) // 更新(點擊)後的數據
    }
    result
        由於會抓取前一個生命週期的state，所以點擊一下會+2
```

- setState()是同步還是非同步
    - 非同步更新，同步執行
    - 本身並不是非同步，但處理機制給人一種非同步的感覺
    - 只要state的生命週期沒有變化，不會額外更新state 
    ```
    ex
        console.log(count) //未更新前的數字
        this.setState({count: this.state.count + 1}.()=>{       console.log('count',this.state.count)//更新後的數字
        })
    2
            this.setState({count: this.state.count + 1}.()=>{       console.log('count',this.state.count)//更新後的數字
        })
        1,2因為沒有state的更新 even 有兩個count+1 結果還是每次點擊只+1
    ```
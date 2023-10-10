# React 生命週期
- Mounting
    - 創建虛擬DOM，渲染UI
    - 有兩個函數
        - constructor() //初始化state
        - componentDidMount () //在component創建DOM元素之後，加載進頁面時調用**一次**
        - 
- Updating
    - 更新虛擬DOM，重新渲染UI
    - 有四個函數
    ```
        - componentWillReceiveProps //在component接收到新的prop(更新後)時被調用 **已停用**
        - state getDerivedStateFromProps(nextProps,prevState){}//用於對比前後state
        - shouldCompoenentUpdate(nextProps,nextState){ 
        - //不使用這個func的狀況下，每次更新props都會對UI進行Re-render，造成系統負擔。
        - 透過對比nextProps,nextState 判斷是否更新畫面(component)
            return nextState.some ~== this.state.some
        }
        - componenDidUpdate(){} //組件更新後調用
    ```
- Unmounting
    - 刪除虛擬DOM，移除UI 
    ```
    componentWillUnmount(){}
    ```
-------------------------------------------------------
- 流程
    - 初始化 
        1. 初始化
        2. 構建函數
        3. getDerivedStateFromProps
        4. render(): 渲染UI
        5. componentDidMount
    - 更新 //component有任何變化
        1. getDerivedStateFromProps() //探測state / props 是否有變化
        2. 如果有就執行shouldComponentUpdate //判斷是否需要更新
        3. 有需要更新就執行 render: 渲染UI
        4. 更新畫面
        5. 完成後執行 componentDidUpdate
    - 銷毀
        1. componentWillUnmount
        2. 銷毀
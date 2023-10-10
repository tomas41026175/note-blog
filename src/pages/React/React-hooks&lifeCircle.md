# React hook & 生命週期
###### tags: `React`

- func組件本質上是函式，所以不存在生命週期，但透過Hook可以做到不使用class使用state&其他React特性。
- 實際上實作更貼近實現狀態同步，而不是響應生命週期。


1. construtor : 此時不需要構造函數，透過調用useState來**初始化State**。
```
const [num, UpdateNum] = useState(0)
```
2. getDerivedStateFromProps : 一般情況下不需要使用，可以在**渲染過程中更新State**，以實現getDerivedStateFromProps 的目的。
```
function ScrollView({row}) {
  let [isScrollingDown, setIsScrollingDown] = useState(false);
  let [prevRow, setPrevRow] = useState(null);

  if (row !== prevRow) {
    // Row 自上次渲染以來發生過改變。更新 isScrollingDown。
    setIsScrollingDown(prevRow !== null && row > prevRow);
    setPrevRow(row);
  }

  return `Scrolling down: ${isScrollingDown}`;
}
React 會立即退出第一次渲染並用更新後的 state 重新運行組件以避免耗費太多性能。
```
3. shouldComponentUpdate : 可以使用React.memo包裹一個組件來對他的props進行淺比較。
    * React.memo === PureComponents，只進行淺比較props。也可以使用useMemo優化所有節點。
```
const Button = React.memo((props) => {
  // 具體的組件
});
```
4. render：這是函數組件體本身。
5. componentDidMount, componentDidUpdate： useLayoutEffect與前兩者的調用階段一致，但推薦一開始先用useEffect，當有問題時再使用useLayoutEffect。useEffect可以表達所有組合。
```
    // componentDidMount
useEffect(()=>{
  // 需要在 componentDidMount 執行的內容
}, [])

useEffect(() => { 
  // 在 componentDidMount，以及 count 更改時 componentDidUpdate 執行的內容
  document.title = `You clicked ${count} times`; 
  return () => {
    // 需要在 count 更改時 componentDidUpdate（先於 document.title = ... 執行，遵守先清理後更新）
    // 以及 componentWillUnmount 執行的內容       
  } // 當函數中 Cleanup 函數會按照在代碼中定義的順序先後執行，與函數本身的特性無關
}, [count]); // 僅在 count 更改時更新

請記得 React 會等待瀏覽器完成畫面渲染之後才會延遲調用 useEffect，因此會使得額外操作很方便
```

6. componentWillUnmount：相當於 useEffect 里面返回的 cleanup 函數。
```
// componentDidMount/componentWillUnmount
useEffect(()=>{
  // 需要在 componentDidMount 執行的內容
  return function cleanup() {
    // 需要在 componentWillUnmount 執行的內容      
  }
}, [])
```
7. componentDidCatch and getDerivedStateFromError
=============================================================

![](https://i.imgur.com/K15PU25.png)

- before v16.3
    - 掛載階段:
    	- constructor：避免將 props 的值覆制給 state
    	- componentWillMount
    	- render：react 最重要的步驟，創建虛擬 dom，進行 diff 算法，更新 dom 樹都在此進行
    	- componentDidMount

    - component 更新階段:
    	- componentWillReceiveProps
    	- shouldComponentUpdate
    	- componentWillUpdate
    	- render
    	- componentDidUpdate

    - Delete階段:
        - componentWillUnMount


![](https://i.imgur.com/TlK4i7w.png)


=============================================================
- after v16.3
- Fiber 本質上是一個虛擬的堆棧幀，新的調度器會按照優先級自由調度這些幀，從而將之前的同步渲染改成了異步渲染，在不影響體驗的情況下去分段計算更新。
    - 掛載階段:
      - constructor
      - static getDerivedStateFromProps
      - render
      - componentDidMount

    - component 更新階段:
      - static getDerivedStateFromProps
      - shouldComponentUpdate
      - render
      - getSnapshotBeforeUpdate
      - componentDidUpdate
    
    - Delete階段:
        - componentWillUnmount
![](https://i.imgur.com/H1zHIi7.png)
=============================================================

- 生命週期誤區
    1. getDerivedStateFromProps 和 componentWillReceiveProps 只會在 props 改變時才會調用
        * 實際上，只要父級重新渲染，getDerivedStateFromProps 和 componentWillReceiveProps 都會重新調用，不管 props 有沒有變化。所以，在這兩個方法內直接將 props 賦值到 state 是不安全的。
        ```
        // 子組件
        class PhoneInput extends Component {
          state = { phone: this.props.phone };

          handleChange = e => {
            this.setState({ phone: e.target.value });
          };

          render() {
            const { phone } = this.state;
            return <input onChange={this.handleChange} value={phone} />;
          }

          componentWillReceiveProps(nextProps) {
            // 不要這樣做。
            // 這會覆蓋掉之前所有的組件內 state 更新！
            this.setState({ phone: nextProps.phone });
          }
        }

        // 父組件
        class App extends Component {
          constructor() {
            super();
            this.state = {
              count: 0
            };
          }

          componentDidMount() {
            // 使用了 setInterval，
            // 每秒鐘都會更新一下 state.count
            // 這將導致 App 每秒鐘重新渲染一次
            this.interval = setInterval(
              () =>
                this.setState(prevState => ({
                  count: prevState.count + 1
                })),
              1000
            );
          }

          componentWillUnmount() {
            clearInterval(this.interval);
          }

          render() {
            return (
              <>
                <p>
                  Start editing to see some magic happen :)
                </p>
                <PhoneInput phone='call me!' /> 
                <p>
                  This component will re-render every second. Each time it renders, the
                  text you type will be reset. This illustrates a derived state
                  anti-pattern.
                </p>
              </>
            );
          }
        }

        ```
        
        
# React useEffect & 清理函式
- 大多用途都是在於我們畫面 render 之後要做某些事情
- 會產生 Side Effect 的行為都會建議在 useEffect 裡面，像是 AJAX 行為、修改 DOM 操作等。

- After Ever Render（每次渲染之後執行）
```
function App (){
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log('render');
  })
  
  return (
    <div>
      <button type="button" onClick={() => setCount(count + 1)}>
        Count is: { count }
      </button>
    </div>
  )
}

const app = document.querySelector('#app');
const root = ReactDOM.createRoot(app);
root.render(<App />);
```
- Once（只執行一次） = componentDidMount。

```
function App (){
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log('once render');
  }, [此處可放入變量]);
  
  return (
    <div>
      <button type="button" onClick={() => setCount(count + 1)}>
        Count is: { count }
      </button>
    </div>
  )
}

const app = document.querySelector('#app');
const root = ReactDOM.createRoot(app);
root.render(<App />);
```

- On State（監聽特定值）

```
function App (){
  const [count, setCount] = React.useState(0);
  const [myName, setMyName] = React.useState('Ray');
  function sayHi () {
    window.alert('Hello Ray.');
  }
  
  React.useEffect(() => {
    console.log('render');
  }, [ count //此處可放入複數變量])
  
  return (
    <div>
      <button type="button" onClick={() => setCount(count + 1)}>
        Count is: { count }
      </button>
      <hr />
      <button type="button" onClick={() => setMyName('QQ')}>
        改名字 { myName }
      </button>
    </div>
  )
}

const app = document.querySelector('#app');
const root = ReactDOM.createRoot(app);
root.render(<App />);
```

- cleanup function（清理函式） = componentWillUnmount
    - 只要 useEffect 裡面有一個 return 函式，那麼這就叫做 cleanup function
    - 觸發重新渲染畫面時才會被呼叫一次
    - 適合用於初始化狀態或者清除特定的事件綁定
```
useEffect(() => {
  console.log('useEffect');
  return () => {
    console.log('cleanup function');
  }
})
```

- 嚴格實現componentDidUpdate的語法
```
const mounted=useRef();
    useEffect(()=>{
      if(mounted.current===false){
        mounted.current=true;
        /* 下面是 componentDidMount*/
    
    
        /* 上面是 componentDidMount */      
      }
      else{
        /* 下面是componentDidUpdate */
    
    
        /* 上面是componentDidUpdate */

      }
      
      return (()=>{
           /* 下面是 componentWillUnmount */
      
      
          /* 上面是 componentWillUnmount */
      })
    },[dependencies參數]); /* 第二個參數是用來限定當哪些變數被改變時useEffect要觸發 */
```

- useEffect 常見雷點

```
function App (){
  const [count, setCount] = React.useState(0);

  // 請謹慎開啟註解，要有心理準備電腦會當機
  // React.useEffect(() => {
  //   setCount((pre) => pre + 1);
  // }, [ count ])
  
  return (
    <div>
      { count }
    </div>
  )
}

const app = document.querySelector('#app');
const root = ReactDOM.createRoot(app);
root.render(<App />);
```
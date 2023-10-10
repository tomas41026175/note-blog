# useRef
- 回傳一個有curent屬性的obj
- 可以存放一些不會變動的值
- useRef 並不會觸發 re-render
- 可搭配 useEffect監測畫面是否有被Re-render
```
const ref = useRef(initialValue);


const App = () => {
  const ref = React.useRef(0);
  console.log(ref); // { current: 0 }

  return (
    <div>
    </div>
  );
}
```
- 可用於選取DOM
```
const App = () => {
  const pRef = React.useRef(null);

  React.useEffect(() => {
    console.log('DOM：', pRef.current);
  });

  return (
    <div>
      <p ref={ pRef }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ad assumenda laborum id alias? Reiciendis fugiat, explicabo, natus aperiam debitis facilis quia consequatur voluptatum veniam nobis nulla ad perspiciatis in.  </p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
```
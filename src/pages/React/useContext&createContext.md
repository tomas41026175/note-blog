# useContext & createContext
- 處裡跨元件溝通
- 開始會需要使用 createContext 來建立一個 Context Object
- useContext 只有接受 Context Object 才能夠正常運作
    - useContext 只能接受 Context Object 
```

const DataContext = React.createContext();

const App = () => {
  // ✅ Good！符合 useContext 用法
  const data = useContext(DataContext);

  // ❌ Error！不符合 useContext 用法
  const data = useContext('DataContext');

  // ❌ Error！不符合 useContext 用法
  const data = useContext();

  // ❌ Error！不符合 useContext 用法
  const data = useContext(DataContext.Provider);
  return (
    <div>
    </div>
  )
}

const app = document.querySelector('#app');
const root = ReactDOM.createRoot(app);
root.render(<App />);
```
- createContext()有兩種參數可使用
    - Provider
    	- 傳遞資料用，會搭配一個 value 屬性。
    - Consumer
    	- 接收資料用，會搭配一個 value 屬性，但這一個實際上會被 useContext 取代。
    ```
    需要在元件外層使用 DataContext 包覆並且加上預計要跨元件傳遞的值
    // ...略
    const Card = ({ data }) => {
      return (
        <div>
          <h5>產品名稱：{ data.title }</h5>
          <Button/>
        </div>
      )
    }

    const Products = () => {
      const [ data, setData ] = React.useState({
        title: 'PlayStation5',
        price: 75000,
      });

      return (
        <DataContext.Provider value={ data }>
          <ul>
            <li key={ data.title }>
              <Card data={ data } />
            </li>
          </ul>
        </DataContext.Provider>
      )
    }
    // ...略
    ```

    - 那麼 value 概念也類似於 props。
    - 改寫 Button 並改成使用 useContext 來接收資料
    ```
    // ...略
    const Button = () => {
      const data = React.useContent(DataContext);

      const pay = () => {
        window.alert(`你已成功購買 ${data.title}`);
      }

      return (
        <button type="button" onClick={ pay }>點我購買({ data.price } $)</button>
      )
    }
    // ...略
    ```
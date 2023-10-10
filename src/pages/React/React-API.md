# React API
```
    const React = {
      Children: {
        map,
        forEach,
        count,
        toArray,
        only,
      },

      createRef,
      Component,
      PureComponent,

      createContext,
      forwardRef,

      Fragment: REACT_FRAGMENT_TYPE,
      StrictMode: REACT_STRICT_MODE_TYPE,
      unstable_AsyncMode: REACT_ASYNC_MODE_TYPE,
      unstable_Profiler: REACT_PROFILER_TYPE,

      createElement: __DEV__ ? createElementWithValidation : createElement,
      cloneElement: __DEV__ ? cloneElementWithValidation : cloneElement,
      createFactory: __DEV__ ? createFactoryWithValidation : createFactory,
      isValidElement: isValidElement,

      version: ReactVersion,

      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ReactSharedInternals,
    };
```
- Children
    類似於數組但又不是數組的數據結構,可以使用React.Children方法。

- createRef
    新的Ref用法
    ```
    class App extends React.Component{

  constructor() {
    this.ref = React.createRef()
  }

  render() {
    return <div ref={this.ref} />
    // or
    return <div ref={(node) => this.funRef = node} />
  }
  }
  ```
  - Component & PureComponent
      - 兩者基本上相同，唯一區別是後者的原型上多了一個標示
  ```
  if (ctor.prototype && ctor.prototype.isPureReactComponent) {
  return (
    !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState)
  );
   }
   這是檢查組件是否需要更新的一個判斷，ctor就是你聲明的繼承自Component or PureComponent的類，他會判斷你是否繼承自PureComponent，如果是的話就shallowEqual比較state和props。
    順便說一下：React中對比一個ClassComponent是否需要更新，只有兩個地方。一是看有沒有shouldComponentUpdate方法，二就是這里的PureComponent判斷
  ```

  - createContext
      - 新的context方案
  ```
  const { Provider, Consumer } = React.createContext('defaultValue')

    const ProviderComp = (props) => (
      <Provider value={'realValue'}>
        {props.children}
      </Provider>
    )

    const ConsumerComp = () => (
      <Consumer>
        {(value) => <p>{value}</p>}
      </Consumber>
    )
    ```
  - forwardRef
      -  forwardRef是用來解決HOC組件傳遞ref的問題的，所謂HOC就是Higher Order Component，比如使用redux的時候，我們用connect來給組件綁定需要的state，這其中其實就是給我們的組件在外部包了一層組件，然後通過...props的方式把外部的props傳入到實際組件。forwardRef的使用方法如下：
      ```
      const TargetComponent = React.forwardRef((props, ref) => (
      <TargetComponent ref={ref} />
    ))
  ```  

- createElement & cloneElement & createFactory & isValidElement
```
// jsx
<div id="app">content</div>

// js
React.createElement('div', { id: 'app' }, 'content')
```
- cloneElement是用來克隆一個ReactElement的

- createFactory是用來創建專門用來創建某一類ReactElement的工廠的，
```
export function createFactory(type) {
  const factory = createElement.bind(null, type);
  factory.type = type;
  return factory;
}
```
```
綁定了第一個參數的createElement，一般用JSX進行編程的時候不會用到這個API

isValidElement顧名思義就是用來驗證是否是一個ReactElement的，基本也用不太到
```
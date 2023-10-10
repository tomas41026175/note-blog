```
// 初始化 state 空陣列
let state = [];
// 初始化 setters 空陣列
let setters = [];
// 首次渲染
let firstRun = true;
// 初始化指標值 0
let cursor = 0;

function createSetter(cursor) {
  return function setterWithCursor(newVal) {
    state[cursor] = newVal;
  };
}

// 實作 useState
export function useState(initVal) {
  // 只有首次渲染會進入以下程式碼
  // state push 進 state 的陣列當中
  // setters push 進 setters 的陣列當中
  if (firstRun) {
    state.push(initVal);

    setters.push(createSetter(cursor));
    // 執行完之後，將首次渲染值改為 false
    firstRun = false;
  }

  // 透過對應紀錄好的順序，可以取出該 setter 在陣列中的值
  const setter = setters[cursor];
  // 透過對應紀錄好的順序，可以取出該 state 在陣列中的值
  const value = state[cursor];

  // 指標值 +1
  cursor++;
  // 最後回傳 state 值和 setter 函式
  return [value, setter];
}

// Our component code that uses hooks
function RenderFunctionComponent() {
  const [firstName, setFirstName] = useState('Rudi'); // 指標值: 0
  const [lastName, setLastName] = useState('Yardley'); // 指標值: 1

  return (
    <div>
      <Button onClick={() => setFirstName('Richard')}>Richard</Button>
      <Button onClick={() => setFirstName('Fred')}>Fred</Button>
    </div>
  );
}

function MyComponent() {
  cursor = 0; // 每次渲染前都會重置指標值為 0
  return <RenderFunctionComponent />; // 渲染
}

console.log(state); // 渲染前: []
MyComponent();
console.log(state); // 第一是渲染: ['Rudi', 'Yardley']
MyComponent();
console.log(state); // 後續渲染: ['Rudi', 'Yardley']

// 點擊 Fred 按鈕

console.log(state); //點擊完結果: ['Fred', 'Yardley']
```

- React hooks: not magic, just arrays
- https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e
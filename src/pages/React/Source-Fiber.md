-  代數效應: 讓code可以跳過中間的狀態先處裡後面的工作，再回到前面處裡原本的階段。
## React Fiber
- Fiber並不是計算機術語中的新名詞，他的中文翻譯叫做纖程，與進程（Process）、線程（Thread）、協程（Coroutine）同為程序執行過程。

- 在很多文章中將纖程理解為協程的一種實現。在JS中，協程的實現便是Generator。

- 所以，我們可以將纖程(Fiber)、協程(Generator)理解為代數效應思想在JS中的體現。

- React Fiber可以理解為：
    React內部實現的一套狀態更新機制。支持任務不同優先級，可中斷與恢覆，並且恢覆後可以覆用之前的中間狀態。
- Fiber的含意
    - 作為架構來說，之前React15的Reconciler采用遞歸的方式執行，數據保存在遞歸調用棧中，所以被稱為stack Reconciler。React16的Reconciler基於Fiber節點實現，被稱為Fiber Reconciler。

    - 作為靜態的數據結構來說，每個Fiber節點對應一個React element，保存了該組件的類型（函數組件/類組件/原生組件...）、對應的DOM節點等信息。

    - 作為動態的工作單元來說，每個Fiber節點保存了本次更新中該組件改變的狀態、要執行的工作（需要被刪除/被插入頁面中/被更新...）。
```
function FiberNode(
  tag: WorkTag,
  pendingProps: mixed,
  key: null | string,
  mode: TypeOfMode,
) {
  // 作為靜態數據結構的屬性
  this.tag = tag;
  this.key = key;
  this.elementType = null;
  this.type = null;
  this.stateNode = null;

  // 用於連接其他Fiber節點形成Fiber樹
  this.return = null;
  this.child = null;
  this.sibling = null;
  this.index = 0;

  this.ref = null;

  // 作為動態的工作單元的屬性
  this.pendingProps = pendingProps;
  this.memoizedProps = null;
  this.updateQueue = null;
  this.memoizedState = null;
  this.dependencies = null;

  this.mode = mode;

  this.effectTag = NoEffect;
  this.nextEffect = null;

  this.firstEffect = null;
  this.lastEffect = null;

  // 調度優先級相關
  this.lanes = NoLanes;
  this.childLanes = NoLanes;

  // 指向該fiber在另一次更新時對應的fiber
  this.alternate = null;
}
```

- 從上面的程式碼，我們可以看到 useState 的歷程

  1. 初始化： 兩個空陣列分別儲存 setters 和 state，設置指標 (cursor) 值為 0

  2. 首次渲染： 遍歷所有的 useState，並將 setters 放到 setters 的陣列當中，將 state 放進 state 的陣列當中

  3. 重新渲染： 每次重新渲染都會重置指標值為 0，並依次從陣列中取出之前的 state，因為先前在存放 setters 與 state 是依序放入的，因此只要這個順序沒變，就可以確保重新渲染後，是拿到對的 setters 與 state。

  4. 事件觸發： 每個 setter 都有對應指標的 state 值 ，因此只要有事件觸發調用到任何 setter ，都會修改到此 setter 到應到 state 陣列中的值。因此只要順序沒有變，就會改到對的值。

上方程式碼的例子可以看到，React 背後透過指標值來記錄對應的 state 和 setter，但如果今天我們沒有遵照 React 規範編寫 Hook 而導致 Hook 調用順序錯誤，顯而易見的，指標值也會錯誤，在這種情況下，我們得到的 state 值或 set 的 state 值也會錯誤，這就會造成 Bug 的產生。


- Reference
    - https://react.iamkasong.com/process/fiber.html#fiber%E7%9A%84%E7%BB%93%E6%9E%84

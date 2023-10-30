# 如何使用 TS 實現各種資料結構

**1. Array**
特性 : 連續的記憶體空間、固定大小、索引訪問。
應用場景：當需要快速訪問元素（通過索引）或者知道元素的順序且數量相對固定時，數組是很好的選擇。例如，渲染圖形時的像素數組、查詢結果列表等。
時間複雜度 :

-   存取（Access）：O(1)
-   插入（Insert）：O(n) - 如果是在結尾插入並且沒有超過初始容量，則為 O(1)
-   刪除（Delete）：O(n) - 如果是刪除最後一個元素，則為 O(1)
-   搜尋（Search）：O(n) - 對於非排序數組

```ts
const arr: number[] = [1, 2, 3];
```

**2.鏈表（LinkedList）**
特性 : 非連續記憶體、動態大小、節點指向下一個節點。
應用場景：適用於需要頻繁插入和刪除的情況，尤其是在中間位置。例如，音樂播放器的播放列表、瀏覽器的歷史記錄。
時間複雜度 :

-   存取（Access）：O(n)
-   插入（Insert）：O(1) - 如果已知插入位置的節點
-   刪除（Delete）：O(1) - 如果已知刪除位置的節點
-   搜尋（Search）：O(n)

```ts
class ListNode<T> {
    constructor(public value: T, public next: ListNode<T> | null = null) {}
}
```

**3.堆疊（Stack）**
特性：**後入先出（LIFO）**，只能從頂部新增或移除。
應用場景：當數據有後入先出的特性時使用。例如，實現後退功能的瀏覽器歷史、編輯器的撤銷操作、函數呼叫堆疊等。
時間複雜度 :

-   推送（Push）：O(1)
-   彈出（Pop）：O(1)
-   頂部（Top/Peek）：O(1)
-   搜尋（Search）：O(n)

```ts
class Stack<T> {
    private items: T[] = [];
    push(element: T) {
        this.items.push(element);
    }
    pop(): T | undefined {
        return this.items.pop();
    }
}
```

**4.佇列（Queue）**

特性：先入先出（FIFO），只能從尾部新增和從頭部移除。
應用場景：當數據有先入先出的特性時使用。例如，列印任務隊列、消息隊列、實現廣度優先搜索算法等。
時間複雜度 :

-   入佇列（Enqueue）：O(1)
-   出佇列（Dequeue）：O(1)
-   前端（Front/Peek）：O(1)
-   搜尋（Search）：O(n)

```ts
class Queue<T> {
    private items: T[] = [];
    enqueue(element: T) {
        this.items.push(element);
    }
    dequeue(): T | undefined {
        return this.items.shift();
    }
}
```

**5.雜湊（HashTable）**
特性：鍵值對存儲，通過哈希函數將鍵映射到桶。
應用場景：當需要快速查找、插入、刪除鍵值對時。例如，數據庫的索引、快取、網站的路由映射等。
時間複雜度 :

-   插入（Insert）：O(1) - 平均情況
-   刪除（Delete）：O(1) - 平均情況
-   存取（Access）：O(1) - 平均情況
-   搜尋（Search）：O(1) - 平均情況

```ts
class HashTable<K, V> {
    private table: { [key: string]: V } = {}; //
    set(key: K, value: V) {
        this.table[JSON.stringify(key)] = value;
    }
    get(key: K): V | undefined {
        return this.table[JSON.stringify(key)];
    }
}
```

**5-1 散列集合（HashSet）和散列表（HashMap）**

特性：使用哈希函數存儲元素或鍵值對。
應用場景：快速查找、去重、計數。
時間複雜度：
插入：O(1)（平均）
查找：O(1)（平均）
刪除：O(1)（平均）

```ts
class HashMap<K, V> {
    private map: Map<K, V> = new Map();

    set(key: K, value: V) {
        this.map.set(key, value);
    }

    get(key: K): V | undefined {
        return this.map.get(key);
    }
}
```

**6.二元樹( Binary Trees)**
特性：每個節點最多有兩個子節點：左子節點和右子節點。
應用場景：表達層次結構，如文件系統；二叉搜尋樹用於快速查找、插入、刪除等。
時間複雜度：
查找：O(h) （h 為樹的高度）
插入/刪除（二叉搜尋樹）：O(h)

```ts
class TreeNode<T> {
    constructor(
        public value: T,
        public left: TreeNode<T> | null = null,
        public right: TreeNode<T> | null = null
    ) {}
}
```

**6-1 紅黑樹、AVL 樹等平衡二叉搜尋樹**

特性：自平衡的二叉搜尋樹。
應用場景：需要保持資料結構平衡以維護查找、插入、刪除的效率。
時間複雜度：
查找：O(log n)
插入：O(log n)
刪除：O(log n)

```ts
class AVLNode<T> {
    public height: number = 1;
    constructor(
        public value: T,
        public left: AVLNode<T> | null = null,
        public right: AVLNode<T> | null = null
    ) {}
}

class AVLTree<T> {
    private root: AVLNode<T> | null = null;
    // ... 此處還需加入平衡、旋轉、插入、刪除等操作方法
}
```

**7.圖（Graphs）**

特性：由節點（vertices）和邊（edges）組成。
應用場景：社交網絡、路徑查找、網絡拓撲等。
時間複雜度：因圖的種類和操作而異，但常見操作如：
鄰接表中添加頂點：O(1)
鄰接表中添加邊：O(1)
查找頂點/邊：O(V+E) （V 為頂點數，E 為邊數）

```ts
class Graph<T> {
    private adjacencyList: Map<T, T[]> = new Map();

    addVertex(vertex: T) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(v1: T, v2: T) {
        this.adjacencyList.get(v1)?.push(v2);
        this.adjacencyList.get(v2)?.push(v1);
    }
}
```

**8.堆（Heap）**

特性：通常用數組實現的完全二叉樹，有最大堆和最小堆。
應用場景：優先佇列、查找最大/最小元素。
時間複雜度：
插入：O(log n)
刪除最大/最小元素：O(log n)
查找最大/最小元素：O(1)

```ts
class MinHeap {
    private heap: number[] = [];
    // ... 此處還需加入插入、刪除等操作方法
}
```

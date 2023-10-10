# JS資料結構、應用場景
###### tags: `JavaScript` `Functional Programming`


1. 陣列（Array）：以順序的方式儲存一組值，通常用於儲存同類型的資料，例如列表、數組、矩陣等。
      - 宣告一個空陣列：```let arr = [];```
      - 宣告一個具有預設值的陣列：```let arr = [1, 2, 3];```
      - 取得陣列中的元素：```arr[index];```
      - 設定陣列中的元素：```arr[index] = value;```
      - 迭代陣列中的元素：```arr.forEach(function(item, index, array) { });```
      - 將元素添加至陣列尾部：```arr.push(element);```
      - 刪除陣列尾部的元素：```arr.pop();```
      - 將元素添加至陣列頭部：```arr.unshift(element);```
      - 刪除陣列頭部的元素：```arr.shift();```
      - 獲取陣列的長度：```arr.length;```
      
* 高階函數
    - forEach() 方法: 對陣列中每個元素應用一個函數，**沒有回傳值**。
        - Array.prototype.forEach() 是一個高階函數，用於對陣列中的每個元素執行一個指定的操作。這個方法接收一個函數作為參數，並將該函數應用於每個元素，沒有返回值。
    ```
        const arr =[1,2.3]
        arr.forEach((e)=>console.log(e)) // 1 2 3
    ```

    - map() 方法：對陣列中每個元素應用一個函數，並回傳一個新的陣列。
        - Array.prototype.map()，用於對陣列中的每個元素進行轉換。這個方法接收一個函數作為參數，並將該函數應用於每個元素，然後返回一個新的陣列。
    ```
    const arr = [1, 2, 3];
    const newArr = arr.map((x) => x * 2);
    console.log(newArr); // [2, 4, 6]
    ```
    - filter() 方法：依照回傳值的條件過濾陣列中的元素，並回傳一個新的陣列。
        - Array.prototype.filter()，用於過濾陣列中的元素。這個方法接收一個函數作為參數，並將該函數應用於每個元素，如果函數返回 true，則將該元素加入新陣列，否則不加入。
    ```
    const arr = [1, 2, 3, 4, 5];
    const filteredArr = arr.filter((x) => x % 2 === 0);
    console.log(filteredArr); // [2, 4]
    ```
    - reduce() 方法：將陣列中所有元素結合起來，回傳一個值。
        - Array.prototype.reduce() 是另一個常見的高階函數，用於對陣列中的所有元素進行聚合操作。這個方法接收一個函數作為參數，並使用該函數將陣列中的所有元素組合成單一的值。
    ```
    const arr = [1, 2, 3, 4, 5];
	const sum = arr.reduce((acc, cur) => acc + cur);
	console.log(sum); // 15
	```

2. 物件（Object）：使用鍵值對來儲存和組織資料，通常用於儲存非同類型的資料，例如對象、標註、配置等。
	- 宣告一個空物件：```let obj = {};```
	- 宣告一個具有預設值的物件：```let obj = { key1: value1, key2: value2 };```
	- 存取物件的屬性：```obj.key; 或 obj["key"];```
	- 設定物件的屬性：```obj.key = value; 或 obj["key"] = value;```
	- 刪除物件的屬性：```delete obj.key;```
	- 獲取物件的鍵值對數量：```Object.keys(obj).length;```
	- 判斷物件是否包含某個屬性：```obj.hasOwnProperty(key);```

3. 集合（Set）：儲存唯一的值，通常用於進行集合運算，例如交集、聯集、差集等。
    - 自動刪除重複的value
	- 宣告一個空集合：```let set = new Set();```
	- 宣告一個具有預設值的集合：```let set = new Set([1, 2, 3]);```
	- 將元素添加至集合中：```set.add(element);
	- 刪除集合中的元素：```set.delete(element);```
	- 清空集合中的元素：```set.clear();```
	- 獲取集合中的元素數量：```set.size;```
	- 判斷集合是否包含某個元素：```set.has(element);```
	- 迭代集合中的元素：```set.forEach(function(value, key, set) { });```

* 高階函數
    * forEach() 方法：對集合中的每個鍵值對應用一個函數。
    ```
    const mySet = new Set([1, 2, 3]);
    mySet.forEach((value) => console.log(value));
    // 1
    // 2
    // 3
    ```

4. 映射（Map）：以鍵值對的形式儲存資料，通常用於快速查找和更新資料，例如字典、哈希表等。
    - 宣告一個空映射：```let map = new Map();```
    - 宣告一個具有預設值的映射：let map = ```new Map([ [key1, value1], [key2, value2] ]);```
    - 存取映射的值：```map.get(key);```
    - 設定映射的值：```map.set(key, value);```
    - 刪除映射的鍵值對：```map.delete(key);```
    - 清空映射中的鍵值對：```map.clear();```
    - 獲取映射中的鍵值對數量：```map.size;```
    - 判斷映射是否包含某個鍵：```map.has(key);```
    - 迭代映射中的鍵值對：```map.forEach(function(value, key, map) { });```

* 高階函數
    * forEach() 方法：對映射中的每個鍵值對應用一個函數。
    ```
    const myMap = new Map([['a', 1], ['b', 2], ['c', 3]]);
    myMap.forEach((value, key) => console.log(`${key}: ${value}`));
    // a: 1
    // b: 2
    // c: 3
    ```

5. 佇列（Queue）：使用先進先出（FIFO）的方式來儲存和訪問資料，通常用於處理作業系統中的行程或網路瀏覽器中的網頁請求等。
    - 宣告一個空佇列：```let queue = [];```
    - 將元素添加至佇列尾部：```queue.push(element);```
    - 刪除佇列頭部的元素：```queue.shift();```
    - 獲取佇列的長度：```queue.length;```
    - 可使用for / for...of回圈進行迭代 / 操作。

6. 堆疊（Stack）：使用後進先出（LIFO）的方式來儲存和訪問資料，通常用於算術表達式的求值、瀏覽器的歷史記錄等。
	- 宣告一個空堆疊：```let stack = [];```
	- 將元素添加至堆疊頂部：```stack.push(element);```
	- 刪除堆疊頂部的元素：```stack.pop();```
	- 獲取堆疊的長度：```stack.length;```
	- 可使用for / for...of回圈進行迭代 / 操作。

- 除此之外，以下是其他常用資料結構及其應用場景的總結(非JS原生)：

1. 連結串列（Linked List）：通常用於實現鏈式資料結構，例如佇列、堆疊、哈希表等。

2. 二元樹（Binary Tree）：通常用於查找和排序操作，例如二元搜尋樹、AVL 樹、紅黑樹等。

3. 哈希表（Hash Table）：通常用於實現快速查找和更新操作，例如字典、符號表、緩存等。

4. 圖（Graph）：通常用於模型化各種現實問題，例如路徑規劃、社交網絡、組織架構等。

# Vue常用語法糖
---
- v-if：用於條件渲染，根據表達式的真假值來顯示或隱藏元素。
- v-for：用於列表渲染，遍歷數據並渲染每個項目。```// 可配合使用key綁定id```
    - v-for="item in items"
    - v-for="item of items"
    - 用途：在 Vue 模板中，可以用 v-for 指令，來迭代資料，並根據資料渲染重複的 HTML 標籤或自訂元件。
    - 可以使用巢狀 v-for，內層的 v-for 可以拿到外層 v-for 的資料。
    - 可接收資料：正整數、字串、陣列、物件。
    - v-for 注意事項
        - 強烈建議綁定 key 屬性，並給予不會變動的唯一值，告訴 Vue 整個渲染的元素要跟著 key 值相同的資料一起移動，避免 Vue 最小化更新("in-place patch" 策略)
        - 不能和 v-if 用在同一個元素或元件上，因為會優先判別 v-if，此時取不到 v-for 的資料 //Vue3
```
v-for="(value, key, index) in object"：用于遍历对象的属性，类似于 for...in 循环。
```
- v-bind：用於動態綁定 HTML 屬性，根據表達式的值設置屬性。
- v-on：用於監聽 DOM 事件，當事件觸發時執行指定的 JavaScript 代碼。
- v-model：用於雙向綁定表單輸入元素和數據。
- v-show：用於條件渲染，根據表達式的真假值來顯示或隱藏元素。
- v-text：用於渲染純文本內容，將表達式的值設置為元素的文本內容。
- v-html：用於渲染 HTML 內容，將表達式的值設置為元素的 HTML 內容。
- v-pre：用於跳過元素和子元素的編譯，直接渲染原始 HTML。
- v-cloak：用於防止未編譯的模板內容閃現在頁面上。
- v-once：用於一次性渲染元素，防止元素被重新渲染。
- v-slot：用於插槽分發，將內容插入到具名插槽或預設插槽中。
- v-is：用於動態切換組件，動態地設置組件的標籤名。
```
const isShow = ref(true)
<component :is="isShow? Card : HelloWorld"><strong>This is an Error for Demo Purposes</strong></component> //根據isShow的狀態切換渲染component
<button @click="isShow = !isShow">click me!</button>
```
- v-bind:id、v-bind:class、v-bind:style、v-bind:prop：用於動態設置 CSS 類名、行內樣式和元素屬性。
- @click、@input、@submit：用於簡化 v-on 的常見事件綁定。
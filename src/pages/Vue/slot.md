# Vue-slot(插槽)
---
- slot（插槽）的概念是把外層的內容塞進子元件的指定位置裏。跟插槽的字面意思一樣，*前提是：有插口才能插*。子元件需要開一個插口（slot），才可以在*外層元件把內容塞進子元件*裏。

- slot可分為四種類型
    - slot(插槽)
    - Named slot(具名插槽)
    - Scoped slot(作用域插槽)
    - Dynamic slot(動態插槽)
    
- slot(插槽)
    - ex 把父層的card塞進子元件中，可使用slot
    ```
    // App.vue
    <template>
      <Card> //這邊的文字會傳下去 </Card>
    </template>
    
    //Card.vue
    <template>
      <h1>
        <slot>這是預設文字</slot>
      </h1>
    </template>
    ```
- Named slot(具名插槽)
    - 複數父元件的狀況下，需要使用複數的slot時，可適用具名插槽來指定父層的資料要放哪邊
    - *注意：如果 slot 沒有命名，在父元件傳入內容時，需使用 v-slot:default 來標示。*
    - 縮寫可以用 # 代替 v-slot:
    - ![](https://i.imgur.com/Iw42S2E.png)
    ```
    <Card>
        <template #title>
          <h1> 夏日短裙 </h1>
        </template>
        <template #price>
          <p> $200 </p>
        </template>
        <template #default>
          <p> Sizes: XS, S, M, L </p>
        </template>
    </Card>
    ```
- 為什麼用 slot？與 props 有什麼分別？
    - props 與 slot 的分別是：
        - props 主要是用作傳資料，不是傳入 DOM 內容。例如，如果把<p> $200 </p> 這個 DOM 內容轉入子元件裏，這情況用 slot 就會方便很多。
    - 有時候資料是靜態，不常變動，甚至需要大量重複。這情況無必要使用 props。
    - props 無法像 slot 分配資料呈現的位置。
    
- 利用 slot 打造自己的 UI 元件
    - 使用 slot 打造自己的 UI 元件。過程就如自行製作一個 Vue 模版，利用 named slot 預先在分配資料的位置。當父層傳入資料時，就自動把父層的資料，分配到子元件的不同位置裏。
    - 如果一個網頁的每個 section heading 都有同一個樣式，我可以把 heading 拆成一支獨立檔案。再同時利用 named slot 分配好不同資料的位置。這樣的好處是：
        - Card 的 CSS 能拆出來寫，不用寫在父層裏。
        - 比起使用 props，能自動分配資料到不同位置作呈現。
        ```
        //Heading.vue
        <template>
          <div class="section">
            <h2>
              <slot name="title"></slot>
            </h2>
            <p>
              <slot name="slogan"></slot>
            </p>
          </div>
        </template>
        
        // App.vue
        <Heading v-for="section in sections" :key="section.title">
            <template #title>
              {{ section.title }}
            </template>
            <template #slogan>
              {{ section.slogan }}
            </template>
        </Heading>
        
        //js
        export default {
          components: {
            Heading,
          },
          data() {
            return {
              sections: [
                {
                  title: "限時優惠",
                  slogan: "搶購限時最便宜貨品！",
                },
                {
                  title: "最新商品",
                  slogan: "為你帶來最新貨品！",
                },
                {
                  title: "一般商品",
                  slogan: "多種商品任你選擇！",
                },
              ],
            };
          },
        };
        ```
- Scoped slot（作用域插槽）
    - Scoped slot 是指把子元件的資料取出來，給父層使用。這是因為父層無法取得子元件的資料。
    - 舉例說，每個商品都用一個 Card 元件來呈現。商品資料在父層，而 Card 的資料呈現和樣式就在 Card 元件裏面。像以下結構：
    ```
    //App.vue
    <Card>
        <template #title>...</template>
        <template #price>...</template>
        <template #size>...</template>
    </Card>
    
    export default {
          components: {
            Card,
          },
          data() {
            return {
              items: [
                {
                  title: "夏日短裙",
                  price: 200,
                  sizes: ["XS", "S", "M", "L"],
                },
                {
                  title: "純白 T-shirt",
                  price: 100,
                  sizes: ["XS", "S"],
                },
                {
                  title: "針織背心",
                  price: 300,
                  sizes: ["XS", "S", "M"],
                },
              ],
            };
          },
        };
    ```
    ```
    //components/Card.vue
      <div class="card">
            <h1 class="title">
              <slot name="title"></slot>
            </h1>
            <p>
                售價：
              <slot name="price"></slot>
            </p>
            <p>
              <slot name="size"></slot>
            </p>
            <div class="quantity">
              <label for="quantity">數量：</label>
              <select name="quantity" id="quantity" v-model="quantity">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <p class="result">
              <slot name="result" :quantity="quantity" ></slot>
            </p>
          </div>
          
          export default {
              data() {
                return {
                  quantity: 0
                }
              }
            };
    
    ```
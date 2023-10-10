# Vue3 - 響應式狀態(ref,reactive)
---
- SFC(single-File Component)是一種可重複使用的代碼組織形式，它將同一個組件的html.css,js封裝在同一個.vue檔案之中。
- Vue的核心功能是**聲明式渲染**:
    - 透過擴展於標準HTML的模板語法，可以根據JS的狀態來描述HTML的樣式，當狀態改變時會更新HTML。
- 響應式狀態:
    - 想要在component中使用，需要在```setup()```中定義並返回
    ```
    import { reactive } from 'vue'

        export default {
          // `setup` 是一个专门用于组合式 API 的特殊钩子函数
          setup() {
            const state = reactive({ count: 0 })

        // 暴露 state 到模板
        return {
          state
        }
      }
    }
    //template
        <div>{{ state.count }}</div>
    ```
    - 會在改變時，觸發更新的狀態。
    - 使用```reactive()``` API宣告響應式狀態，由```reactive()```創建的對象都JavaScript proxy
    ```
    import { reactive } from 'vue'
    
    const counter = reactive({
      count: 0
    })

    console.log(counter.count) // 0
    counter.count++
    ```
    - ```reactive()```只適用於對象(包含數組&內置類型(Set&Map))
        - 在TS中對```reactive()```進行型態標示
        - reactive()會return一個物件
            - 使用obj.value取用
        ```
        interface Book{
            title : string
            year? :number
        }
        const book:book = reactive({title: 'Vue3指引'})
        console.log(book.title) //Vue3指引
        ```
    - ```ref()```可接受任何類型的value，ref會返回一個包裹對象，並在```.value```中暴露內部value(使用.value可存取ref的值)
    ```
    import { ref } from 'vue'

    const message = ref('Hello World!')

    console.log(message.value) // "Hello World!"
    message.value = 'Changed'
    ```
    - 當需要載以ref內指定一個更複雜的型態，可以透過使用```Ref```這個型態
    ```
    import { ref } from 'vue'
    import type { Ref } from 'vue'

    const year: Ref<string | number> = ref('2020')

    year.value = 2020 // 成功！
    ```
    - 或是在調用```ref()```時，傳入一個泛型參數來覆蓋默認的推導行為。
    ```
    // 得到的类型：Ref<string | number>
    const year = ref<string | number>('2020')

    year.value = 2020 // 成功！
    ```
    - 但當指定一個泛型參數，卻沒有給初始值，會得到一個包含```undefined```的聯合類型。
    ```
    // 推导得到的类型：Ref<number | undefined>
    const n = ref<number>()
    ```
    - 在<script setup>中宣告的ref / reactive都可以在template中使用
    ```
    <h1>{{ message }}</h1>
    <p>count is: {{ counter.count }}</p>
    ```
    - 在template中使用ref時，不需要加上```.value```
        - 在template中會自動將ref解包。
    - 雙花括號中不只限於使用標示符、路徑，可以使用任何JS表達式

    ```
    <h1>{{ message.split('').reverse().join('') }}</h1>
    ```
      
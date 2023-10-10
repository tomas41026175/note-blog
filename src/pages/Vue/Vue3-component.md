# Vue3 - Component(元件)
###### tags: `Vue`
---
## 定義component的方式
### 使用構建步驟(script setup):SFC(單文件組件):定義於單獨.vue文件中的Vue組件
```
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>
```
### 不使用構建步驟(script setup):一個vue component以一個包含vue特定選項的JS來定義
```
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    return { count }
  },
  template: `
    <button @click="count++">
      You clicked me {{ count }} times.
    </button>`
  // 或者 `template: '#my-template-element'`
}
這裡的模板是一個內聯的JavaScript 字符串，Vue 將會在運行時編譯它。你也可以使用ID 選擇器來指向一個元素(通常是原生的 <template> 元素)，Vue 將會使用其內容作為模板來源。
```

## 使用component
### 在父層導入
### 引入到全局(在App.vue中引用)
## 傳遞props
### 要在component中使用props需要使用`defineProps`
#### ```<script setup>```
```
<!-- BlogPost.vue -->
<script setup>
defineProps(['title'])
</script>

<template>
  <h4>{{ title }}</h4>
</template>
```
#### TS:
```
<script setup lang="ts">
const props = defineProps<{
  foo: string   //必須是字串
  bar?: number //?表示可選屬性 不使用number就變成undefined
}>()
</script>
```
#### 不使用```<script setup>```
- 不使用```<script setup>```的情況下必須以props宣告
```
export default {
  props: ['title'],
  setup(props) {
    console.log(props.title)
  }
}
```
### 當事先不知道要渲染的確切內容時，可使用 **v-bind** 來傳遞動態prop的值

### 監聽事件
#### ex: 實現從父層變更子元件的字體
1. 在父組件中，我們可以添加一個ref來實現這個效果：postFontSize
```
const posts = ref([
  /* ... */
])

const postFontSize = ref(1)
```
2. 在模板中用它來控制所有博客文章的字體大小：
```
<div :style="{ fontSize: postFontSize + 'em' }">
  <BlogPost
    v-for="post in posts"
    :key="post.id"
    :title="post.title"
   />
</div>
```

3. 給 <BlogPost> 組件添加一個按鈕：
```
<!-- BlogPost.vue, 省略了 <script> -->
<template>
  <div class="blog-post">
    <h4>{{ title }}</h4>
    <button>Enlarge text</button>
  </div>
</template>

```
4. 組件實例提供了一個自定義事件系統。父組件可以通過 v-on 或 @ 來選擇性地監聽子組件上拋的事件，就像監聽原生DOM 事件那樣：
```
<BlogPost
  ...
  @enlarge-text="postFontSize += 0.1"
 />

```
5. 子組件可以通過調用內置的 $emit 方法，通過傳入事件名稱來拋出一個事件：
```
<!-- BlogPost.vue, 省略了 <script> -->
<template>
  <div class="blog-post">
    <h4>{{ title }}</h4>
    <button @click="$emit('enlarge-text')">Enlarge text</button>
  </div>
</template>
```    
6. 因為有了 @enlarge-text="postFontSize += 0.1" 的監聽，父組件會接收這一事件，從而更新 postFontSize 的值。

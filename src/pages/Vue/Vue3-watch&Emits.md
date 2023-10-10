# Vue3 - 監聽器(watch),Props,Emits
---
### 我們可以透過watch來監聽一些響應式的*副作用*
#### ex當一個數字改變時將其輸出到控制台。我們可以通過偵聽器來實現它：
```
import { ref, watch } from 'vue'

const count = ref(0)

watch(count, (newCount) => {
  // console.log() 是一个副作用
  console.log(`new count is: ${newCount}`)
})
```
#### watch()可以直接偵聽一個ref，並且只要 count 的值改變就會觸發回調。watch()也可以偵聽其他類型的數據源
- https://cn.vuejs.org/tutorial/#step-10
- https://cn.vuejs.org/guide/essentials/watchers.html

### Props
#### 子元件可以透過props從父層接收data
```
<!-- ChildComp.vue -->
<script setup>
const props = defineProps({
  msg: String
})
</script>
```
#### 注意 defineProps() 是一個編譯時腳本，並不需要導入。一旦聲明，```msg```prop 就可以在子組件的模板中使用。它也可以通過 defineProps() 所返回的對象在JavaScript中訪問。

#### 父組件可以像聲明HTML attributes 一樣傳遞props。若要傳遞動態值，也可以使用 v-bind 語法：
```
<ChildComp :msg="greeting" />
```
- https://cn.vuejs.org/tutorial/#step-12
### Emits
#### 子組件也可以向父組件觸發事件：
```
<script setup>
// 声明触发的事件
const emit = defineEmits(['response'])

// 带参数触发
emit('response', 'hello from child')
</script>

```
#### emit()的第一個參數是事件的名稱。其他所有參數都將傳遞給事件監聽器。
#### 父組件可以使用 *v-on* 監聽子組件觸發的事件——這裡的處理函數接收了子組件觸發事件時的額外參數並將它賦值給了本地狀態：

```
//script

import { ref } from 'vue'
import ChildComp from './ChildComp.vue'

const childMsg = ref('No child msg yet')

//template
<ChildComp @response="(msg) => childMsg = msg" />

// 子元件./ChildComp.vue

// 声明触发的事件
const emit = defineEmits(['response'])

// 带参数触发
emit('response', 'hello from child')

<template>
  <h2>Child component</h2>
</template>



```

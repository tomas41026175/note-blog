# Vue3 - Attribute綁定(v-bind(:)) 、 事件監聽(v-on(@))、雙向綁定(v-model)、條件渲染(v-if)
###### tags: `Vue`
---
## Attribute綁定(v-bind(:))
### 可以綁定DOM的參數: ex id,class,attribute(data-sth)
### 在Vue 中，mustache 語法(即雙大括號) 只能用於文本插值。為了給attribute 綁定一個動態值，需要使用 v-bind 指令：
```
//id = 'dynamicId'
<div v-bind:id="dynamicId"></div>
```
#### 指令是由 v- 開頭的一種特殊attribute。它們是Vue 模板語法的一部分。和文本插值類似，指令的值是可以訪問組件狀態的JavaScript 表達式。關於 v-bind 和指令語法的完整細節請詳閱指南- 模板語法。

#### 冒號後面的部分( :id) 是指令的“參數”。此處，元素的idattribute 將與組件狀態裡的 dynamicId 屬性保持同步。

#### 由於 v-bind 使用地非常頻繁，它有一個專門的簡寫語法：
```
`:`
<div :id="dynamicId"></div>
```

## 事件監聽(v-on(@))
### example
#### 此處，increment引用了一個在 <script setup> 中聲明的函數：
    <script setup>
    import { ref } from 'vue'

    const count = ref(0)

    function increment() {
      // 更新组件状态
      count.value++  //這邊使用.value取用ref的資料
    }
    </script>
    <template>
        <button @click="increment">
                +
        </button>
    </template>

## 表單綁定(雙向綁定(v-model))
### 同時使用 v-bind 和 v-on 來在表單的輸入元素上創建雙向綁定：
```
<input :value="text" @input="onInput">
function onInput(e) {
  // v-on 处理函数会接收原生 DOM 事件
  // 作为其参数。
  text.value = e.target.value
}
//在文本框裡輸入資料時 input裡的文本也會隨著輸入更新
```
### 使用v-model進行雙向綁定
```
<script>
const text = ref('')
</script>

<template>
  <input v-model="text" placeholder="Type here"> //text = text.value
  <p>{{ text }}</p>
</template>
```


## 條件渲染(conditional rendering)(v-if)
### 可以使用```v-if```進行條件渲染
```
<h1 v-if="awesome">Vue is awesome!</h1>
```
### 也可以使用v-else / v-else-if表示其他條件分支
```
//script
const awesome = ref(true)
const toggle = () =>{awesome.value = !awesome.value}

/template
<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
```

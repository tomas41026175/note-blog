# Vue3 - 生命週期與模板引用
---
### 模板引用——也就是指向模板中一個DOM 元素的ref。我們需要通過這個特殊的refattribute來實現模板引用：
```
//template
<p ref="p">hello</p>
```
#### 要訪問該引用，我們需要聲明一個同名的ref：
```
//js
const p = ref(null)
```
#### 這個ref 使用 null 值來初始化。這是因為當 執行時，DOM 元素還不存在。模板引用ref 只能在組件掛載後訪問。
#### 要在掛載之後執行代碼，我們可以使用 onMounted() 函數：
```
import { onMounted } from 'vue'

const p = ref(null)

onMounted(() => {
  p.value.textContent = 'mounted!'
})

onMounted(() => {
    
  // 此时组件已经挂载。
})
```
#### 這被稱為生命週期Hook
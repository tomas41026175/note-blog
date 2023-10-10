# Vue3 - 列表渲染(迴圈)(v-for) , 計算屬性(computed)
---
## 列表渲染(v-for)
### 可以使用```v-for```渲染基於Array的列表
```
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```
#### 這邊的```todo```是一個局部變數，表示當前正在迭代的元素，只能在```v-for```所綁定的元素或是其內部訪問。
#### 這邊還有加上:key將每個todo綁定一個唯一的id
*:key 是 Vue.js 中用來追蹤和識別每個元素的特殊屬性，讓 Vue 知道哪些元素被添加、刪除或重新排列。當數據發生變化時，Vue 會根據每個元素的 :key 值來決定如何更新 DOM。*
#### v-for中更新列表有兩種方式
- 在Array上調用變更方法：
```
todos.value.push(newTodo)
```
- 使用新的Array替代原本的Array
```
todos.value = todos.value.filter(/* ... */)
```
## 計算屬性(computed)(實現計算邏輯)
### computed()。它可以讓我們創建一個計算屬性ref，這個ref會動態地根據其他響應式數據來源進行計算其.value：
```
import { ref, computed } from 'vue'

const hideCompleted = ref(false)
const todos = ref([
  /* ... */
])

const filteredTodos = computed(() => {
  // 根据 `todos.value` & `hideCompleted.value`
  // 返回过滤后的 todo 项目 
  //當hideCompleted的value有變化時會觸發Computed並執行以下func
  if(hideCompleted.value !==true){
    let tempArr = todos.value.filter((e)=> e.done == false)
    return tempArr
    })
```
- https://cn.vuejs.org/tutorial/#step-8
# Vue3 - Component中使用 v-語法糖 , props
---
### component需要經過宣告它所接收的props
### 元素位置限制
#### 某些HTML 元素對於放在其中的元素類型有限制，例如```<ul>```，```<ol>```，```<table>```和```<select>```，相應的，某些元素僅在放置於特定元素中時才會顯示，例如```<li>```，```<tr>```和```<option>```。
#### 這將導致在使用帶有此類限制元素的組件時出現問題。例如：
```
<table>
  <blog-post-row></blog-post-row> //component中的資料不被table所接受
</table>
```
#### 自定義的組件 ```<blog-post-row>``` 將作為無效的內容被忽略，因而在最終呈現的輸出中造成錯誤。我們可以使用特殊的isattribute作為一種解決方案：
- 使用is將blog-post-row渲染進tr中
- tips: *當使用在原生HTML 元素上時，is的值必須加上前綴 vue: 才可以被解析為一個Vue 組件。這一點是必要的，為了避免和原生的自定義內置元素相混淆。*
```
<table>
  <tr is="vue:blog-post-row"></tr>
</table>
```
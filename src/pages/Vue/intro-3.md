# 前端框架 Vue (3) 渲染文字內容

範例程式碼放在 [CodePen](https://codepen.io/mogzbvfl-the-reactor/pen/GRBKOby) 中

## 1. {{ }} (Mustache 鬍子) / v-text / v-model
兩種方法都可以將 data 中的資料渲染到畫面上，顯示結果一模一樣


### 1-1. {{ }} (Mustache 鬍子) 用法
在標籤內打上 {{ 資料名稱 }}

```htmlmixed=
<p>{{ name }}在{{ position }}喝牛肉湯</p>
```


### 1-2. v-text 用法
在標籤加上 v-text="資料名稱"，使用 v-text 的好處是可藉由改變標籤來對內容對調整，例如，把 span 改成 strong，讓字體變粗

```htmlmixed= 
<h3>字串 v-text 與 <code v-pre>{{}}</code> (Mustache)</h3>
```

```htmlmixed= 
<p><strong v-text="name"></strong>在<span v-text="position"></span>喝牛肉湯</p>
```

### 1-3. ### v-model
Vue 的雙向綁定機制，操作 v-model 時，資料也會跟著變更，反過來也是

```htmlmixed=
<input type="text" v-model="name" />
```

![](https://i.imgur.com/gF4t71e.png =200x)


---
## 2. 原始字串 v-html 
{{ rawHtml }} 直接把資料內容顯示出來，如果要讓 `<p>...</p>` 維持 html 標籤功能，就改用 v-html，結果如下圖。

==注意！**避免**使用　v-html 來輸出用戶提供(非安全來源)的內容==

> [Security Note](https://vuejs.org//api/built-in-directives.html#v-html)
> 
> Dynamically rendering arbitrary HTML on your website can be very dangerous because it can easily lead to [XSS attacks](https://en.wikipedia.org/wiki/Cross-site_scripting). Only use `v-html` on trusted content and **never** on user-provided content.


```htmlmixed=
{{ rawHtml }}
<div v-html="rawHtml"></div>
```
![](https://i.imgur.com/v0up1AK.png =300x)

---
## 3. 單次綁定 v-once
v-once 讓資料渲染只有一次，不會做雙向綁定。就算後續變更資料，也不會再重新渲染

```htmlmixed=
<p v-once>{{ name }}在{{ position }}喝牛肉湯</p>
```
![](https://i.imgur.com/RFqfFqp.png =250x)


---
## 4. 進階技巧：表達式

### 4-1. 樣板字面值
可在 {{ }} 中使用樣板字面值

```htmlmixed=
<p>{{ `${name}在${position}吃早餐`}}</p>
```
![](https://i.imgur.com/VABx0Py.png =270x)

### 4-2. 反轉字串
使用 JS 來操作文字

```htmlmixed=
<p>{{ text.split("").reverse().join("") }}</p>
```
![](https://i.imgur.com/z1xYIoR.png =270x)

### 4-3. 綁定方法 (methods)
可以在 {{ }} 中直接呼叫方法中的函式

```htmlmixed=
<p>{{ say("Peggy") }}</p>
```
![](https://i.imgur.com/vVn4HwE.png =270x)

### 4-4. JS 運算
使用基本 JS 進行運算

```htmlmixed=
<p>{{ 1 + 1 }}</p>
```
![](https://i.imgur.com/FB1Mmb6.png =100x)


---
## 5. 其他技巧

### 5-1. 顯示資料狀態
不用常常開啟開發者工具來查看 console 或 Vue 面板，透過 {{  }} 直接把資料顯示在畫面上 

> 後續記得刪除

```htmlmixed=
<p>顯示目前的陣列內容 {{ products }}</p>
```
![](https://i.imgur.com/1lUIEAL.png)


### 5-2. 顯示 "{{ }}"
如果不希望文字進行轉譯，在標籤加上 **v-pre**

```htmlmixed=
<h3>顯示 <span v-pre>{{  }}</span></h3>
<p v-pre>這段文字不會被轉譯：{{ name }}在{{ position }}喝牛肉湯</p>
```
![](https://i.imgur.com/0LBaPGU.png =450x)

### 參考資料＋圖片來源
- [六角 2022 Vue 直播班](https://www.hexschool.com/courses/vue-training.html)

###### tags: `Vue` `六角 2022 Vue 直播班`

### source
- https://hackmd.io/@Codeitaday/S15oCh9Oi
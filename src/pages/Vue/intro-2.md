# 前端框架 Vue (2) 指令觀念前導
###### tags: `六角學院` `六角 2022 Vue 直播班` `Vue`

在圖示左側的 View (html) 的部分，v 開頭為指令，指令可以區分成三大類：資料、渲染方法和事件綁定

## 三大分類
![](https://i.imgur.com/3vzlgwq.png)

### 1. 資料
v-model 和 資料 進行雙向綁定，資料怎麼變，v-model 跟著變，反之亦然
![](https://i.imgur.com/W8B0hvm.png)


### 2. 渲染方法
渲染方法不會操作資料內容，但會將資料反應在畫面上，只會讀不會寫入


### 3. 事件綁定
事件綁定雖然可以直接操作資料，但通常不會這樣使用。
事件綁定用來操作方法 methods，方法再去變更資料，資料再重新渲染
![](https://i.imgur.com/pnBaNtD.png)

---
## 專有名詞

### 指令 (Directives)

v-xxx 開頭的為各式指令
![](https://i.imgur.com/KaUoUjC.png)

### 修飾符 (Modifiers)
> [Vue Modifiers](https://vuejs.org/guide/essentials/forms.html#lazy)
> If you want user input to be automatically typecast as a number, you can add the `number` modifier to your `v-model` managed inputs

透過修飾符讓寫法更為簡便，舉例：.number 讓 v-model 自動將值轉為數值，
![](https://i.imgur.com/JMXaPYv.png)

### 縮寫 (Shorthands)

舉例 1：v-on 縮寫為符號 ＠，縮寫後用法不變

![](https://i.imgur.com/joAADQu.png)

舉例 2：v-bind: 省略 v-bind

```javascript=
<img v-bind:src="./imageSrc" />

// 縮寫
<img :src="./imageSrc" />
```

### 參考資料＋圖片來源
- [六角 2022 Vue 直播班](https://www.hexschool.com/courses/vue-training.html)
- Vue 官網

### source
- https://hackmd.io/@Codeitaday/SylYz8OOs
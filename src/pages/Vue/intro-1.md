# 前端框架 Vue (1) 基本介紹
###### tags: `Vue` 
學習 Vue 之前先來了解什麼是 [關注點分離](https://hackmd.io/WdavUDYASGabgsd7qr4X0A)

Vue 是透過 MVVM 的機制來處理關注點分離，所以是以**資料狀態**操作**畫面**

View(視窗) <---Binding---> ViewModel(資料繫結器) <---> Model(資料狀態)

![](https://i.imgur.com/xFXWpkx.png)


原始碼會加上 v-model 來綁定資料狀態
![](https://i.imgur.com/tlFF5dO.png)


---
不需要自己寫渲染

資料有內容時，直接寫入到畫面中
![](https://i.imgur.com/3JDBMpv.png)


---
生命週期：
在特定時間點修改文字時，只要寫在生命週期內，生命週期會調整資料，資料會直接寫在畫面(同上)
![](https://i.imgur.com/R8AxJ1a.png)


---
事件觸發：
觸發後更新資料，透過 v-model 的機制，畫面也會一起更新

![](https://i.imgur.com/8BU5TsQ.png)

---

## 範例 1

> 在 html 檔中撰寫

```javascript=
<div id="app">{{counter}} {{text}}</div>

<script>
  Vue.createApp({
    data() {
      return {
        counter:10,
        text: "哈囉",
      };
    },
  }).mount("#app");
</script>
```

## 範例 2

[Vue 起手常見結構](https://hackmd.io/KvuHLB9SSXWG7obsLWG-Tw)

### 參考資料＋圖片來源
- [六角 2022 Vue 直播班](https://www.hexschool.com/courses/vue-training.html)
- [Vue 出一個電商網站](https://www.udemy.com/course/vue-hexschool/) 

### source
- https://hackmd.io/@Codeitaday/BJLd1aUOi

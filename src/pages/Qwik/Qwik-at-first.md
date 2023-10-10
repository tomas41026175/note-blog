# 顯示標題和標籤 Qwik.js 初識
### 提升網頁效能
---
## Hydration(水合作用) : 本質上是一種浪費。
### 一般框架
![](https://i.imgur.com/GbC85Za.png)
- SSR 
    - => 伺服器先處理所有邏輯，完成後傳至前端，前端需要再跑一次server做的事情。
    - =>
- 框架的問題 : 需要再跑一次整個網頁的邏輯
    - 造成TTI很長，難以下降。
- Serialization(序列化)
    - 從後端完成SSR redering後，把取得過的api存成JSON檔案，傳至前端。 

### Qwiz
- Resumability(可恢復性) = resume app
- SSR + CSR 綜合
- 狀態以註解的方式保存
- 擁有Lazy loading的特性(其中一種)
    - Js
    - html
    - 做甚麼事情，才下載甚麼code
- 優勢
    - ClientSide 接續 ServerSide的工作
    - 0 Hydration
    - TTI非常短
    - 只下載必要的JS
![](https://i.imgur.com/JkOeMcI.png)

### 比較
![](https://i.imgur.com/Nc4lSZM.png)


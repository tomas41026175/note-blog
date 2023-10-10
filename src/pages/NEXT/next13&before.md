 Next.js 本身是想解決更容易實作 SSR 與 SSG 的方式
 Next.js 的優勢是在前端頁面的優化，建構像是 landing page、blog、產品介紹頁面等等
 SEO 的優化


- Turopack

- page router => app router

- app-router實現約定式路由
  - layout :布局 不會被刷新
  - template : 同資料夾內的共用區塊 會被刷新
  - page : 主畫面
  - loading : 在渲染過程中的畫面。
  - error : 請求失敗的畫面，ErrorBoundary from React
  - 以上只有page是必須的
  - 可使用資料夾對資料分組

- React sever components
  - **app目錄下的components都默認為RCS**
  - CSR會將所有資料丟進前端
  - SSR : data從sever拉，通過```renderToString```方法將StringDOM export到瀏覽器，**React不能管理已存在的DOM**，需要重新執行一遍 => Hydrate 過程會造成client的code量增加。
  - Next12中的getServerSideProps就是SSR

- React 18
  - Streaming HTML

  - Selective Hydration
    - 使用```<Suspense>``` API，將需要延遲載入的component包起來。
    ```
    <Suspense fallback={<BeforePrepare/>}>
        <PreparingComponent/>
    </Suspense>
    ```
    - 表示在PreparingComponent準備好之前先顯示BeforePrepare
    - 沒有順序的問題
    - 有多個區塊進行hydrating時，會照DOM順序進行，**若是**user點擊了還沒完成的部分，react會優先進行此區塊，並記錄click事件，當hydrate完成後自動點擊一次。

- 
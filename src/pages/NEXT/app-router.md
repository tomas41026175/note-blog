# Next.js 13 的 app 目錄模式功能梳理
------
- 舊的目錄模式幾個痛點：
  - pages 目錄的 js 文件全都會當成頁面文件，導致組件不能寫在 pages 目錄下，使用起來不符合大部分人的代碼組織習慣，雖然有一些方法可以處理，但仍然是一個不友好的點。
  - 幾個入門級的 api ，比如 getInitialProps/getServerSideProps/getStaticProps 等等方法的使用並不是那麽簡單，不去深入了解渲染模式，對於 Next.js 初學者來說，不容易理解。
  - 服務端渲染和客戶端渲染的代碼有時候耦合會太深，有時候不好分清楚代碼是在服務端渲染時執行的還是在客戶端渲染時執行的，也容易出現一些錯誤，導致頁面首次渲染時出現 hydrate 異常，這一點和第 2 點也有一些關系。

- Next.js app 目錄模式相對於舊模式的功能列表說明：
  - 完善的工程化機制：變化較少
  - 良好的開發和構建性能：變化較少
  - 智能文件路由系統：app 目錄模式完全解決了痛點 1 描述的問題，且極大的增強了代碼的組織能力。
  - 多種渲染模式來保證頁面性能體驗：使用更加簡單的方式讓開發者來進行數據請求，且提供了數據緩存方式，以便於更方便的實現多種渲染模式，解決痛點 2 和 3 描述的問題，且帶來了更好的客戶端性能（盡量減少客戶端需要加載的JS資源）。
  - 可擴展配置：提供了更加友好的配置方式，增強工程配置能力。
  - 提供其他多方面性能優化方案：變化較少
  - 提供性能數據，讓開發者更好的分析性能：變化較少
  - 提供的其他常用功能或者擴展：供了更多更好的擴展方式。

其中最核心的變化就是第3、4點。

## 智能文件路由系統
- 以前的 pages 模式太過於籠統，導致了代碼組織不符合習慣，而 app 模式則更加靈活，制定了更加完善的規範，讓開發者組可以更好的組織代碼。
app 模式主要從以下三個方面來擴展和調整文件路由系統：
    - 約定頁面相關內容
    - 平行路由和插槽功能
    - 約定 web api 路由實現

還有個 攔截路由 的功能路由定義方式，經過測試感覺這個暫時還有一些問題，本篇文章暫不涉及。
當前默認還是 pages 模式，可在配置中開啟 app 模式：
```
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig
```

- 約定頁面相關內容
  - 指約定一個頁面需要有一個單獨的目錄，目錄下約定以下文件：

  - page.js - 頁面組件（app/page.js代表路由為 / 的頁面，其實就類似於取代 index.js），有 page.js 才能表明該約定文件路由是一個頁面
  - layout.js - 布局組件，切換路由時保留狀態，不重新渲染。
  - template.js - 模版組件，和 layout 類似，但切換路由時會重新渲染，不保留狀態。
  - loading.js - 加載組件，就是使用 Suspense 組件包裹 Page 組件，在 Page 組件渲染返回內容之前顯示加載組件。
  - error.js - 錯誤文件，頁面渲染異常的時候顯示的組件。
  - not-found.js - 頁面404組件，只在 app 目錄下第一級目錄生效，存在時只有根 layout 生效。

除了 not-found.js ，其他的約定組件則對app下所有目錄生效。
這些將在合適的時機按照一定順序組合顯示到頁面上，比如下面這樣一個目錄結構：
```
    app
    ├── features
    │   ├── metadata
    │   │   └── page.tsx
    │   ├── layout.tsx
    │   ├── template.tsx
    │   ├── loading.tsx
    │   └── error.tsx
    ├── page.tsx
    ├── layout.tsx
    ├── template.tsx
    ├── loading.tsx
    ├── error.tsx
    └── not-found.tsx
```

路由為 / 頁面會組合成這樣的代碼結構：
```
    <Layout>
        <Template>
            <ErrorBoundary fallback={<Error />}>
                <Suspense fallback={<Loading />}>
                    <Page />
                </Suspense>
            </ErrorBoundary>
        </Template>
    </Layout>
```

路由為 /features/metadata 頁面的代碼結構：
```
<Layout>
    <Template>
        <ErrorBoundary fallback={<Error />}>
            <Suspense fallback={<Loading />}>
                <Layout>
                    <Template>
                        <ErrorBoundary fallback={<Error />}>
                            <Suspense fallback={<Loading />}>
                                <Page />
                            </Suspense>
                        </ErrorBoundary>
                    </Template>
                </Layout>
            </Suspense>
        </ErrorBoundary>
    </Template>
</Layout>
```

如果訪問不存在的路由，則代碼結構為：
```
<Layout>
    <NotFound />
</Layout>
```

- 平行路由和插槽功能
  - 也就是多個平行的路由可以在同一個頁面當成組件來顯示，提升代碼的組織能力。
  - 使用方式為：使用 @ 開頭的目錄名下面的文件，將會自動注入到 Layout 組件的 props 中。
  - 比如有一個數據面板頁面，頁面分為了兩個模塊：用戶數據模塊、性能數據模塊

```
    app
    ├── dashboard
    │   ├── @userInfo  // 用户行为数据模块
    │   │   ├── devices  // 用户设备信息
    │   │   │   └── page.tsx
    │   │   ├── locations  // 用户地理位置分布
    │   │   │   └── page.tsx
    │   │   ├── default.tsx
    │   │   └── page.tsx
    │   ├── @performance  // 性能数据模块
    │   │   ├── app  // app 性能数据
    │   │   │   └── page.tsx
    │   │   ├── web  // web性能数据
    │   │   │   └── page.tsx
    │   │   ├── default.tsx
    │   │   ├── page.tsx
    │   │   └── default.tsx
    │   └── layout.tsx
    ├── page.tsx
    └── layout.tsx
```

app/dashboard/layout.tsx code：
```
import Link from "next/link";

export default function Layout({ children, userInfo, performance }: any) {
  return (
    <>
      {children}
      <h2>用戶行為數據</h2>
      {/* 導航 */}
      <div>
        <Link href={"/dashboard/devices"}>設備信息 </Link>
        <Link href={"/dashboard/locations"}>地理位置</Link>
      </div>
      <div className="userInfo">{userInfo}</div>
      <br />
      <h2>性能數據</h2>
      {/* 導航 */}
      <div>
        <Link href={"/dashboard/app"}>app 性能數據</Link>
        <Link href={"/dashboard/web"}>web 性能數據</Link>
      </div>
      <div className="performance">{performance}</div>
    </>
  );
}
```
- 其實也就是把路由當成組件來組織，如果你喜歡這種模式，那麽可以這樣使用，如果不喜歡，也可以自己單獨寫成組件，這樣算是新增了一種規範，且省略了不少 import 代碼。

  - 從上面的代碼可以看出來，路由是忽略插槽的，也就是 app/dashboard/@performance/app 路由為：/dashboard/app。

  - 因此兩個插槽內部的目錄名需要不一樣，否則切換同一個路由的時候另外一個也會變化，但如果想同步切換的話，特意寫成一樣也算是一種運用方式。
  但這種插槽方式有一些問題，而且都是使用路由進行定位顯示的組件，並行多個插槽會導致切換到某個插槽路由的後，如果刷新頁面，那麽只會定位到一個插槽的位置，其他路由的插槽會定位不到而導致整個頁面顯示 404。

  比如在頁面先後點擊了 設備信息 和 app 性能數據 ，頁面會同時顯示 /dashboard/page.tsx 、 /dashboard/@performance/devices/page.tsx 和 /dashboard/@userInfo/app/page.tsx 的內容。但刷新後，因為這時路由是 /dashboard/app ，因此只會顯示 /dashboard/@userInfo/app/page.tsx 的內容，這里可以驗證一個點，children 也是一個插槽，/dashboard/page.tsx 代指的就是 layout 組件里面的 children。

  - 這時就是 default.tsx 發揮作用的時候了，當請求匹配不少就會讀 default.tsx，而不會讀取 page.tsx，但默認沒有只路由的時候顯示的又是 page.tsx ，比如這里訪問 /dashboard 路由，因此如果 default.tsx 和 page.tsx 內容需要保持一致時，只保留 default.tsx，去除 page.tsx就行，沒有 default.tsx 頁面匹配不到時會 404，沒有 page.tsx 卻不會，可以說算是一個bug，不知道後面會不會修覆。

  - 還有一個注意點，插槽里面不能有自己的 layout 組件或者其他組件，但插槽內部的頁面是可以有的。

- 約定 web api 路由實現
 
  - 約定 route.js 為 api 文件，和 page 類似，即 app/test/api/user/route.js 代表的web接口為 /test/api/user，可以定義 GET 、POST、PUT、PATCH、DELETE、HEAD 和 OPTIONS 請求方式。如果調用了未定義的請求方式，則返回 405，表示不支持該請求方式。
  ```
    import { NextResponse, type NextRequest } from 'next/server';

    export async function GET(req: NextRequest, { params }: { params: Record<string, string | string | undefined[]> }) {
    const res = await fetch('https://data.mongodb-api.com/...', {
        headers: {
        'Content-Type': 'application/json',
        'API-Key': process.env.DATA_API_KEY,
        },
    });
    const data = await res.json();

    return NextResponse.json({ data })
    }

    export async function POST(req: NextRequest, { params }: { params: Record<string, string | string | undefined[]> }) {
    // ...
    return NextResponse.json({
        // ...
    })
    }
  ```
  route.js 和 page.js 沖突，當有 page.js 時，route.js 就不會生效。
  注意這里的 web api 路由和之前的 pages/api 是不一樣的定義，雖然有些相似，但差別還是挺大的，如果使用了 web api 路由，則盡量不用再使用 pages/api，不過當前 pages/api 路由還沒有支持 revalidate 下發指令的功能，後續也許會支持。

## 多種渲染模式來保證頁面性能體驗
- app模式來處理渲染模式會比pages目錄模式簡單很多，主要是因為新的模式對js代碼的管理方式進行了變更：

- 默認的js文件都只會運行在服務端，不會出現在客戶端，如果需要在客戶端進行交互的組件，那麽需要在 js 文件最頂部添加 "use client" 來標識，表明代碼需要在客戶端運行，這時候這部分代碼才會出現在客戶端。

也就是代碼默認只在服務端，那怎麽實現多種渲染模式呢？

- SSG：頁面默認就是 SSG
- CSR：在使用 "use client" 的客戶端組件中進行請求數據，也是基於SSG，然後在客戶端 hydrate 後進行請求數據更新頁面內容。
- SSR：服務端組件聲明為異步組件，也就是 async 函數組件，且數據請求關閉緩存，也就是fetch請求時第二個參數中的cache字段設置為 no-store 、 no-cache 或者 設置revalidate 為 0 的時候，才會是動態服務端渲染。
ISR：在請求中設置 revalidate ，或者在 page.js 中設置 revalidate :export revalidate = 60 60秒進行增量靜態化，也可以繼續使用 pages/api/revalidate 的指令方式，需要注意還是需要寫在 pages 目錄。

- 不了解渲染模式的可以去看看 理解前端基礎渲染模式｜CSR、SSR、同構、靜態化
- 其實 app 模式中不再需要根據一些默認導出函數來決定函數的渲染方式，但也需要注意頁面到底使用的是哪種渲染模式，才能對整個應用的頁面的性能有一定的把控。

## Reference
- https://juejin.cn/post/7221162775074734135
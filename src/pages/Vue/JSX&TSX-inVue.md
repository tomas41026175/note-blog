# 在Vue中使用JSX & TSX

---
- 安裝插件
    ```
    yarn add @vitejs/plugin-vue-jsx -D
    ```
    ```
    //vite.config.ts
    
    import vueJsx from "@vitejs/plugin-vue-jsx";

    export default defineConfig({
      plugins: [
        vueJsx(),
      ]
    })
    ```
1. 插值
    - jsx/tsx 的插值與 vue 模板語法中的插值一樣，支持有效的 Javascript 表達式，比如：a + b, a || 5...
    ```
    // vue3模板語法
    <span>{{ a + b }}</span>

    // jsx/tsx
    <span>{ a + b }</span>
    ```
2. class 與 style 綁定
    - class 類名綁定有兩種方式，使用模板字符串或者使用數組
    - 使用模板字符串兩個類名之間使用空格隔開
    ```
    // 模板字符串
    <div className={`header ${ isBg ? 'headerBg' : '' }`}>header</div>
    //數組
    <div class={ [ 'header', isBg && 'headerBg' ] } >header</div>
    ```
3. 條件渲染
    - jsx/tsx 中只保留了 v-show指令，沒有 v-if指令
    - 使用 if/else和三目表達式都可以實現
   ```
       setup() {
           const isShow = false
           const element = () => {
               if (isShow) {
                   return <span>我是if</span>
               } else {
                   return <span>我是else</span>
               }
           }
           return () => (
               <div>
                   <span v-show={isShow}>我是v-show</span>
                   {
                       element()
                   }
                   {
                       isShow ? <p>我是三目1</p> : <p>我是三目2</p>
                   }
               <div>
           )
        }
   ```
4. 列表渲染
    - jsx/tsx 中也沒有 v-for指令，需要渲染列表我們只需要使用 Js 的數組方法 map 就可以了
    ```
    setup() {
           const listData = [
               {name: 'Tom', age: 18},
               {name: 'Jim', age: 20},
               {name: 'Lucy', age: 16}
           ]
           return () => (
               <div>
                   <div class={'box'}>
                       <span>姓名</span>
                       <span>年齡</span>
                   </div>
                   {
                       prop.listData.map(item => {
                           return <div class={'box'}>
                               <span>{item.name}</span>
                               <span>{item.age}</span>
                           </div>
                       })
                   }
               </div>
           )
        }
    
    ```
5. 事件處理
    - 綁定事件使用的也是 單大括號 {}，不過事件綁定不是以 @爲前綴了，而是改成了 on，例如：click 事件是 onClick
    - 如果需要使用事件修飾符，就需要藉助withModifiers方法啦，withModifiers 方法接收兩個參數，第一個參數是綁定的事件，第二個參數是需要使用的事件修飾符
    ```
    setup() {
            const clickBox = val => {
                console.log(val)
            }
            return () => (
                <div class={'box1'} onClick={() => clickBox('box1')}>
                    <span>我是box1</span>
                    <div class={'box2'} onClick={() => clickBox('box2')}>
                        <span>我是box2</span>
                        <div class={'box3'} onClick={withModifiers(() => clickBox('box3'), ['stop'])}>我是box3</div>
                    </div>
                </div>
            )
        }
    ```
6. v-model
    - jsx/tsx 有支持 v-model 語法
    ```
    // 正常寫法
    <input v-model="value" /> // vue
    <input v-model={value} /> // jsx

    // 指定綁定值寫法
    <input v-model:modelValue="value" /> // vue
    <input v-model={[value,'modelValue']} /> // jsx

    // 修飾符寫法
    <input v-model:modelValue.trim="value" /> // vue
    <input v-model={[value,'modelValue',['trim']]} /> // jsx
    ```
    
7. slot 插槽
    - 定義插槽 
        - jsx/tsx 中是沒有 slot 標籤的，定義插槽需要使用{}或者使用renderSlot函數
        - setup 函數默認接收兩個參數 1. props 2. ctx 上下文 其中包含 slots、attrs、emit 等
    ```
    import { renderSlot } from "vue"
        export default defineComponent({
            // 從ctx中解構出來 slots
            setup(props, { slots }) {
                return () => (
                    <div>
                        { renderSlot(slots, 'default') }
                        { slots.title?.() }
                    </div>
                )
            }
        })
    ```
    - 使用插槽
        - 可以通過 v-slots 來使用插槽
        ```
        import Vslot from './slotTem'
        export default defineComponent({
            setup() {
                return () => (
                    <div class={'box'}>
                        <Vslot v-slots={{
                            title: () => {
                                return <p>我是title插槽</p>
                            },
                            default: () => {
                                return <p>我是default插槽</p>
                            }
                        }} />
                    </div>
                )
            }
        })
        ```
    8. 使用 tsx 實現遞歸組件 - 菜單
        - 主要功能就是根據路由信息自動取生成菜單
        ![](https://i.imgur.com/gHsZDT1.png)
        - 如果需要控制權限，在路由信息的meta中添加對應的參數，然後在menuItem中自行控制
        ```
        // index.tsx

        import { routes } from '@/router/index'
        import MenuItem from './menuItem'
        import './index.scss'

        export default defineComponent({
            setup() {
                const isShowRoutes = computed(() => {
                    return routes
                })
                const currentPath = computed(() => {
                    return useRoute().path
                })

                return () => (
                    <el-scrollbar class={`menuContent`}>
                        <el-menu
                            default-active={currentPath.value}
                            mode="vertical"
                            class={'menu'}
                        >
                            {
                                isShowRoutes.value.map((route) => {
                                    return <MenuItem item={route} key={route.path}></MenuItem>
                                })
                            }
                        </el-menu>
                    </el-scrollbar>
                )
            }
        })
        ```
        ```
            // menuItem.tsx

        import { defineComponent, PropType } from 'vue'
        import { RouteRecordRaw } from 'vue-router'
        import './index.scss'

        const MenuItem = defineComponent({
            name: 'MenuItem',
            props: {
                item: {
                    type: Object as PropType<RouteRecordRaw>,
                    required: true
                }
            },
            setup(props: { item: any }) {
                const router = useRouter()
                const jumpRoute = (path: string) => {
                    router.push(path)
                }
                return () => {
                    let { item } = props
                    if (item.children) {
                        const slots = {
                            title: () => {
                                return <div>
                                    <span>{item.meta.title}</span>
                                </div>
                            }
                        }
                        return <el-sub-menu index={item.path} v-slots={slots}>
                            {item.children.map((child: RouteRecordRaw) => {
                                return <MenuItem item={child} key={child.path}></MenuItem>
                            })}
                        </el-sub-menu>
                    } else {
                        return <el-menu-item index={item.path} onClick={() => jumpRoute(item.path)}>{item.meta.title}</el-menu-item>
                    }
                }
            }
        })

        export default MenuItem
        ```
- reference
    - https://www.readfog.com/a/1684318054039785472
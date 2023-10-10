# Vue2跟Vue3的差異

###### tags: `Vue`


- Vue3
    - 不支援ES6以前 
    - 使用TypeScript重新撰寫
    - 提升速度
    - 透過es6 module將不需要使用的module刪除
    - **新的API Composition**
    - 減少一次性的code片段 tree shacking
    - 3.2版本後
        - ```<script setup>```
        - ```v-bind() in <style>```
- ## Composition API
- option API(Vue2) vs Composition API(Vue3)
- ![](https://i.imgur.com/jgkMKYi.png)
    - 涵蓋以下API的總稱
        - Reactivity API(響應式API): e.g. ref(), reactive()&computed
            - 使用const進行變數宣告，以避免額外錯誤
            - ref()接受所以型別
            - reactive()僅接收物件&陣列
                ```
                setup(){
                    const count = ref(0)  //透過.value存取數據
                    
                    const state = reactive({count:0}) //會監控對象屬性
                    
                    const refIncrement = () =>{
                        count.value++ //需要加上.value才能存取
                    }
                    
                    const reactiveIncrement = ()=>{
                        state.count++ //這邊可以直接使用count
                    }
                    return {
                        count,
                        state,
                        refIncrement,
                        reactiveIncrement
                    }
                }
                ```
            - computed()
                - 偵測到value改變會進行渲染
                - 接收的參數若是為響應式的時候會re-render
                ```
                setup(){
                    const firstName = ref('')
                    const lastName = ref('')
                    
                    const fullName = computed(()=>{firstName.value + lastName.value})
                    return {
                    firstName,
                    lastName,
                    fullName
                    }
                }
                ```
        - Lifecycle Hooks: e.g onMounted() & onUnmounted()
        ```
        setup(){
            onBeforeMount(()=>{
                console.log('onBeforeMount',rootElement.value)
            })
            onMounted(()=>{
                console.log('onMounted',rootE;ement.value)
            })
            onBeforeUnment(()=>{
                console.log('onBeforeUnment')
            }).
            onUnmented(()=>{
                console.log('onUnmounted')
            })
        }
        ```
         -   dependency Hook(相依性注入)
             - 子在父層資料往下時攔截
                 ```
                 //setup
                 //父層使用provide
                 provide('msg',msg)
                 //子層使用inject接收參數
                 const msg = inject('msg')
                 
                 return{
                    msg,default
                    }
                 ```
        - Dependency Injection: provide() & inject()
    - 在組件中以Setup作為進入點
- setup
    - 包含data & method
    ```
    //$emit為子層傳遞資料給父層的method
    Vue2:
    =>
    data(){
        return{
            title: "hello world"
        }
    },
    method:{
        increment(){
            this.$emit('increment')
        }
    }
    
    Vue3:
    =>
    emits:['increment'] //Vue3 中需要先宣告才能在下方使用emit
    setup(props,context){
        
        //Composisiton API
        const title = ref('hello world')
        const increment = () =>{
            context.emit('increment')
        }
        return {
            title,increment
        }
    }
    ```
- composable(可組合)
    - vue2前使用mixin
        - 造成命名衝突
        - 難以維護
    - 將功能獨立成一份新的js
    ```
    //將component.vue中的功能部份的js拆分
    import {ref,onMounted,onUnmounted} from 'vue'
    export default useMouseTracker() =>{
        const x = ref(0)
        const y = ref(0)
        
        const update = (event)=>{
            x.value = event,pageX
            y.value = event.pageY
        }
        onMounted(()=>window.addEventListener('mousemove',update))
        onUnMounted(()=>window.addEventListener('mousemove',update))
        return {
            x,
            y
        }
    }
    ```
    - ## Vue3.2後的默認寫法
        - ### ```<script setup>```
            - script setup被視為一個函數整體
            - script setup中只能包含以下幾種類型的code
                - 宣告變數/常數
                - 導入其它module
                - 定義props
                - emits
                - slots
                - 定義component的上下文對象(context)
                    - context.attrs: 包含所有非 prop 的组件特性
                    - context.slots: 包含所有插槽的名称和对应的内容
                    - context.emits: 用于触发自定义事件的函数
                    - context.expose:  用于将组件的属性或方法暴露给父组件的函数
            - 3.2之前的vue3
            ![](https://i.imgur.com/F0TTh9v.png)
            - 3.2之後的vue3
            ![](https://i.imgur.com/BSECQJp.png)
            
    - ## v-bind in style(3.2之後)
        - ### ```<style scoped>```
            ![](https://i.imgur.com/9mC1UPx.png)
    - Fragment
         ![](https://i.imgur.com/d07o2Fu.png)
        - 需要使用v-bind綁定屬性，不然會噴error
    - Teleport
        - 當我需要一個彈窗，但是header跟footer都是z-index:max時，使用teleport可以達成需求
        - 機制:
            - 改變渲染位置，可custom位置以及資料筆數
    - Minor Changes
        - filter移除(使用computed取代)
        - v-if優先權 > v-for
        - Option API新增emits
        - ...等
    - 生態系的變化
        - Vue CLI =>Vite
            - Vite speed > Vue CLI
            - Vue CLI基於webpack，會先掃過所有的資料。
            - Vite會等需要的時候再載入
         ![](https://i.imgur.com/4934jEJ.png)
        - Vuex => Pinia
        ![](https://i.imgur.com/HiSL5Vk.png)
        - Vetur => Vue Language Features(Volar)
            - 語法輔助套件
    
    
    
    
---
- reference:
- https://docs.google.com/presentation/d/1y2SA0cZ9FFQpEmBXkFj7wJTDIUKdyIYOSE95UfRR7SI/edit#slide=id.gf3b93d506e_0_0Vue2 / Vue3 生命週期差異
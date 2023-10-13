# Web component - 奶綠茶

My Sence > method

## 現階段常用技術

web assembly - 效能最佳化 Rust / C++
graph QL
webpack vite
test

## why web-component

- vanila JS's access too strong
- 降低框架替換成本
- use web-component to control scope
- make code in one module
- easy to find

to many DOM => canvas

### But

ie not support

## How to use

constructor
super
1 connectedCallback
2 disconnectedCallback
3 \*important attributeChangeCallback(name,oleValue,newValue)
static get

## life cycle

create
removed

constructor=> create

change attribute to control component

## shadow DOM

js have problem same value

## css still hame same name

this.attachShadow({mode:open})
<!-- if false window can't control shadow -->
```
<mt-shadow>
<h1>temp</h1>
<style>
h1{color:red;}</style>
</mt-shadow>
```

### window control 
use ::part change shadow style
```
<style></style>
```


## web component with react ( web component in react)
```
const temp = () =><h1>nidq</h1>
"name",temp
```
astro js

### shadow dom + slot
react - children
vue - slot

### use define to create element

## micro frontend 

### what is mf

diff project want to use same header with diff skill

iframe -  bad effect 效能不好
federation plugin - only (webpack vite)
  - 抽出共用package
  - 要改架構

web component - shadow-dom
概念：
封裝於js檔案中。

## web-component + petite-vue
only 6kb 
not virtual DOM
### why?
解決大量使用querySelector
data binding is so good

```
v-scope
<div>
{{count}}
</div>
```
用web component 限制 scope
petite - vue控制DOM & data binding
十分適合SSR
走API 使用React 解決

component 顆粒度
橫向溝通 : 
window - addEventListener & TS
event library

## benefit 
- scope base
- shadow dom
- use in
  - ad
  - simple scene
- base case
  - have mean
- 獨立存在


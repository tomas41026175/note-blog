# TypeScript 配置文件
###### tags: `TypeScript`

- 由於TS和ES6一樣不被瀏覽器所支援，所以需要轉為目標版本
- TS中有多種編譯器，CRA默認使用babel-loader

```
{
  "compilerOptions": {
    "noImplicitAny": false, // 不須聲明any類型
    "target": "es5", //目標JS版本 若不是給瀏覽器 可用ES6
    "lib": [
      "dom", //
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true, //可以混合編寫JS
    "skipLibCheck": true,
    "esModuleInterop": true, //
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true, //作為單獨模塊使用
    "noEmit": true, //err時不顯示JS警告代碼
    "jsx": "react-jsx" //允許支持react
  },
  "include": [
    "src"
  ]
}

```

- 在JS文件中添加TS支援
    - 使用npm安裝 ```--save typescript @types/node @types/react @types/react @types/react-dom @types/jest```
# useContext

## 介紹

可以透過 useContext 獲取來自父層的資料。

## 流程

-   父層：

建立要傳遞的數據：首先，你會定義一個數據或狀態。
透過 createContext 建立 context：使用 createContext 函數並傳入一個預設值。
加入 Provider 傳遞 value：你將使用剛建立的 context 的 Provider 組件包裹你的子組件，並將要傳遞的數據設為其 value 屬性。

-   子層：

import 被傳遞的 context：在子組件中，你首先需要導入你從父組件傳遞的 context。
使用 useContext 取得父層傳遞的 context 資料：使用 useContext hook 並將你的 context 作為參數傳入，這樣你就可以獲得父組件傳遞的數據。

## 使用方式

//父層 or ThemeProvider.tsx

```ts
import React, { createContext, useState, useContext } from 'react';

// 建立 context
const ThemeContext = createContext();

function ThemeProvider({ children }) {
    // 建立要傳遞的數據
    const [theme, setTheme] = useState('light');

    return (
        // 使用 Provider 傳遞 value
        <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
    );
}

export { ThemeProvider, ThemeContext };
```

//子層

```ts
import React from 'react';
import { ThemeContext } from './path-to-your-theme-provider-file';

function ChildComponent() {
    // 使用 useContext 取得父層傳遞的 context 資料
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div>
            <p>Current theme: {theme}</p>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                Toggle Theme
            </button>
        </div>
    );
}

export default ChildComponent;
```

//App

```ts
import React from 'react';
import { ThemeProvider } from './path-to-your-theme-provider-file';
import ChildComponent from './path-to-your-child-component-file';

function App() {
    return (
        <ThemeProvider>
            <ChildComponent />
        </ThemeProvider>
    );
}

export default App;
```

## 會遇到的問題

-   型別
    由於前面定義的時候，包含了 undefinded

```ts
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
```

使用的時候可以透過 as 進行斷言 告知 ts 我們獲取的資料是 ThemeContextType

```ts
const { theme, setTheme } = useContext(ThemeContext) as ThemeContextType;
```

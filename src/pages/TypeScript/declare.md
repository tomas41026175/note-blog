# TS - 宣告Array & any & void差異 & 聯合類型
## 宣告Array方式
- 宣告array不用 p:array 直接使用[]即可
- 宣告其中元素的類型 直接寫在[]前面

```
let arr1: number[] = [10, 20, 30];
```

- 宣告Array泛型
```
let arr2: Array<number> = [10, 20, 30];
```

# any / void差異

- any & void差異
- any表示任意類型
- void表示空value = 沒有return value
- void只能用於undefined

# 聯合類型
- 變數賦值前可以使用宣告的類型方法

```
let temp: boolean | number | string = true;

// ex:
temp.toString();
```
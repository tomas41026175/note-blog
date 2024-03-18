# 變數 & 常數宣告

## 變數

1. var

- 單一變數

```go
var variableName type
```

- 宣告複數變數

```go
var vname1, vname2, vname3 type
```

- 宣告變數 & 初始化

```go
var variableName type = value
```

- 初始化複數變數

```go
var vname1, vname2, vname3 type = v1, v2, v3
```

- 忽略型別宣告

```go
var vname1, vname2, vname3 = v1, v2, v3
```

- 簡易宣告

* `_`下底線表示放棄此處

```go
_, b := 34, 35
```

所以這邊實際上只有 `b = 35`

note: Go 會對於宣告後沒使用到的變數進行報錯

## 常數

這邊和 JS 一樣，都是使用 `const` 進行宣告

```go
const constantName = value;
const Pi float32 = 3.1415926;
```

```go
const Pi = 3.14;
const i = 10000;
const MaxThread = 10;
const prefix = "testString"
```

- Go 常數和一般程式語言不同的是，可以指定相當多的小數位數(例如 200 位)， 若指定給 float32 自動縮短為 32bit，指定給 float64 自動縮短為 64bit
- 詳情參考:https://go.dev/ref/spec#Constants

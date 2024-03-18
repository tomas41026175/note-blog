# intro

## key word List

```
break    default      func    interface    select
case     defer        go      map          struct
chan     else         goto    package      switch
const    fallthrough  if      range        type
continue for          import  return       var
```

## Hello world

- Golang 原生支援 UTF-8 所以可以直接輸出所有字元

```Go
// helloworld.go
package main

imoport "fmt"

func main(){
    fmt.Printf("Hello world\n")
}

// output
Hello world
```

## package

用法: `package <pkgName>`

可透過宣告 `package main`表示這是一個可以獨立執行的套件(檔案)

除了 main 之外的其餘套件都會產生 `*.a` 的檔案(套件檔案)並且被放置於`$GOPATH/pkg/$GOOS_$GOARCH`下方

- 每一個可獨立執行的 Go 程式，必定包含一個 package main，在這個 main 套件中必定包含一個入口函式 main，而這個函式既沒有參數，也沒有回傳值。

Ques:

- 什麼是 package ?
  - 透過不同的 package 可以為我們的檔案進行模組化管理。
- main package 最主要的特徵是甚麼 ?
  - func main 不會有回傳值 & 參數

## 變數宣告

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

##

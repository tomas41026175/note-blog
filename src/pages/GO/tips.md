# GO Tips

## 分組宣告

- 用於同時宣告多個常數、變數、多個套件時。

```go
import "fmt"
import "os"

const i = 100
const pi = 3.1415
const prefix = "Go_"

var i int
var pi float32
var prefix string
```

to

```go
import(
    "fmt"
    "os"
)

const(
    i = 100
    pi = 3.1415
    prefix = "Go_"
)

var(
    i int
    pi float32
    prefix string
)
```

## iota 列舉

Go 裡面有一個關鍵字 iota，這個關鍵字用來宣告 enum 的時候採用，它預設開始值是 0，const 中每增加一行加 1：

```go
package main

import (
    "fmt"
)

const (
    x = iota // x == 0
    y = iota // y == 1
    z = iota // z == 2
    w        // 常數宣告省略值時，預設和之前一個值的字面相同。這裡隱含的說 w = iota，因此 w == 3。其實上面 y 和 z 可同樣不用"= iota"
)

const v = iota // 每遇到一個 const 關鍵字，iota 就會重置，此時 v == 0

const (
    h, i, j = iota, iota, iota //h=0,i=0,j=0 iota 在同一行值相同
)

const (
    a       = iota //a=0
    b       = "B"
    c       = iota             //c=2
    d, e, f = iota, iota, iota //d=3,e=3,f=3
    g       = iota             //g = 4
)

func main() {
    fmt.Println(a, b, c, d, e, f, g, h, i, j, x, y, z, w, v)
}
```

> 除非被明確的設定為其它值或 iota，每個 const 分組的第一個常數被預設設定為它的 0 值，第二及後續的常數被預設設定為它前面那個常數的值，如果前面那個常數的值是 iota，則它也被設定為 iota。

## Go 程式設計的一些規則

1. 大寫字母開頭的變數是可匯出的，也就是其它套件可以讀取的，是公有變數；小寫字母開頭的就是不可匯出的，是私有變數。
2. 大寫字母開頭的函式也是一樣，相當於 class 中的帶 public 關鍵詞的公有函式；小寫字母開頭的就是有 private 關鍵詞的私有函式。

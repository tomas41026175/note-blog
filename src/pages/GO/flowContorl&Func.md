# flowContorl & Function

## 流程控制

Go 中流程控制分三大類別：條件判斷，迴圈控制和無條件跳轉。

### if

- 在`go`中不需要使用括號

```go
if x > 10 {
    fmt.Println("x is greater than 10")
} else {
    fmt.Println("x is less than 10")
}
```

Go 的 if 條件判斷語句裡面允許宣告一個變數，這個變數的作用域只能在該條件邏輯區塊內，其他地方就無法使用，如下所示

```go
// 計算取得值 x，然後根據 x 回傳的大小，判斷是否大於 10。
if x := computedValue(); x > 10 {
    fmt.Println("x is greater than 10")
} else {
    fmt.Println("x is less than 10")
}

//這個地方如果這樣呼叫就編譯出錯了，因為 x 是條件裡面的變數
fmt.Println(x)
```

多個條件

```go
if integer == 3 {
    fmt.Println("The integer is equal to 3")
} else if integer < 3 {
    fmt.Println("The integer is less than 3")
} else {
    fmt.Println("The integer is greater than 3")
}
```

### goto

Go 有 `goto` 語句——請明智地使用它。用 `goto` 跳轉到必須在當前函式內定義的標籤。例如假設這樣一個迴圈：

```go
func myFunc() {
    i := 0
Here:   //這行的第一個詞，以冒號結束作為標籤
    println(i)
    i++
    goto Here   //跳轉到 Here 去
}
```

> 標籤名稱(label)是區分大小寫的的。

### for

可以用來迴圈讀取資料，又可以當作 while 來控制邏輯，還能迭代操作。它的語法如下：

```go
for expression1; expression2; expression3 {
    //...
}
```

expression1、expression2 和 expression3 都是表示式，其中 expression1 和 expression3 是變數宣告或者函式呼叫回傳值之類別的，expression2 是用來條件判斷，expression1 在迴圈開始之前呼叫，expression3 在每輪迴圈結束之時呼叫。

```go
package main

import "fmt"

func main(){
    sum := 0;
    for index:=0; index < 10 ; index++ {
        sum += index
    }
    fmt.Println("sum is equal to ", sum)
}
// 輸出：sum is equal to 45
```

有些時候需要進行多個賦值操作，由於 Go 裡面沒有,運算子，那麼可以使用平行賦值 i, j = i+1, j-1

有些時候如果我們忽略 expression1 和 expression3：

```go
sum := 1
for ; sum < 1000;  {
    sum += sum
}
```

其中 ; 也可以省略，就變成是 while 的功能。

```go
sum := 1
for sum < 1000 {
    sum += sum
}
```

在迴圈裡面有兩個關鍵操作 break 和 continue ,break 操作是跳出當前迴圈，continue 是跳過本次迴圈。當**巢狀過深**的時候，break 可以配合標籤使用，即跳轉至標籤所指定的位置，詳細參考如下例子：

```go
for index := 10; index>0; index-- {
    if index == 5{
        break // 或者 continue
    }
    fmt.Println(index)
}
// break 顯示出來 10、9、8、7、6
// continue 顯示出來 10、9、8、7、6、4、3、2、1
```

break 和 continue 還可以跟著標號，用來跳到多重迴圈中的外層迴圈

for 配合 range 可以用於讀取 slice 和 map 的資料：

```go
for k,v:=range map {
    fmt.Println("map's key:",k)
    fmt.Println("map's val:",v)
}
```

由於 Go 支援 “多值回傳”, 而對於“宣告而未被呼叫”的變數, 編譯器會報錯, 在這種情況下, 可以使用 \_ 來丟棄不需要的回傳值 例如

```go
for _, v := range map{
    fmt.Println("map's val:", v)
}
```

### switch

有些時候你需要寫很多的 if-else 來實現一些邏輯處理，這個時候程式碼看上去就很醜很冗長，而且也不易於以後的維護，這個時候 switch 就能很好的解決這個問題。它的語法如下

```go
switch sExpr {
case expr1:
    some instructions
case expr2:
    some other instructions
case expr3:
    some other instructions
default:
    other code
}
```

sExpr 和 expr1、expr2、expr3 的型別必須一致。Go 的 switch 非常靈活，表示式不必是常數或整數，執行的過程從上至下，直到找到匹配項；而如果 switch 沒有表示式，它會匹配 true。

```go
i := 10
switch i {
case 1:
    fmt.Println("i is equal to 1")
case 2, 3, 4:
    fmt.Println("i is equal to 2, 3 or 4")
case 10:
    fmt.Println("i is equal to 10")
default:
    fmt.Println("All I know is that i is an integer")
}
```

在第 5 行中，我們把很多值聚合在了一個 case 裡面，同時，Go 裡面 switch 預設相當於每個 case 最後帶有 break，匹配成功後不會自動向下執行其他 case，而是跳出整個 switch, 但是可以使用 fallthrough 強制執行後面的 case 程式碼。

```go
integer := 6
switch integer {
case 4:
    fmt.Println("The integer was <= 4")
    fallthrough
case 5:
    fmt.Println("The integer was <= 5")
    fallthrough
case 6:
    fmt.Println("The integer was <= 6")
    fallthrough
case 7:
    fmt.Println("The integer was <= 7")
    fallthrough
case 8:
    fmt.Println("The integer was <= 8")
    fallthrough
default:
    fmt.Println("default case")
}
```

上面的程式將輸出

```go
The integer was <= 6
The integer was <= 7
The integer was <= 8
default case
```

### function

```go
func funcName(input1 type1, input2 type2) (output1 type1, output2 type2) {
    //這裡是處理邏輯程式碼
    //回傳多個值
    return value1, value2
}
```

- 關鍵字 func 用來宣告一個函式 funcName
- 函式可以有一個或者多個參數，每個參數後面帶有型別，透過,分隔
- 函式可以回傳多個值
- 上面回傳值宣告了兩個變數 output1 和 output2，如果你不想宣告也可以，直接就兩個型別
- 如果只有一個回傳值且不宣告回傳值變數，那麼你可以省略 包括回傳值 的括號
- 如果沒有回傳值，那麼就直接省略最後的回傳資訊
- 如果有回傳值， 那麼必須在函式的外層新增 return 語句

ex: （用來計算 Max 值）

```go
package main

import "fmt"

// 回傳 a、b 中最大值.
func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

func main() {
    x := 3
    y := 4
    z := 5

    max_xy := max(x, y) //呼叫函式 max(x, y)
    max_xz := max(x, z) //呼叫函式 max(x, z)

    fmt.Printf("max(%d, %d) = %d\n", x, y, max_xy)
    fmt.Printf("max(%d, %d) = %d\n", x, z, max_xz)
    fmt.Printf("max(%d, %d) = %d\n", y, z, max(y,z)) // 也可在這直接呼叫它
}
```

#### 多個回傳值

```go
package main

import "fmt"

//回傳 A+B 和 A*B
func SumAndProduct(A, B int) (int, int) {
    return A+B, A*B
}

func main() {
    x := 3
    y := 4

    xPLUSy, xTIMESy := SumAndProduct(x, y)

    fmt.Printf("%d + %d = %d\n", x, y, xPLUSy)
    fmt.Printf("%d * %d = %d\n", x, y, xTIMESy)
}
```

上面的例子我們可以看到直接回傳了兩個參數，當然我們也可以命名回傳參數的變數，這個例子裡面只是用了兩個型別，我們也可以改成如下這樣的定義，然後回傳的時候不用帶上變數名，因為直接在函式裡面初始化了。但如果你的函式是匯出的(首字母大寫)，官方建議：最好命名回傳值，因為不命名回傳值，雖然使得程式碼更加簡潔了，但是會造成產生的文件可讀性差。

```go
func SumAndProduct(A, B int) (add int, Multiplied int) {
    add = A+B
    Multiplied = A*B
    return
}
```

### 可變參數函式 (Variadic functions)

Go 函式支援可變參數函式。接受可變參數的函式是有著不定數量的參數的。為了做到這點，首先需要定義函式使其接受可變參數：

```go
func myfunc(arg ...int) {}
```

arg ...int 告訴 Go 這個函式接受不定數量的參數。注意，這些參數的型別全部是 int。在函式體中，變數 arg 是一個 int 的 slice：

```go
for _, n := range arg {
    fmt.Printf("And the number is: %d\n", n)
}
```

#### 傳值與傳指標

當我們傳一個參數值到被呼叫函式裡面時，實際上是傳了這個值的一份 copy，當在被呼叫函式中修改參數值的時候，呼叫函式中相應參數不會發生任何變化，因為數值變化只作用在 copy 上。

為了驗證我們上面的說法，我們來看一個例子

```go
package main

import "fmt"

//簡單的一個函式，實現了參數+1 的操作
func add1(a int) int {
    a = a+1 // 我們改變了 a 的值
    return a //回傳一個新值
}

func main() {
    x := 3

    fmt.Println("x = ", x)  // 應該輸出 "x = 3"

    x1 := add1(x)  //呼叫 add1(x)

    fmt.Println("x+1 = ", x1) // 應該輸出"x+1 = 4"
    fmt.Println("x = ", x)    // 應該輸出"x = 3"
}
```

看到了嗎？雖然我們呼叫了 add1 函式，並且在 add1 中執行 a = a+1 操作，但是上面例子中 x 變數的值沒有發生變化

理由很簡單：因為當我們呼叫 add1 的時候，add1 接收的參數其實是 x 的 copy，而不是 x 本身。

那你也許會問了，如果真的需要傳這個 x 本身，該怎麼辦呢？

這就牽扯到了所謂的指標。我們知道，變數在記憶體中是存放於一定地址上的，修改變數實際是修改變數地址處的記憶體。只有 add1 函式知道 x 變數所在的地址，才能修改 x 變數的值。所以我們需要將 x 所在地址&x 傳入函式，並將函式的參數的型別由 int 改為\*int，即改為指標型別，才能在函式中修改 x 變數的值。此時參數仍然是按 copy 傳遞的，只是 copy 的是一個指標。請看下面的例子

```go
package main

import "fmt"

//簡單的一個函式，實現了參數+1 的操作
func add1(a *int) int { // 請注意，
    *a = *a+1 // 修改了 a 的值
    return *a // 回傳新值
}

func main() {
    x := 3

    fmt.Println("x = ", x)  // 應該輸出 "x = 3"

    x1 := add1(&x)  // 呼叫 add1(&x) 傳 x 的地址

    fmt.Println("x+1 = ", x1) // 應該輸出 "x+1 = 4"
    fmt.Println("x = ", x)    // 應該輸出 "x = 4"
}
```

這樣，我們就達到了修改 x 的目的。那麼到底傳指標有什麼好處呢？

- 傳指標使得多個函式能操作同一個物件。

- 傳指標比較輕量級 (8bytes)，只是傳記憶體地址，我們可以用指標傳遞體積大的結構體。如果用參數值傳遞的話, 在每次 copy 上面就會花費相對較多的系統開銷（記憶體和時間）。所以當你要傳遞大的結構體的時候，用指標是一個明智的選擇。

- Go 語言中 channel，slice，map 這三種類型的實現機制類似指標，所以可以直接傳遞，而不用取地址後傳遞指標。（注：若函式需改變 slice 的長度，則仍需要取地址傳遞指標）

### defer

延遲（defer）語句，你可以在函式中新增多個 defer 語句。當函式執行到最後時，這些 defer 語句會按照逆序執行，最後該函式回傳。特別是當你在進行一些開啟資源的操作時，遇到錯誤需要提前回傳，在回傳前你需要關閉相應的資源，不然很容易造成資源洩露等問題。如下程式碼所示，我們一般寫開啟一個資源是這樣操作的：

```go
func ReadWrite() bool {
    file.Open("file")
// 做一些工作
    if failureX {
        file.Close()
        return false
    }

    if failureY {
        file.Close()
        return false
    }

    file.Close()
    return true
}
```

我們看到上面有很多重複的程式碼，Go 的 defer 有效解決了這個問題。使用它後，不但程式碼量減少了很多，而且程式變得更優雅。在 defer 後指定的函式會在函式退出前呼叫。

```go
func ReadWrite() bool {
    file.Open("file")
    defer file.Close()
    if failureX {
        return false
    }
    if failureY {
        return false
    }
    return true
}
```

如果有很多呼叫 defer，那麼 defer 是採用後進先出模式，所以如下程式碼會輸出 4 3 2 1 0

```go
for i := 0; i < 5; i++ {
    defer fmt.Printf("%d ", i)
}
```

### 函式作為值、型別

在 Go 中函式也是一種變數，我們可以透過 type 來定義它，它的型別就是所有擁有相同的參數，相同的回傳值的一種型別

```go
type typeName func(input1 inputType1 , input2 inputType2 [, ...]) (result1 resultType1 [, ...])
```

函式作為型別到底有什麼好處呢？那就是可以把這個型別的函式當做值來傳遞，請看下面的例子

```go
package main

import "fmt"

type testInt func(int) bool // 宣告了一個函式型別

func isOdd(integer int) bool {
    if integer%2 == 0 {
        return false
    }
    return true
}

func isEven(integer int) bool {
    if integer%2 == 0 {
        return true
    }
    return false
}

// 宣告的函式型別在這個地方當做了一個參數

func filter(slice []int, f testInt) []int {
    var result []int
    for _, value := range slice {
        if f(value) {
            result = append(result, value)
        }
    }
    return result
}

func main(){
    slice := []int {1, 2, 3, 4, 5, 7}
    fmt.Println("slice = ", slice)
    odd := filter(slice, isOdd)    // 函式當做值來傳遞了
    fmt.Println("Odd elements of slice are: ", odd)
    even := filter(slice, isEven)  // 函式當做值來傳遞了
    fmt.Println("Even elements of slice are: ", even)
}
```

函式當做值和型別在我們寫一些通用介面的時候非常有用，透過上面例子我們看到 testInt 這個型別是一個函式型別，然後兩個 filter 函式的參數和回傳值與 testInt 型別是一樣的，但是我們可以實現很多種的邏輯，這樣使得我們的程式變得非常的靈活

### Panic 和 Recover

Go 沒有像 Java 那樣的異常機制，它不能丟擲異常，而是使用了 panic 和 recover 機制。一定要記住，你應當把它作為最後的手段來使用，也就是說，你的程式碼中應當沒有，或者很少有 panic 的東西。這是個強大的工具，請明智地使用它。那麼，我們應該如何使用它呢？

- Panic
  > 是一個內建函式，可以中斷原有的控制流程，進入一個 panic 狀態中。當函式 F 呼叫 panic，函式 F 的執行被中斷，但是 F 中的延遲函式會正常執行，然後 F 回傳到呼叫它的地方。在呼叫的地方，F 的行為就像呼叫了 panic。這一過程繼續向上，直到發生 panic 的 goroutine 中所有呼叫的函式回傳，此時程式退出。panic 可以直接呼叫 panic 產生。也可以由執行時錯誤產生，例如存取越界的陣列。
- Recover
  > 是一個內建的函式，可以讓進入 panic 狀態的 goroutine 恢復過來。recover 僅在延遲函式中有效。在正常的執行過程中，呼叫 recover 會回傳 nil，並且沒有其它任何效果。如果當前的 goroutine 陷入 panic 狀態，呼叫 recover 可以捕獲到 panic 的輸入值，並且恢復正常的執行。

下面這個函式示範了如何在過程中使用 panic

```go
var user = os.Getenv("USER")

func init() {
    if user == "" {
        panic("no value for $USER")
    }
}
```

下面這個函式檢查作為其參數的函式在執行時是否會產生 panic：

```go
func throwsPanic(f func()) (b bool) {
    defer func() {
        if x := recover(); x != nil {
            b = true
        }
    }()
    f() //執行函式 f，如果 f 中出現了 panic，那麼就可以恢復回來
    return
}
```

### main 函式和 init 函式

Go 裡面有兩個保留的函式：init 函式（能夠應用於所有的 package）和 main 函式（只能應用於 package main）。這兩個函式在定義時不能有任何的參數和回傳值。雖然一個 package 裡面可以寫任意多個 init 函式，但這無論是對於可讀性還是以後的可維護性來說。

- _建議使用者在一個 package 中每個檔案只寫一個 init 函式。_

Go 程式會自動呼叫 init()和 main()，所以你不需要在任何地方呼叫這兩個函式。每個 package 中的 init 函式都是可選的，但 package main 就必須包含一個 main 函式。

程式的初始化和執行都起始於 main 套件。如果 main 套件還匯入了其它的套件，那麼就會在編譯時將它們依次匯入。有時一個套件會被多個套件同時匯入，那麼它只會被匯入一次（例如很多套件可能都會用到 fmt 套件，但它只會被匯入一次，因為沒有必要匯入多次）。當一個套件被匯入時，如果該套件還匯入了其它的套件，那麼會先將其它套件匯入進來，然後再對這些套件中的 "套件級" (package-level) 常數和變數進行初始化，接著執行 init 函式（如果有的話），依次類別推。等所有被匯入的套件都載入完畢了，就會開始對 main 套件中的 "套件級" 常數和變數進行初始化，然後執行 main 套件中的 init 函式（如果存在的話），最後執行 main 函式。下圖詳細地解釋了整個執行過程：

![alt text](image-5.png)

### import

我們在寫 Go 程式碼的時候經常用到 import 這個命令用來匯入套件檔案，而我們經常看到的方式參考如下：

```go
import(
    "fmt"
)
```

```go
fmt.Println("hello world")
```

上面這個 fmt 是 Go 語言的標準函式庫，其實是去 GOROOT 環境變數指定目錄下去載入該模組，當然 Go 的 import 還支援如下兩種方式來載入自己寫的模組：

1. 相對路徑

   import “./model” //當前檔案同一目錄的 model 目錄，但是不建議這種方式來 import

2. 絕對路徑

   import “shorturl/model” //載入 gopath/src/shorturl/model 模組

上面展示了一些 import 常用的幾種方式，但是還有一些特殊的 import，讓很多新手很難以理解，下面我們來一一講解一下到底是怎麼一回事

1. 點操作

```go
 import(
     . "fmt"
 )
```

這個點操作的含義就是這個套件匯入之後在你呼叫這個套件的函式時，你可以省略字首的套件名，也就是前面你呼叫的 fmt.Println("hello world")可以省略的寫成 Println("hello world")

2. 別名操作
   別名操作顧名思義我們可以把套件命名成另一個我們用起來容易記憶的名字

```go
 import(
     f "fmt"
 )
```

別名操作的話呼叫套件函式時字首變成了我們的字首，即 f.Println("hello world")

3. \_操作
   這個操作經常是讓很多人難以理解的一個運算子，請看下面這個 import

```go
    import (
        "database/sql"
        _ "github.com/ziutek/mymysql/godrv"
    )
```

> \_操作其實是引入該套件，而不直接使用套件裡面的函式，而是呼叫了該套件裡面的 init 函式。

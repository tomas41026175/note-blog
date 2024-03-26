# build & start 使用不同環境
## 需求:
希望在 build 的時候使用 a 環境，但是在 start 的時候使用 b 的公開環境變數。

## 坑點
Next 的 env 分為 Public & Private ，取決於環境變數宣告的開頭是否包含`NEXT_PUBLIC_`，並且公開變數在 build 的當下就不可改變。
雖然 Private 變數會根據啟用的環境產生變化，但是只能在 server 環境中取得。

## 解決方案
利用 cross-env 在 start 執行前塞入公開變數，讓程序可以獲得當前環境相關資料進行其餘判斷。
``` "build" : "cross-env NODE_ENV=production && webpack" ```
## 取消請求方式 - AbortController
- 在前端當中，我們主要可以透過兩種方式來發送請求：XHR 跟 Fetch。XHR 是從，嗯...，很久以前就有的 API。不過因為設定上很麻煩，所以時常被包裝成更高階的 API 使用，像是 jQuery 的 getJSON、axios、RxJS 的 AjaxObservable 等等。

- 而近幾年隨著 Promise 逐漸流行的 Fetch API 可以大幅改進這些問題。除了回傳值為 Promise，方便操作之外，API 也相當簡單。

- 不過儘管如此，還是有一項致命的缺點。Fetch 無法取消請求，雖然我們可以透過 setTimeout 的方式讓回傳值被忽略，不過請求一樣會繼續等待。在 XHR 裡頭，我們可以用 XMLHttpRequest.abort 來做取消，但 fetch 當中並沒有類似的 API。

- 終於出現了新的救星，AbortController

```
The abort() method of the AbortController interface aborts a DOM request (e.g. a Fetch request) before it has completed. This is able to abort fetch requests, consumption of any response Body, and streams.
```



- 使用方式很簡單
```
const abortController = new AbortController()
const signal = abortController.signal
```
- 然後再將 signal 傳入 fetch 就可以了。
```
fetch("/long-running", { signal: signal })
```

- 當你呼叫 abortController.abort 時，會透過 signal 傳到 fetch 裡頭。如果接收到 signal 時請求還沒完成，這個請求就會被取消。
```
fetch("/long-running", { signal: signal })
setTimeout(() => abortController.abort(), 5000)
```

## in React
![](https://hackmd.io/_uploads/SkRL_GTYh.png)

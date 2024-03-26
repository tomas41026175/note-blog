# session & localStorage

## session

- 存在 server side
- client side 基本上只保存一個 Session ID 用於指向 server 中的 session 位置
    - 會以 session cooies 的形式保存 所以當 session 結束的時候這個 cookies 就會被移除
- 可透過 SSL/TLS 传输 Session ID，等方式提高安全性

## localStorage

- 可接收 5mb 以上的資料 
- api
    - setItem
    - getItem
    - removeItem
    - clear
- 受到同源政策保護: 只有从相同的源（相同的协议、域名和端口）加载的页面才能读写相应的localStorage数据
- 不適合存放敏感資料
- 操作為同步行為
- 適合存放少量不需要頻繁更新的數據
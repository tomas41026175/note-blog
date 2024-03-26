# cookies
- 4KB
- 每個域名下的Cookie數量限制在20-50個之間，根據瀏覽器而定（新 > 舊）
- 存放於 client

## props
- HttpOnly
    - 設置了HttpOnly屬性的Cookie不能被客戶端JavaScript腳本訪問。這有助於減少跨站腳本（XSS）攻擊的風險。
- secure
    - 設置了Secure屬性的Cookie只能通過加密的HTTPS協議被傳輸，而不是HTTP。
- expires
    - Cookie的過期時間。如果不設置，Cookie將在瀏覽器關閉時過期。否則，可以設置一個具體的日期和時間，讓Cookie在那時過期。
- path
    - 只有當請求匹配這個路徑時，Cookie才會被發送。
- domain
    - 指定Cookie可以送達的域名。如果不設置，Cookie只會送到設置它的那個域名下。
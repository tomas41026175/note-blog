# 網路協議
![](https://i.imgur.com/bH0AwlE.png)
## 協議
### 應用層
- http
- ftp
### 傳輸層
- udp
    - 不須驗證
    - 多媒體占多數
    - 事務性的應用
    
- tcp
    - 將ip的不可靠
    - reference
        - https://www.eet-china.com/mp/a44399.html
    - 面向連接
    - client & sever之間
    - 7層模型中的第4層
    - 沒有IP地址，但有來源端口&目標端口
    - 可靠性較高
        - 亂序
        - 流量控制
        - 丟包重傳
        - 阻塞控制
        ![](https://i.imgur.com/wobfnZL.jpg)
    - 為了可靠性 犧牲即時性
        - 時間較長
    - Sequence Number : 記錄包的序號，TCP會按照報文字結進行編號，用於解決亂序問題
    - Acknowledgement Number : 確認序號，用於向發送方確認已收到的封包，用於解決丟包的問題，達成不丟包的目的。
    - Windows === Advertised-Windes : 滑動窗口，用於解決流控
    - TCP Flag : 封包類型，用於操控TCP狀態。

    - 3次握手(建立連接)
        - TCP應用發送數據前，通過 TCP 協議與對方事先定義好的連接訊息，建立起TCP的連接關係。

        - 1st
        	- C發送封包，S收到 : S可以確認C的接收&發送狀態正常。 
        	- C發送```SYN```報文，並進入```SYN_SENT```狀態，等待server確認
        - 2nd
            - S發送封包，C收到 : C可以確認S的接收&發送狀態正常。
            - S收到```SYN```，需要發送```ACK```給C確認報文，同時S需要向C發送一個```SYN```報文，也就是像C發送```SYN + ACK```報文，此時server進入```SYN_RCVD```狀態，
        - 3rd
            - 可携带數據
            - C發包S收到，S可以確認S&C的接收&發送狀態都正常。
            - C收到```SYN + ACK```，向S發送確認，C進入```ESTABLISHED```狀態，完成三次握手。
                - 開始傳輸數據
    - 4次揮手(斷開連接)
        - 1st
            - client發送斷線通知
        - 2nd
            - server回應收到並開始處理資料
        - 3rd
            - server將資料>client後通知資料以傳輸可斷線
        - 4st
            - client回應收到 執行斷線
    - 若斷線也是3次會造成
        - client無法確定server是否收到請求
    
    

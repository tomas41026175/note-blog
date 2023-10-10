## AJAX(Asynchronous JavaScript and XML)
意思為非同步的 JavaScript 與 XML 技術，在技術層面上來說是一項讓網頁不用重新整理就可以從伺服器取得資料的方式。
使用AJAX後，常見的伺服器回傳資料為（HTML、XML、JSON），其中在使用JavaScript時最常見到的格式為JSON。

## 如何使用AJAX向Server取得資料
當我們要向Server取得資料時，可以使用
```
fetch(網址).then((response)=>{
    //response表示Server回應的物件
})
```
我們取回的資料一般來說都會是String的型態，所以我們可以通過```return response.json()```使用JSON的格式讓回傳的資料變成一個陣列+物件的組合。```[{..},{..},{..}]```

## 實際操作使用AJAX向Server取得資料
```
首先宣告link為網頁的路徑
let  link ="www.xxx.com/xxx.json"
接著使用fetch抓取資料
fetch(link)
    成功抓取資料後回傳json格式的資料，因為是async function所以也可以用await進行
    .then((response)=>{
        return response.json
    })
        接下來就可以使用資料，先將整個物件命名為result
        .then((result)=>{
            使用for迴圈，將物件內容印出來
            for(let i=0; i<result.length; i++){
            let resultData = result[i]
            console.log(resultData)
            }
        })

```

## XMLHttpRequset(XHR)
XMLHttpRequset是一種取用以物件方式存取Server端資料，並可以不藉由重新整理更新網頁資訊，XHR可以用來接受任何類型的資料。
常用於Web應用、Debug、API測試

## 要如何使用XHR

首先要先使用new方式宣告一個變數XHR來抓取資料，在這個物件中
```
const xhr = new XMLHttpRequest();
```
1. 使用open()方法設定請求
(除了open之外還有POST、PUT、DELETE、OPTIONS、POST可用)

```
xhr.open("GET","http://xxx.com/api/xx",ture);  （HTTP方法,url,布林值指定資料傳輸模式）
```
使用send方法將請求送出
```
xhr.send(null);
```
透過XHR取得的資料會是一個由XML解析而來的DOM物件，可利用XMLSerializer來序列化這筆資料

2. Server回應：當Server回應後便會觸發onload事件，
    status表示Server回應的狀態200表示正常 400表示失敗
```
xhr.onload = () =>{
    if(status == 200){
    .....
    }else{.....}
}
```
回應狀態碼
status:200-正常 404-找不到頁面 304-未修改 500-伺服器內部錯誤

處理狀態碼的判斷
```if(Math.floor(xhr.status/100) == 2){
.....
}else{
....
};
```
3. 處理回應

Server回應的資料格式通常為以下三種：HTML XML JSON

json.stringify()這種方式可以將JS資料轉為JSON格式
json.parse()這種方式可以將JSON格式的字串轉為JS物件
XML、XHTML，可以用responseXML來取得資料
但如果回應的是一個text，可以使用responseText來取得資料
若是常見的JSON可以用JSON.parse()來解析responseText

```
HTML資料更新
-------------JS------------------------
1. const xhr = new XMLHttpRequset();
4. xhr.onload = () =>{
   5. if(status == 200){
    更新畫面
    6. document.geyElementByID("main").innerHTML = xhr.responeText; 以XHR的物件特性responseText取得新的HTML內容
    };
}

2. xhr.open("GET",'data/data.html',ture); 準備資料請求
3. xhr.send(null);    送出資料請求
    
```
```
XML資料更新
-------------HTML---------------------
<div class="event">
    <img src="file.png" alt="Location"/>
    <p><b>Location</b><br />Event date</p>
</div>
-------------JS------------------------
const xhr = new XMLHttpRequest();
xhr.onload =()=>{
    if(status == 200){
        const response = xhr.responseXML;
        const events = response.getElementByTagName("event")
            for(i=0;i<events.length;i++){    利用迴圈尋訪每個活動元件
                const container, image, location, city, newline;    宣告變數
                container = document.createElement("div");    建立div容器
                container. className "event";    替容器class屬性添加event屬性
                
                image = document.creatElement("img");    加入地圖影像
                image.setAttribute("src", (getNodeValue(event[i],'map')))
                image.appendChild(image);
                
                location = document.crea)teElement('p');    加入位置資料
                city = document.createElement('b');
                newline = document.creatElement('br');
                city.appendChild(newline);
                location.insertBefore(city,newline);
                location.appendChild(document.createTextNode(getNodeValue(event[i],'date')))
                contain.appendChild(location);
                
                document.getElementById('conent').appendChild(container);
            }
            getNodeValue(obj,tag)=>{
            return obj.getEementsByTagName('tag')[0].firstChild.nodeValue;
            }
            
    }
}
 xhr.open("GET",'data/data.xml',ture); 準備資料請求
 xhr.send(null);    送出資料請求
```
```
JSON資料更新

const xhr = new XMLHttpRequest();
xhr.onload =()=>{
    const newContent = '';
    if(status == 200){
    for(i=0;i<response.length;i++){
        newContent += '<div class="event">';
        newContent += '<img src="'+responseObject.event[i].map+'"';
        newContent += 'alt="'+responseObject.event[i].location+'"/>';
        newContent += '<p><b>'+responseObject.event[i].location+'</b></br>';
        newContent += responseObject.event[i].date + '</p>'
        newContent += '</div>';
        }
    document.getElementById("main").innerHTML = newContent;
    }    
};
 xhr.open("GET",'data/data.json',ture); 準備資料請求
 xhr.send(null);    送出資料請求
```
## 使用await取得資料
我們知道fetch()拿回來的資料是一個Response promise，那就可以通過await來取回資料已減少code。
```
try{
    const response = await fetch(link);
    const result = await response.json();
    console.log(result);
}
```
## CORS
跨來源資源共享(Cross-Origin Resourse Sharing)
CORS可以用來開啟以下類型的跨站請求
1. 使用 XMLHttpRequest 或 Fetch API 進行跨站請求，如前所述。
2. 網頁字體（跨網域 CSS 的 @font-face 的字體用途），所以伺服器可以佈署 TrueType 字體，並限制只讓信任的網站跨站載入。
3. WebGL 紋理。
4. 以 drawImage 繪製到 Canvas 畫布上的圖形／影片之影格。
5. CSS 樣式表（讓 CSSOM 存取）。
6. 指令碼（for unmuted exceptions）。

## 跨網域請求 JSONP

JSONP的運作需要2段JavaScript
1. 處理回傳的JSON資料
2. 一個script元件的屬性src可用來向遠端伺服器發送JSON請求
```
JSONP的運作流程
1.<script>
showEvents(data)=>{
    const newContent = "";
    
    for(let i =0;i<data.events.length;i++){
        newContent += '<div class="event">';
        newContent += '<img src="'+responseObject.event[i].map+'"';
        newContent += 'alt="'+responseObject.event[i].location+'"/>';
        newContent += '<p><b>'+responseObject.event[i].location+'</b></br>';
        newContent += responseObject.event[i].date + '</p>'
        newContent += '</div>';
    }
    document.getElementById("main").innerHTML = newContent;
}
</script>

2.<script
    src="http://xxx.org/jsonp"
>

</script>
```

## 補充readyStatus
readyState 屬性的數值可以判斷目前讀取資料的狀態。
0 - 已經產生一個 XMLHttpRequest，但是還沒連結要撈的資料，接著下 open 指法來設定環境（有三個參數）
1 - 用了open，但是還沒傳資料
2 - 偵測到你有用 send
3 - 資料 loading 中
4 - 確認你有撈到資料，數據也已經接收到


## 參考資料
https://www.youtube.com/watch?v=ZNBwugL-u1o - GitHub Pages 架設網站教學與 AJAX Fetch 網路連線介紹 - 彭彭直播
https://developer.mozilla.org/zh-TW/docs/Web/Guide/AJAX - MDN AJAX
https://developer.mozilla.org/zh-TW/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest - MDN 使用XHR
https://medium.com/%E9%A6%AC%E6%A0%BC%E8%95%BE%E7%89%B9%E7%9A%84%E5%86%92%E9%9A%AA%E8%80%85%E6%97%A5%E8%AA%8C/js-ajax-%E7%AD%86%E8%A8%98-b9a57976fa60 - AJAX 筆記
# Next 跨前後端簡易加密

##### `next` `react`

## 方案 : 'crypto-js'

嘗試過 RSANode ,jsencrypt 皆因傳遞 publicKey 至後端的時候產生 circle reference 導致無法傳遞。

後續透過 crypto-js 結合 env 中的自定義 key 完成前後端加解密

frontEnd:

```ts
const getFirebaseConfig = async (env: string | null) => {
  const response = await axios.get("/api", {
    params: {
      test: 001,
    },
  });

  if (response.status !== 200) {
    throw new Error("Network response was not ok");
  }

  const bytes = CryptoJS.AES.decrypt("加密後資料", "加解密用 key");
  //還原物件
  const decrypted = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  return decrypted;
};
```

backEnd:

```ts
import { NextRequest } from "next/server";
//@ts-ignore
import AES from "crypto-js/aes";

export async function GET(req: NextRequest) {
  // object
  const encrypted = AES.encrypt("加密資料", "加密用 key").toString();
  // string
  const ciphertext = AES.encrypt("要加密的字串", "加密密碼").toString();
  return Response.json({ firebaseConfig: encrypted });
}
```

## reference

https://yuan-0708.medium.com/javascript-%E5%8A%A0%E8%A7%A3%E5%AF%86-crypto-js-3cc2dd007d08 - JavaScript 加解密(crypto-js)
https://dev.to/letswrite/cryptojs-yong-qian-duan-jia-mi-jie-mi-cbp - CryptoJS 用前端加密、解密

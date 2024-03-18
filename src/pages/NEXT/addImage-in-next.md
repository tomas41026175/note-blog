# 在NEXT中添加圖片的兩種方式

- 使用import 的方式可以不用在./image標籤中宣告 width & height 
- 使用src需要宣告 width & height，不用加px 
- 若是想使用外部域名來源的圖片 需要再next.config.ts中添加

- next.config
    ```
        /** @type {import('next').NextConfig} */
        const nextConfig = {
            ./images:{
                domains:[
                    'example.com'
                ]
            }
        }

        module.exports = nextConfig
    ```
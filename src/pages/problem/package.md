# package

## file

减小发布包的体积：通过只包含必要的文件，可以显著减小发布包的大小。这不仅加快了下载和安装速度，还减少了磁盘空间的使用。
提高安全性：避免将敏感信息或不必要的文件（如测试文件、配置文件、文档等）发布到 npm。
简化依赖管理：其他使用你包的开发者只会看到你发布的必要文件，减少了依赖管理的复杂性。

//package.json

```sh
 "files": [
   "dist",
   "lib",
   "src"
 ],
```

dist 文件夹：通常包含编译后的代码，适合于直接在浏览器或 Node.js 环境中运行。
lib 文件夹：通常包含库文件，可能是编译后的代码或手写的库文件。
src 文件夹：通常包含源代码。如果你希望其他开发者能够查看或使用你的源代码，可以包含它。

## size limit

```sh
  "size-limit": [
    {
      "path": ".next/static/chunks/pages/*.js",
      "limit": "300 KB"
    },
    {
      "path": ".next/static/chunks/*.js",
      "limit": "500 KB"
    },
    {
      "path": ".next/static/css/*.css",
      "limit": "100 KB"
    }
  ]
```

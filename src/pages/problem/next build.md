# next build

// .next 相關問題
next build 後所產生的 .next 資料夾會有資料迭代遺留，需要 build 之前清理
// package.json

```sh
    "build": "rm -rf .next && next build",
```

// 加入 timestamp

```sh
    echo $(date +%s) > .next/build-timestamp
```

## splitChunks

next.config

```sh
  webpack(
    config,
    {
      isServer,
      // , nextRuntime, webpack
    },
  ) {
//svg
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        automaticNameDelimiter: '~',
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      };
    }

    return config;
  },
```

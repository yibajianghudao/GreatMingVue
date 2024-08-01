# GreatMingVue

It is the GreatMingWeb's refactoring version

## run

`npm install`  
`npm run dev`  
`pnpm i #安装element的依赖`

## code

在vite.config.ts中:

```
server: {
    // 配置代理解决跨域请求问题
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
```

使用配置代理的方式解决跨域请求问题

### Bug

未登录无法使用商店
退出登录后数据未清空

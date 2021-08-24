# 项目说明

## 创建项目

```bash
❯ npm init vite@latest vue3App --template vue
npx: 6 安装成功，用时 2.333 秒
✔ Package name: … vue3app

Scaffolding project in /Users/yangfei/project/vue3App...

Done. Now run:

  cd vue3App
  npm install
  npm run dev
```

## 命令说明

```javascript
{
  "scripts": {
    "dev": "vite", // 启动开发服务器
    "build": "vite build", // 为生产环境构建产物
    "serve": "vite preview" // 本地预览生产构建产物
  }
}
```

## 添加less支持

由于 Vite 的目标仅为现代浏览器，因此建议使用原生 CSS 变量和实现 CSSWG 草案的 PostCSS 插件（例如 postcss-nesting）来编写简单的、符合未来标准的 CSS。

但 Vite 也同时提供了对 .scss, .sass, .less, .styl 和 .stylus 文件的内置支持。没有必要为它们安装特定的 Vite 插件，但必须安装相应的预处理器依赖：

```bash
# .scss and .sass
npm install -D sass

# .less
npm install -D less

# .styl and .stylus
npm install -D stylus
```

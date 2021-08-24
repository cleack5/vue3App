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

## 添加 less 支持

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

## 环境变量

默认情况下，开发服务器 (serve 命令) 运行在 development (开发) 模式，而 build 命令运行在 production (生产) 模式。

这意味着当执行 vite build 时，它会自动加载 .env.production 中可能存在的环境变量：

```bash
# .env.production
VITE_APP_TITLE=My App
```

你可以通过传递 --mode 选项标志来覆盖命令使用的默认模式。例如，如果你想为我们假设的 dev 模式构建应用：

```bash
vite build --mode dev
```

为了使应用实现预期行为，我们还需要一个 .env.dev 文件。

## 代码检查与格式化

参考资料：https://miyauchi.dev/posts/vite-vue3-typescript/

```bash
npm i -D eslint eslint-plugin-vue @vue/eslint-config-typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
npm i -D prettier eslint-plugin-prettier @vue/eslint-config-prettier
```

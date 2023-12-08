如果学过react的话会很容易上手
主要区别就是NEXT.js提供了三个方法用于服务端渲染

1. getInitialProps （最新版本不用它了）
2. getStaticProps
3. getStaticPaths
4. getServerSideProps

学会这些方法的使用，其余的都是react的知识点了

推荐看这篇文章：[快速理解 Next.js 中数据获取方式的作用及区别（getInitialProps、getServerSideProps、getStaticProps）](https://www.pipipi.net/20406.html)

不理解渲染方式的可以看这篇：[快速理解 Next.js 中各种渲染方式的作用及区别（SSG、SSR、ISR、CSR）](https://juejin.cn/post/7213653429415559223)

## 路由模式

有两种，目前比较流行的是App Router

### Pages Router

在`src`目录下创建`pages`文件夹或者项目根目录下创建`pages`文件夹，其中的js文件会被视为路由

### App Router

v13.4开始，App Router正式进入稳定化阶段，App Router功能更强、性能更好、代码组织更加灵活

在`src`目录下创建`app`文件夹或者项目根目录下创建`app`文件夹，其中的`page.js`文件会被视为路由

### 定义布局（Layouts）

布局指的是多个页面共享的UI。在页面导航的时候，布局会保留状态，不会重新渲染。例如：后台管理系统的侧边栏

新建一个名为`layout.js`的文件，该文件默认导出一个React组件，该组件接受一个`children` prop，`children`表示子布局或者子组件

同一文件夹下如果有 `layout.js` 和 `page.js`，page 会作为 children 参数传入 layout。换句话说，layout 会包裹同层级的 page。

使用方法见本项目`app/dashboard`目录用法

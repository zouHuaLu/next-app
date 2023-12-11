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

### 定义模板（template）

模板类似于`布局(layout)`，它也会传入每个子布局或者页面。**但不会像布局那样维持状态。**

模板在路由切换时会为每一个 `children` 创建一个实例。这就意味着当用户在**共享一个模板的路由间跳转**的时候，将会*
*重新挂载组件实例，重新创建
DOM 元素，不保留状态**.

- 依赖于 useEffect 和 useState 的功能，比如记录页面访问数（维持状态就不会在路由切换时记录访问数了）、用户反馈表单（每次重新填写）等

- 更改框架的默认行为，举个例子，布局内的 Suspense 只会在布局加载的时候展示一次 fallback UI，当切换页面的时候不会展示。但是使用模板，fallback
  会在每次路由切换的时候展示。

### 定义加载界面（loading）

用于展示加载界面的`loading.js`，这个功能的实现借助了React的`Suspense`API

### 定义错误处理（error.js）

创建错误时展示的UI

其实现借助了 `React` 的 `Error Boundary` 功能。简单来说，就是给 page.js 和 children 包了一层 ErrorBoundary。

### 定义404页面（not-found.js）

在 app 目录下新建一个 `not-found.js`

## 链接和导航

1. 使用`<Link>`组件
2. 使用 `useRouter` Hook

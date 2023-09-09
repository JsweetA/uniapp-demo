### 介绍

uni-app vue3 基础框架
部分地方是进行 ts 了的，不会写的也没关系，写 js 的也没有问题

- api：是对 flyio 的一个封装，可以学习一下，感觉可以改进的也可以自行改动
- pages，services，store：主要的业务代码
- components：是用来放一些公共组件的地方。注意，一定是公共组件才放这里面，这意味着很多页面都可以使用
- types：是用来存放类型，不用 ts 有可以不用管

##### 关于页面的组成部分

- index.vue：主页面
- modules：页面的模块
- components：页面的组件
- configs：存放一些配置文件

> 我个人建议这么写，这样可以使得人看目录就能分期该页面有些什么

##### 关于代码规范

- 名字需要有语义，驼峰命名，自己想不到就多利用翻译
- 多利用 vscode 的 prettier 或者 volar 等插进进行格式化代码（快捷键是 shift + alt + f）

### 依赖

1. tmui：
   https://tmui.design/

2. animate.css

3. pinia

4. flyio

5. 请使用 pnpm 包管理工具：原因是可能存在一些依赖问题，导致 npm 或者 yarn 跑不起来

### 最后

少些重复代码，多利用配置化的思想，也就是多封装，多抽象，前期可以进行 cv 复制，后期再进行优化

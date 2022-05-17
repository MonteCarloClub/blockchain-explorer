# KChain

什么是区块链浏览器，参考：[Etherscan](https://cn.etherscan.com/)

## 需求

### 展示性的需求

- [ ] 首页

- [ ] 区块展示
    - [ ] 最新的一组区块
    - [ ] 区块的详细信息

- [ ] 交易展示
    - [ ] 最新的一批交易
    - [ ] 展示某条交易的详细信息

- [ ] 地址展示
    - [ ] 查看某个地址的交易列表

## 技术方案

基础框架：Vue3 + Typescript

包管理：`pnpm`，没有的话执行 `npm install -g pnpm` 安装一下

``` bash
$ pnpm install  # 安装依赖
$ pnpm run dev  # 启动
```

组件库：[Ant Design](https://antdv.com/components/overview) `v3.2.3`

> antd 自定义样式需要 less 支持

### 页面组件及路由

| 页面     | 组件                 | 路由                 |
| -------- | -------------------- | -------------------- |
| 首页     | Home                 | `/`                  |
| 区块列表 | Block / List         | `/blocks`            |
| 区块详情 | Block / Detail       | `/block/:height`       |
| 交易列表 | Transaction / List   | `/transactions`      |
| 交易详情 | Transaction / Detail | `/transaction/:hash` |
| 地址     | Address              | `/address/:hash`  |
|          |                      |                      |
|          |                      |                      |

展示性需求不考虑用户，不包含注册登录功能，也就没有请求鉴权

### 移动端适配

通过[动态路由](https://router.vuejs.org/guide/advanced/dynamic-routing.html)的技术，根据设备类型加载对应端上的页面组件，不同端上的路由结构相同。

考虑到移动端的特性，布局和交互上有所不同

+ 移动端可操作性不强，仅做展示性的需求（如果后续涉及到发送交易之类的需求，移动端不作支持）
+ 列表信息有所精简，仅展示关键字段，重点在详细信息
+ 移动端上的特效和动画需要轻量，可与 PC 端不同


# KChain

什么是区块链浏览器，参考：[Etherscan](https://cn.etherscan.com/)



## 需求

### 展示性需求

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

基础 UI：[Ant Design](https://antdv.com/components/overview) `v3.2.3`

包管理：`pnpm`，没有的话执行 `npm install -g pnpm` 安装一下

``` bash
$ pnpm install  # 安装依赖
$ pnpm run dev  # 启动
```

展示性需求不考虑用户，不包含注册登录功能，也就没有请求鉴权



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


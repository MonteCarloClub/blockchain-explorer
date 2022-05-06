# KChain

什么是区块链浏览器，参考：[Etherscan](https://cn.etherscan.com/)



## 需求

### 展示性需求

- [ ] 区块展示
    - [ ] 最新的一组区块
    - [ ] 区块的详细信息

- [ ] 交易展示
    - [ ] 最新的一批交易
    - [ ] 查看某个地址的交易列表
    - [ ] 展示某条交易的详细信息



## 技术方案

### 技术选型

基础框架：Vue3 + Typescript

基础 UI：[Ant Design](https://antdv.com/components/overview) `v3.2.3`

包管理：`pnpm`，没有的话执行 `npm install -g pnpm` 安装一下

``` bash
$ pnpm install  # 安装依赖
$ pnpm run dev  # 启动
```

### 方案

展示性需求不考虑用户，不包含注册登录功能，也就没有请求鉴权


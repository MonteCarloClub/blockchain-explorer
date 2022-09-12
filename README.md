# KChain

什么是区块链浏览器，参考：[Etherscan](https://cn.etherscan.com/)

预览：https://montecarloclub.github.io/be/

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

> 展示性需求不考虑用户，不包含注册登录功能，也就没有请求鉴权，暂不引入全局状态管理

### 移动端适配

通过[动态路由](https://router.vuejs.org/guide/advanced/dynamic-routing.html)的技术，根据设备类型加载对应端上的页面组件，不同端上的路由结构相同。

考虑到移动端的特性，布局和交互上有所不同

+ 移动端可操作性不强，仅做展示性的需求（如果后续涉及到发送交易之类的需求，移动端不作支持）
+ 列表信息有所精简，仅展示关键字段，重点在详细信息
+ 移动端上的特效和动画需要轻量，可与 PC 端不同

### 复用

基本的 vue 组件复用

双端上的区别仅在于展示和交互方案的不同，数据的获取方式及来源（api）是一致的，为此，抽象出一套可复用的 api 调用逻辑，方式采用组合式 API。



## 接口文档

### 交易列表

| URL    | Type       |
| ------ | ---------- |
| `/txs` | GET / POST |

请求参数：

| 字段 | 含义           | 默认值 | 备注      |
| ---- | -------------- | ------ | --------- |
| num  | 返回结果的条数 | 10     |           |
| page | 第几页         | 1      | 从 1 开始 |

> 说明：
>
> num=10，page=1：如果每页最多展示 10 条交易的话，那么这个请求希望返回的结果是前 10 条
>
> num=15，page=2：如果每页最多展示 15 条交易的话，那么这个请求希望返回的结果第 2 页，即第 16 条到第 30 条

返回值字段含义：

```text
{
    "data": {
        "list": [               // 交易列表，是一个数组
            {
                "block_id":     // 所在区块的 ID
                "hash":         // 交易哈希
                "status":         // 交易状态 pending | failed | success
                "time":         // 交易发生的时间
                "sender":       // 发送方地址
                "recipient":     // 接收方地址
                "gas_used":     // Gas 消耗
                "input_size":   // Data 的大小
            },
        ],
    },
}
```
示例

```json
{
    "data": {
        "list": [
            {
                "block_id": 13499798,
                "hash": "0x0fe2542079644e107cbf13690eb9c2c65963ccb79089ff96bfaf8dced2331c92",
                "status": "success",
                "time": "2021-10-27 13:54:10",
                "sender": "0x24354d31bc9d90f62fe5f2454709c32049cf866b",
                "recipient": "0x961d2b694d9097f35cfffa363ef98823928a330d",
                "gas_used": 14936857,
                "input_size": 234,
            }
        ],
        "num": 10
    },
    "code": 123
}
```

### 交易详情

| URL    | Type       |
| ------ | ---------- |
| `/tx/:hash` | GET / POST |

请求参数：

| 字段 | 含义           | 默认值 | 备注      |
| ---- | -------------- | ------ | --------- |
| hash  | 交易的哈希    |        |           |

> 说明：
>
> num=10，page=1：如果每页最多展示 10 条交易的话，那么这个请求希望返回的结果是前 10 条
>
> num=15，page=2：如果每页最多展示 15 条交易的话，那么这个请求希望返回的结果第 2 页，即第 16 条到第 30 条

返回值字段含义：

```text
{
    "data": {
        "list": [               // 交易列表，是一个数组
            {
                "block_id":     // 所在区块的 ID
                "hash":         // 交易哈希
                "status":         // 交易状态 pending | failed | success
                "time":         // 交易发生的时间
                "sender":       // 发送方地址
                "recipient":     // 接收方地址
                "gas_used":     // Gas 消耗
                "input_size":   // Data 的大小
                "gas_limit":    // gas 上限
                "input_hex":    // 输入数据
                "v":            // 签名的 v
                "r":            // 签名的 r
                "s":            // 签名的 s
            },
        ],
    },
}
```
示例

```json
{
    "data": {
        "list": [
            {
                "block_id": 13499798,
                "hash": "0x0fe2542079644e107cbf13690eb9c2c65963ccb79089ff96bfaf8dced2331c92",
                "status": "success",
                "time": "2021-10-27 13:54:10",
                "sender": "0x24354d31bc9d90f62fe5f2454709c32049cf866b",
                "recipient": "0x961d2b694d9097f35cfffa363ef98823928a330d",
                "gas_used": 14936857,
                "input_size": 234,
                "gas_limit": 20000000,
                "input_hex": "67c354b50000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000004261617665206c75636b792c2069726f6e2062616e6b206c75636b792c20637265616d206e6f742e2079646576203a20696e63657374206261642c20646f6e7420646f000000000000000000000000000000000000000000000000000000000000",
                "v": "00",
                "r": "0e73549fe7fc8655b160c3a10f3db9594f2534c2d3bb9d38ebb84ffed11f5278",
                "s": "7240ed1a9242510171ee997da68563b56c78c8998564dcda2a98b443c9048424"
            }
        ],
        "num": 1
    },
    "code": 123
}
```


### 区块列表

| URL       | Type       |
| --------- | ---------- |
| `/blocks` | GET / POST |

请求参数：

| 字段 | 含义           | 默认值 | 备注      |
| ---- | -------------- | ------ | --------- |
| num  | 返回结果的条数 | 10     |           |
| page | 第几页         | 1      | 从 1 开始 |

> 说明：
>
> num=10，page=1：如果每页最多展示 10 个区块的话，那么这个请求希望返回的结果是前 10 个
>
> num=15，page=2：如果每页最多展示 15 个区块的话，那么这个请求希望返回的结果第 2 页，即第 16 个到第 30 个

返回值字段含义：

```text
{
    "data": {
        "list": [                    // 区块列表，是一个数组
            {
                "id":                // 区块高度
                "hash":              // 区块哈希
                "time":              // 出块时间
                "size":              // 区块大小
                "miner":             // 挖出该区块的矿工
                "gas_used":          // Gas 消耗
                "gas_limit":         // Gas 上限
                "call_count":        // 调用数量
                "transaction_count": // 交易数量
                "reward":            // 奖励
            },
        ],
    },
}
```
示例

```json
{
    "data": {
        "list": [
            {
                "id": 14780189,
                "hash": "0x755e529144783104348c0486a3f6b59e09e5de55b60d035dae819eeecb9deacb",
                "time": "2022-05-15 13:22:14",
                "size": 22756,
                "miner": "0x1ad91ee08f21be3de0ba2ba6918e714da6b45836",
                "gas_used": 5660699,
                "gas_limit": 30000000,
                "call_count": 325,
                "transaction_count": 103,
                "reward": "2025016513917900854",
            }
        ],
        "num": 1
    },
    "code": 123
}
```

### 区块详情

| URL    | Type       |
| ------ | ---------- |
| `/block/:id` | GET / POST |

请求参数：

| 字段 | 含义           | 默认值 | 备注      |
| ---- | -------------- | ------ | --------- |
| id  | 区块 ID    |        |           |

返回值字段含义：

```text
{
    "data": {
        "id":                   // 区块高度
        "hash":                 // 区块哈希
        "time":                 // 出块时间
        "size":                 // 区块大小
        "miner":                // 挖出该区块的矿工
        "gas_used":             // Gas 消耗
        "gas_limit":            // Gas 上限
        "call_count":           // 调用数量
        "transaction_count":    // 交易数量
        "reward":               // 奖励
        "difficulty":           // 难度
        "state_root":           // 状态树根节点哈希
        "parent_hash":          // 父区块哈希
        "transactions": [       // 交易列表
            {
                "block_id":     // 所在区块的 ID
                "hash":         // 交易哈希
                "status":         // 交易状态 pending | failed | success
                "time":         // 交易发生的时间
                "sender":       // 发送方地址
                "recipient":     // 接收方地址
                "gas_used":     // Gas 消耗
                "input_size":   // Data 的大小
            },
            {}
        ]
    },
}
```
示例

```json
{
    "data": {

        "id": 14780189,
        "hash": "0x755e529144783104348c0486a3f6b59e09e5de55b60d035dae819eeecb9deacb",
        "time": "2022-05-15 13:22:14",
        "size": 22756,
        "miner": "0x1ad91ee08f21be3de0ba2ba6918e714da6b45836",
        "gas_used": 5660699,
        "gas_limit": 30000000,
        "call_count": 325,
        "transaction_count": 103,
        "reward": "2025016513917900854",
        "difficulty": 14394437004485724,
        "state_root": "6c7e9686ba085ebbe5c66ed0827bb476f54d254d602a7a6b648de485e85db8b3",
        "parent_hash": "0x3f3729d4ee6ab577130865fe5f579ede48627311055741286877fbe76f07010d",
        "transactions": [
            {
                "block_id": 13499798,
                "hash": "0x0fe2542079644e107cbf13690eb9c2c65963ccb79089ff96bfaf8dced2331c92",
                "status": "success",
                "time": "2021-10-27 13:54:10",
                "sender": "0x24354d31bc9d90f62fe5f2454709c32049cf866b",
                "recipient": "0x961d2b694d9097f35cfffa363ef98823928a330d",
                "gas_used": 14936857,
                "input_size": 234,
            },
            {}
        ],
    },
    "code": 123
}
```

### 地址详情


| URL    | Type       |
| ------ | ---------- |
| `/address/:address` | GET / POST |

请求参数：

| 字段 | 含义           | 默认值 | 备注      |
| ---- | -------------- | ------ | --------- |
| address  | 账户地址 | 10     |           |


返回值字段含义：

```text
{
    "data": {
        "balance":               // 余额
        "transactionCount":      // 交易数
        "totalSent":             // 总支出
        "totalReceived":         // 总收入
        "totalFees":             // 总手续费
        "tokenTransferCount":    // 转账次数
        "transactions": [        // 交易列表
            {
                "block_id":      // 所在区块的 ID
                "hash":          // 交易哈希
                "status":          // 交易状态 pending | failed | success
                "time":          // 交易发生的时间
                "sender":        // 发送方地址
                "recipient":      // 接收方地址
                "gas_used":      // Gas 消耗
                "input_size":    // Data 的大小
            },
            {}
        ]
    },
}
```
示例

```json
{
    "data": {
        "balance": "208523137837831461623131",
        "transactionCount": "3459619",
        "totalSent": "656395619568791545245619",
        "totalReceived": "6822853272338219240159",
        "totalFees": "3003923573014427468616",
        "tokenTransferCount": "33"
        "transactions": [
            {
                "block_id": 13499798,
                "hash": "0x0fe2542079644e107cbf13690eb9c2c65963ccb79089ff96bfaf8dced2331c92",
                "status": "success",
                "time": "2021-10-27 13:54:10",
                "sender": "0x24354d31bc9d90f62fe5f2454709c32049cf866b",
                "recipient": "0x961d2b694d9097f35cfffa363ef98823928a330d",
                "gas_used": 14936857,
                "input_size": 234,
            },
            {}
        ],
    },
    "code": 123
}
```

## 会议纪要

### 2022-07-24

交易列表 / 地址详情的交易列表：交易费用换成 Data 的大小

交易详情：强化 Data 的展示

区块列表：费用 不展示
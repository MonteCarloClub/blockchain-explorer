/** 
 * 交易数据的字段名与表头中展示的名称之间的对应关系 
 * https://antdv.com/components/table#Column
 */

export const columns = [
    { title: '高度', dataIndex: 'id', width: 100 },
    { title: '出块时间', dataIndex: 'time', width: 180 },
    { title: '交易数量', dataIndex: 'transaction_count', width: 80 },
    { title: '调用数量', dataIndex: 'call_count', width: 80 },
    { title: '矿工', dataIndex: 'miner', ellipsis: true },
    { title: '奖励 / Gas', dataIndex: 'reward', width: 180 },
    { title: '消耗 / Gas', dataIndex: 'gas_used', width: 100 },
    { title: '上限 / Gas', dataIndex: 'gas_limit', width: 120, align: 'right' },
];
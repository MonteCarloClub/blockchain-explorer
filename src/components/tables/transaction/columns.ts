/** 
 * 交易数据的字段名与表头中展示的名称之间的对应关系 
 * https://antdv.com/components/table#Column
 */

export const columns = [
    { title: '交易哈希', dataIndex: 'hash', ellipsis:true },
    { title: '区块', dataIndex: 'block_id', width: 100 },
    { title: '交易日期', dataIndex: 'time', width: 160 },
    { title: '付款方', dataIndex: 'sender', ellipsis:true },
    { title: ' ', dataIndex: 'to_icon', width: 30 },
    { title: '收款方', dataIndex: 'recipient', ellipsis:true },
    { title: '交易费用', dataIndex: 'fee_usd', width: 150 },
    { title: 'Gas 消耗', dataIndex: 'gas_used', width: 100, align: 'right' },
];
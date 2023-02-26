const MOCK_TX_LIST = 'transactions'

/**
 * 获取交易列表
 * @returns 存储在浏览器的交易列表
 */
export function getTxList(): API.TransactionDetail[] {
    const s = localStorage.getItem(MOCK_TX_LIST);
    if (s) {
        return JSON.parse(s);
    }
    return [];
}

/**
 * 最新的交易列表
 * @param tx 新增的交易
 */
export function addTx(tx: API.TransactionDetail): API.TransactionDetail[] {
    const Txs = getTxList();
    Txs.unshift(tx)
    localStorage.setItem(MOCK_TX_LIST, JSON.stringify(Txs));
    return Txs;
}

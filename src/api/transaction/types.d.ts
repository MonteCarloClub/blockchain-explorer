declare namespace API {

    /** 交易列表参数 */
    type TransactionListParams = {
        q?: string;
        s: string;
        limit: number;
        offset: number;
    };

    /** 交易列表 */
    type TransactionListResponse = {
        id: string;
        from: string;
        to: string;
    }[];

    /** 交易详细信息参数 */
    type TransactionDetailParams = {
        tx_hash: string;
    };

    /** 交易详细信息 */
    type TransactionDetail = {
        tx_hash?: string;
        height?: number;
        status?: string;
    } & TransactionSendParams;

    /** 交易详细信息接口的返回值 */
    type TransactionDetailResponse = {
        tx: TransactionDetail
    };

    /** 发送交易的参数 */
    type TransactionSendParams = {
        to?: string;
        from?: string;
        nonce?: string;
        signature?: string;
        crypto_method?: string;
        data?: string;
        pubkey?: string;
    };

    /** 发送交易的返回值 */
    type TransactionSendResponse = {
        tx_hash: string;
    };
}
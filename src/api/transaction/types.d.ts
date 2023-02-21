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
        id: string;
    };

    /** 交易详细信息 */
    type TransactionDetailResponse = {
        id: string;
        from: string;
        to: string;
    };
}
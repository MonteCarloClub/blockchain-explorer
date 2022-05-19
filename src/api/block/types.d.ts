declare namespace API {

    /** 交易列表参数 */
    type BlockListParams = {
        q?: string;
        s: string;
        limit: number;
        offset: number;
    };

    /** 交易列表 */
    type BlockList = {
        id: string;
    }[];

    /** 交易详细信息参数 */
    type BlockDetailParams = {
        id: string;
    };

    /** 交易详细信息 */
    type BlockDetail = {
        id: string;
    };
}
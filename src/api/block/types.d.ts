declare namespace API {

    /** 区块列表参数 */
    type BlockListParams = {
        q?: string;
        s: string;
        limit: number;
        offset: number;
    };

    /** 区块列表 */
    type BlockListResponse = {
        id: string;
    }[];

    /** 区块详细信息参数 */
    type BlockDetailParams = {
        id: string;
    };

    /** 区块详细信息 */
    type BlockDetailResponse = {
        id: string;
    };
}
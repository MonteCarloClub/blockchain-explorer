import { request } from '@/utils/request';

/**
 * 获取最近的交易列表
 * @param data 请求参数
 * @returns 交易详细信息
 */
 export function list(params: API.BlockListParams) {
    return request<API.BlockList>(
        {
            url: '/blocks',
            method: 'get',
            params,
        }
    );
}

/**
 * 获取交易的详细信息
 * @param data 请求参数
 * @returns 交易详细信息
 */
export function detail(data: API.BlockDetailParams) {
    return request<API.BlockDetail>(
        {
            url: '/block/detail',
            method: 'post',
            data,
        }
    );
}

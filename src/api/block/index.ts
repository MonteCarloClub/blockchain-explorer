import { request } from '@/api/request';

/**
 * 获取最近的区块列表
 * @param data 请求参数
 * @returns 区块详细信息
 */
 export function list(params: API.BlockListParams) {
    return request<API.BlockListResponse>(
        {
            url: '/blocks',
            method: 'get',
            params,
        }
    );
}

/**
 * 获取区块的详细信息
 * @param data 请求参数
 * @returns 区块详细信息
 */
export function detail(data: API.BlockDetailParams) {
    return request<API.BlockDetailResponse>(
        {
            url: '/block/detail',
            method: 'post',
            data,
        }
    );
}

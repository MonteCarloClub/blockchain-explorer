import { request } from '@/api/request';

/**
 * 获取最近的交易列表
 * @param data 请求参数
 * @returns 交易详细信息
 */
 export function list(params: API.TransactionListParams) {
    return request<API.TransactionListResponse>(
        {
            url: '/transactions',
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
export function detail(data: API.TransactionDetailParams) {
    return request<API.TransactionDetailResponse>(
        {
            url: '/query',
            method: 'post',
            data
        }
    );
}

/**
 * 发送交易
 * @param data 请求参数
 * @returns 交易哈希
 */
export function send(data: API.TransactionSendParams) {
    return request<API.TransactionSendResponse>(
        {
            url: '/depository',
            method: 'post',
            data,
        }
    );
}

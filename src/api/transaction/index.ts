import { request } from '@/utils/request';

/**
 * 获取最近的交易列表
 * @param data 请求参数
 * @returns 交易详细信息
 */
 export function list(params: API.TransactionListParams) {
    return request<API.TransactionList>(
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
    return request<API.TransactionDetail>(
        {
            url: '/transaction/detail',
            method: 'post',
            data,
        }
    );
}

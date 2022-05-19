import { request } from '@/utils/request';

/**
 * 获取地址的详细信息
 * @param data 请求参数
 * @returns 地址详细信息
 */
export function detail(data: API.AddressDetailParams) {
    return request<API.AddressDetail>(
        {
            url: '/address/detail',
            method: 'post',
            data,
        }
    );
}

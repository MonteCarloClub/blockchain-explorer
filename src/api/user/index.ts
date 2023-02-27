import { request } from '@/utils/request';

/**
 * 获取交易的详细信息
 * @param data 请求参数
 * @returns 交易详细信息
 */
export function smKeyPairs() {
    return request<API.UserSMKeyPairsResponse>(
        {
            url: '/keygen',
            method: 'post'
        }
    );
}

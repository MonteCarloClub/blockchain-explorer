import { request } from '@/api/request';

/**
 * 获取 sm 密钥对
 * @param data 请求参数
 * @returns SM 密钥对
 */
export function smKeyPairs() {
    return request<API.UserSMKeyPairsResponse>(
        {
            baseURL: '/sm/',
            url: '/keygen',
            method: 'post'
        }
    );
}

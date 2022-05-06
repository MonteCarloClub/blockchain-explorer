import axios from 'axios';
import { message as $message } from 'ant-design-vue';
import type { AxiosRequestConfig } from 'axios';

export interface RequestOptions {
    /** 书否直接返回 Data */
    isGetDataDirectly?: boolean
    /** 请求成功是提示信息 */
    successMsg?: string;
    /** 请求失败是提示信息 */
    errorMsg?: string;
}

export type Response<T = any> = {
    code: number;
    message: string;
    data: T;
};

export type BaseResponse<T = any> = Promise<Response<T>>;


const service = axios.create({
    baseURL: '/api/',
    timeout: 6000,
});

service.interceptors.request.use(
    (config) => {
        // 不需要鉴权
        return config;
    },
    (error) => {
        Promise.reject(error);
    },
);

const UNKNOWN_ERROR = '未知错误，请重试';

service.interceptors.response.use(
    (response) => {
        const res = response.data;
        return res;
    },
    (error) => {
        // 处理 422 或者 500 的错误异常提示
        const errMsg = error?.response?.data?.message ?? UNKNOWN_ERROR;
        $message.error(errMsg);
        error.message = errMsg;
        return Promise.reject(error);
    },
);

export const request = async <T = any>(
    config: AxiosRequestConfig,
    options: RequestOptions = {},
): Promise<T> => {
    try {
        const res = await service.request(config);

        // 默认直接返回数据
        const { successMsg, errorMsg, isGetDataDirectly = true } = options;
        // 弹窗提示
        successMsg && $message.success(successMsg);
        errorMsg && $message.error(errorMsg);

        return isGetDataDirectly ? res.data : res;
    } catch (error: any) {
        return Promise.reject(error);
    }
};
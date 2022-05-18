/**
 * 参考：
 * https://staging-cn.vuejs.org/guide/reusability/composables.html
 * https://staging-cn.vuejs.org/guide/typescript/composition-api.html#typing-ref
 */
import { ref, isReactive, watchEffect } from 'vue'
import type { Ref } from 'vue'
import type { Response } from '@/utils/request'

/**
 * 工厂函数，根据传入的 api 函数构造相应的组合式函数，便于组件中复用
 * @param apifunc api 函数
 * @returns 组合式函数
 */
export function useFetchFactory<T, R>(apifunc: (params: T) => Promise<Response<R>>) {

    const data: Ref<R | null> = ref(null);
    const error: Ref<string | null> = ref(null);

    return function (params: T) {
        // 取值函数
        async function doFetch() {
            // reset state before fetching..
            data.value = null;
            error.value = null;
            
            apifunc(params)
                .then((res) => data.value = res.data)
                .catch((err) => (error.value = err))
        }

        if (isReactive(params)) {
            // setup reactive re-fetch if input URL is a ref
            watchEffect(doFetch)
        } else {
            // otherwise, just fetch once
            doFetch()
        }

        return { data, error }
    }
}
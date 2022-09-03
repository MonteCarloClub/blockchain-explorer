<template>
    <a-form :model="requestInfo" name="basic" autocomplete="off" @finish="onFinish">
        <a-form-item label="URL" name="url">
            <a-input v-model:value="requestInfo.url" style="width: 374px" />
        </a-form-item>

        <a-form-item label="方式" name="method">
            <a-select v-model:value="requestInfo.method" placeholder="选择请求类型" style="width: 100px" :options="options">
            </a-select>
        </a-form-item>

        <a-form-item label="参数" name="params">
            <a-space v-for="(param, index) in requestInfo.params" :key="index" style="display: flex; margin-bottom: 8px"
                align="baseline">
                <a-form-item :name="['params', index, 'key']">
                    <a-input v-model:value="param.key" placeholder="参数名" />
                </a-form-item>
                <a-form-item :name="['params', index, 'value']">
                    <a-input v-model:value="param.value" placeholder="参数值" />
                </a-form-item>
            </a-space>
            <a-space>
                <a-button style="width: 374px" type="dashed" block @click="addParameter">
                    <PlusOutlined /> 添加参数
                </a-button>
            </a-space>
        </a-form-item>

        <a-form-item>
            <a-button type="primary" html-type="submit">发起请求</a-button>
        </a-form-item>
    </a-form>
    <div class="responce-panel">
        {{ responce }}
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { request } from '@/utils/request';
import { message } from 'ant-design-vue';

const options = [
    { value: 'get', label: 'GET' },
    { value: 'post', label: 'POST' },
]

type Param = {
    key: string;
    value: any;
}

interface Request {
    url: string;
    method: 'GET' | 'POST';
    params: Array<Param>;
}

const constructParams = (params: Array<Param>): { [key: string]: any } => {
    let p: { [key: string]: any } = {};
    for (const param of params) {
        const { key, value } = param
        if (key && value) {
            p[key] = value;
        }
    }
    return p;
};

let responce = ref('响应');

const requestInfo = reactive<Request>({
    url: '',
    method: 'GET',
    params: []
});

const addParameter = (): void => {
    requestInfo.params?.push({
        key: '',
        value: undefined,
    });
}

const onFinish = (values: Request) => {
    const { params, url, method } = values;
    if (!url) {
        message.error('url 不能为空');
        return
    }

    const data = constructParams(params);
    request<any>({
        url,
        method,
        data,
        params: data
    }).then((res) => {
        responce.value = res.data
    })
}
</script>

<style scoped>
.responce-panel {
    background-color: #fafafa;
    padding: 16px;
    margin-bottom: 20px;
}
</style>
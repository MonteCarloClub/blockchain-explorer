<template>
    <a-card hoverable style="width: 480px; margin: 10% auto;" title="登录">

        <a-form :model="formState" name="basic" :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }" autocomplete="off"
            @finish="onFinish" labelAlign="left">
            <a-form-item label="用户名" name="username">
                <a-input v-model:value="formState.username" />
            </a-form-item>

            <a-form-item label="密码" name="password">
                <a-input-password v-model:value="formState.password" />
            </a-form-item>

            <a-form-item :wrapper-col="{ offset: 4, span: 20 }">
                <a-button type="primary" html-type="submit">登录</a-button>
            </a-form-item>
        </a-form>
    </a-card>
</template>
<script lang="ts">
import { message } from 'ant-design-vue';
import { defineComponent, reactive } from 'vue';
import router from '@/router';

interface FormState {
    username: string;
    password: string;
    remember: boolean;
}

export default defineComponent({
    setup() {

        const formState = reactive<FormState>({
            username: '',
            password: '',
            remember: true,
        });
        const onFinish = (values: any) => {
            router.replace('/user/0x77777778c7577dc7629e48dd0590cc48be0314b4');
            message.success(
                '登录成功',
                5,
            );
        };

        return {
            formState,
            onFinish
        };
    },
});
</script>

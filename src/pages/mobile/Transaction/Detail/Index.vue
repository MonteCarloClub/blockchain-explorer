<template>
    <SubTitle title="交易详情" type="h1"></SubTitle>
    <a-list class="container">
        <ALItem title="交易哈希">{{ hash }}</ALItem>
        <ALItem title="状态">
            <a-tag v-if="transaction?.status === '1'" color="#000">
                <template #icon>
                    <close-circle-outlined />
                </template>
                成功
            </a-tag>
            <a-tag v-else color="default">
                <template #icon>
                    <check-circle-outlined />
                </template>
                失败
            </a-tag>
        </ALItem>
        <ALItem title="区块高度">{{ transaction?.height }}</ALItem>
        <ALItem title="Nonce">{{ transaction?.nonce }}</ALItem>
        <ALItem title="发送者">
            <router-link :to="'/address/' + transaction?.from">{{ transaction?.from }}</router-link>
        </ALItem>
        <ALItem title="接收方">
            <router-link :to="'/address/' + transaction?.to">{{ transaction?.to }}</router-link>
        </ALItem>
        <ALItem title="签名">
            <!-- <div>r : <a-tag style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;"> {{ transaction?.r }}</a-tag>
            </div>
            <div style="margin: 6px 0;">s : <a-tag> {{ transaction?.s }} </a-tag>
            </div>
            <div>v : <a-tag> {{ transaction?.v }} </a-tag>
            </div> -->
            <a-tag> {{ transaction?.signature }} </a-tag>
        </ALItem>
        <ALItem title="存证">{{ transaction?.data }}</ALItem>
    </a-list>
</template>

<script setup lang="ts">
import ALItem from "@/components/mobile/AntListItem.vue";
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons-vue';
import SubTitle from "@/components/mobile/SubTitle.vue";
import { detail } from "@/api/transaction";
import { ref, reactive } from "vue";
const hasResult = ref(false);

const props = defineProps({
  hash: String,
});

let transaction = reactive<API.TransactionDetail>({});

const params = reactive({
  tx_hash: props.hash || "123",
});

detail(params).then((res) => {
  if (res && res.data) {
    transaction = res.data.tx;
    hasResult.value = true;
  } else {
    console.log("查询结果为空");
  }
});
</script>

<style scoped>
.container {
    /* background-color: #fafafa; */
    padding: 0 var(--margin-lr, 92px);
}

.ant-tag{
    margin-right: 0px;
}
</style>
<template>
  <div v-if="hasResult">
    <Title title="交易详情"></Title>
    <div class="info">
      <Item title="交易哈希">{{ hash }}</Item>
      <Item title="状态">
        <a-tag v-if="transaction?.status === '1'" color="#000"> 已确认 </a-tag>
        <a-tag v-else color="default"> 未确认 </a-tag>
      </Item>
      <Item title="区块高度">{{ transaction?.height }}</Item>
      <Item title="Nonce">
        <div>{{ transaction?.nonce }}</div>
      </Item>
      <Item title="发送者">
        <router-link :to="'/address/' + transaction?.from">{{
          transaction?.from
        }}</router-link>
      </Item>
      <Item title="接收方">
        <router-link :to="'/address/' + transaction?.to">{{
          transaction?.to
        }}</router-link>
      </Item>
      <Item title="签名">
        <!-- <div>r : <a-tag> {{transaction?.r}} </a-tag></div>
            <div style="margin: 6px 0;">s : <a-tag> {{transaction?.s}} </a-tag></div>
            <div>v : <a-tag> {{transaction?.v}} </a-tag></div> -->
        <a-tag> {{ transaction?.signature }} </a-tag>
      </Item>
      <Item title="存证">
        <div class="text-area">
          {{ transaction?.data }}
        </div>
      </Item>
    </div>
  </div>
  <div v-else>
    <a-empty style="margin-top: 200px">
      <template #description>
        <div> 未搜索到哈希为 </div>
        <a-tag> {{ hash }} </a-tag>
        <div> 的交易 </div>
      </template>
    </a-empty>
  </div>
</template>

<script setup lang="ts">
import { detail } from "@/api/transaction";
import { ref, reactive } from "vue";
import Title from "@/components/Title.vue";
import Item from "@/components/Item.vue";

const hasResult = ref(false);

const props = defineProps({
  hash: String,
});

const transaction = ref<API.TransactionDetail>({});

const params = reactive({
  tx_hash: props.hash || "123",
});

detail(params).then((res) => {
  if (res && res.data.tx) {
    transaction.value = res.data.tx;
    hasResult.value = true;
    
  } else {
    console.log("查询结果为空");
  }
});
</script>

<style scoped>
.info {
  margin-bottom: 32px;
}

.text-area {
  border-left: lightgray 2px solid;
  padding-left: 6px;
  color: gray;
}
</style>

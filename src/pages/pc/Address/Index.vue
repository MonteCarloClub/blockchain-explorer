<template>
  <Title title="地址详情"></Title>
  <AddressDesc :data="summary" :maps="maps"></AddressDesc>
  <a-divider />
  <h2>交易列表</h2>
  <TransactionTable :data="transactions"></TransactionTable>
</template>

<script setup lang="ts">
import Title from "@/components/Title.vue";
import TransactionTable from "@/components/tables/TransactionTable.vue";
import AddressDesc from "./AddressDesc.vue";
import { ref, watch, reactive } from "vue";
import { maps } from "@/models/address";
import { getTxList } from "@/utils/storage";
import { detail } from "@/api/transaction";
import { parallelWithLimit } from "@/utils/promises";
import { useRoute } from "vue-router";
const route = useRoute();

/**相同路由下，地址改变需要重新获取地址信息 */
watch(
  () => route.params.address,
  async (newAdd) => {
    init(typeof newAdd === "object" ? newAdd[0] : newAdd);
  }
);

const props = defineProps({
  address: String,
});

const summary = reactive({
  address: '',
  nonce: 0,
});

const transactions = ref<API.TransactionDetail[]>([]);

/**自动初始化 */
props.address && init(props.address);

function init(address: string) {
  /**当前地址 */
  summary.address = address;

  /**从本地获取与当前地址相关的交易 */
  transactions.value = getTxList().filter(
    (tx) => tx.from === address || tx.to === address
  );

  /**获取交易最新的状态 */
  const tasks = transactions.value.map((tx) =>
    detail({ tx_hash: tx.tx_hash || "" })
  );
  parallelWithLimit(tasks, 3, (index, res) => {
    transactions.value[index] = res.data.tx;
  });
}
</script>

<template>
  <a-table
    :columns="columns"
    :data-source="data"
    size="middle"
    :pagination="{ position: ['bottomCenter'] }"
  >
    <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex === 'tx_hash'">
        <router-link :to="'/transaction/' + text">{{ text }}</router-link>
      </template>
      <template v-if="column.dataIndex === 'height'">
        <router-link :to="'/block/' + text">{{ text || "-" }}</router-link>
      </template>
      <template v-if="column.dataIndex === 'status'">
        <a-tag v-if="text === '1'" color="#000"> 成功 </a-tag>
        <a-tag v-if="text === '-1'" color="#F00"> 失败 </a-tag>
        <a-tag v-if="text != '1' && text != '-1'" color="default"> 未确认 </a-tag>
      </template>
      <template v-if="column.dataIndex === 'to_icon'">
        <a-space>
          <arrow-right-outlined />
        </a-space>
      </template>
      <template v-if="column.dataIndex === 'from' || column.dataIndex === 'to'">
        <router-link :to="'/address/' + text">{{ text }}</router-link>
      </template>
    </template>
  </a-table>
</template>

<script setup lang="ts">
import { ArrowRightOutlined } from "@ant-design/icons-vue";
import { columns } from "@/models/transaction";
import { PropType } from "vue";

defineProps({
  data: Array as PropType<any[] | null>,
});
</script>

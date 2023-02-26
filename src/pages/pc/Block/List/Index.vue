<template>
  <Title title="区块列表" />
  <BlockTable :data="data"></BlockTable>
</template>

<script lang="ts" setup>
import BlockTable from "@/components/tables/BlockTable.vue";
import { useBlockList } from "@/composition/useMock";
import Title from "@/components/Title.vue";
import { reactive } from "vue";

const params = reactive({
  s: "id(desc)",
  limit: 10,
  offset: 0,
});

const { data, error } = useBlockList(params);
</script>

<style scoped></style>

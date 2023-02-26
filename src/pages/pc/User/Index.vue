<template>
  <div v-if="hasUser">
    <Title title="我的信息"> {{ userData.address }} </Title>
    <AddressDesc :data="summary" :maps="maps"></AddressDesc>
    <a-divider />
    <div style="display: flex; align-items: center; margin-bottom: 12px">
      <h2 style="flex: 1">交易列表</h2>
      <a-button type="primary" @click="txFormVisible = true">发起交易</a-button>
    </div>
    <TransactionTable :data="transactions"></TransactionTable>
  </div>
  <div v-else>
    <a-empty style="margin-top: 100px">
      <template #description>
        <span> 尚未创建任何账户 </span>
      </template>
      <a-button type="primary" @click="createAccount">立即创建账户</a-button>
    </a-empty>
  </div>
  <a-modal
    v-model:visible="txFormVisible"
    title="发起交易"
    @ok="handleSendTX"
    okText="发起"
    cancelText="取消"
  >
    <a-form
      :model="txState"
      name="basic"
      :label-col="{ span: 4 }"
      :wrapper-col="{ span: 20 }"
      autocomplete="off"
    >
      <a-form-item label="目的地址" name="to">
        <a-input
          v-model:value="txState.to"
          placeholder="请填写目的地址（长度为40的十六进制串）"
        />
      </a-form-item>

      <a-form-item label="加密算法" name="crypto_method">
        <a-select
          v-model:value="txState.crypto_method"
          placeholder="请选择加密算法"
        >
          <a-select-option value="default">default</a-select-option>
          <a-select-option value="sm">sm</a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item label="存证" name="data">
        <a-textarea
          :auto-size="{ minRows: 3, maxRows: 8 }"
          v-model:value="txState.data"
          placeholder="请输入存证"
        />
      </a-form-item>

      <a-form-item label="签名" name="signature">
        <a-textarea
          :auto-size="{ minRows: 2, maxRows: 8 }"
          v-model:value="txState.signature"
          placeholder="请输入签名"
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script setup lang="ts">
import Title from "@/components/Title.vue";
import AddressDesc from "./AddressDesc.vue";
import TransactionTable from "@/components/tables/TransactionTable.vue";
import { reactive, ref } from "vue";
import { message } from "ant-design-vue";
import { maps } from "@/models/address";
import { send } from "@/api/transaction";
import { random256, drivePub, keccak256Hash } from "@/utils/crypto";
import { USER_ACCOUNT } from "@/common/constants";
import { getTxList, addTx } from "@/utils/storage";

const hasUser = ref(false);

type User = {
  sk?: string;
  PK?: string;
  address?: string;
};
const transactions = ref<API.TransactionDetail[]>(getTxList());
const summary = ref<any>({});

// 用户的离线数据
let userData = reactive<User>({});

function createAccount() {
  const sk = random256();
  const { x, y, PK } = drivePub(sk);
  const address = keccak256Hash([x, y]).slice(-40);
  const user: User = {
    sk,
    PK,
    address,
  };
  // 将用户存在本地
  localStorage.setItem(USER_ACCOUNT, JSON.stringify(user));
  initUser(user);
}

const s = localStorage.getItem(USER_ACCOUNT);
if (s) {
  hasUser.value = true;
  initUser(s);
}

function initUser(user: string | User) {
  if (typeof user === "string") {
    user = JSON.parse(user) as User;
  }
  userData = user;
  summary.value = {
    address: user.address,
    transactionCount: transactions.value.length,
    nonce: transactions.value.length
  }
}

const txFormVisible = ref(false);
const txState = reactive<API.TransactionSendParams>({
  from: userData.address,
  pubkey: userData.PK,
  crypto_method: "default",
  nonce: transactions.value.length.toString(),
});

function handleSendTX() {
  txFormVisible.value = false;
  send(txState)
    .then((res) => {
      // console.log(res.tx_hash);
      message.success("成功发送交易");
      transactions.value = addTx({ ...txState, tx_hash: res.tx_hash });
    })
    .catch((error) => {
      console.log(error);
    });
}
</script>

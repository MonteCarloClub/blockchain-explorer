<template>
  <div v-if="hasUser">
    <Title title="我的信息" />
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
          @select="cryptoMethodSelected"
        >
          <a-select-option
            v-for="method in Object.keys(cryptoMethodsMap)"
            :key="method"
            :value="method"
          >
            {{ method }}
          </a-select-option>
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
import { computed, reactive, ref } from "vue";
import { message } from "ant-design-vue";
import { maps } from "@/models/address";
import { send } from "@/api/transaction";
import { smKeyPairs } from "@/api/user";
import { random256, drivePub, keccak256Hash } from "@/utils/crypto";
import { USER_ACCOUNT } from "@/common/constants";
import { getTxList, addTx } from "@/utils/storage";
import { parallelWithLimit } from "@/utils/promises";
import { detail } from "@/api/transaction";

const transactions = ref<API.TransactionDetail[]>(getTxList());
/**获取交易最新的状态 */
const tasks = transactions.value.map((tx) =>
  detail({ tx_hash: tx.tx_hash || "" })
);
parallelWithLimit(tasks, 3, (index, res) => {
  transactions.value[index] = res.data.tx;
});

const hasUser = ref(false);

type User = {
  sk?: string;
  PK?: string;
  address?: string;
};

// 用户的离线数据
let userData = ref<User>({});
const summary = ref<any>({});

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
s && initUser(s);

function initUser(user: string | User) {
  if (typeof user === "string") {
    user = JSON.parse(user) as User;
  }
  hasUser.value = true;
  userData.value = user;
  summary.value = {
    address: user.address,
    nonce: computed(() => transactions.value.length),
  };
}

const txFormVisible = ref(false);
const txState = reactive<API.TransactionSendParams>({
  from: userData.value.address,
});

const cryptoMethodsMap = reactive<{ [key: string]: string | undefined }>({
  default: userData.value.PK,
});
function cryptoMethodSelected(method: keyof typeof cryptoMethodsMap) {
  txState.crypto_method = method.toString();
  txState.pubkey = cryptoMethodsMap[method];
}
cryptoMethodSelected("default");

/**尝试获取 sm 公私钥对 */
smKeyPairs().then((res) => {
  const { priv, pub } = res.data;
  cryptoMethodsMap.sm = pub;
});

function handleSendTX() {
  txFormVisible.value = false;
  send({
    ...txState,
    nonce: transactions.value.length.toString(),
  })
    .then((res) => {
      message.success("成功发送交易");
      const tempTx = { ...txState, tx_hash: res.data.tx_hash };
      addTx(tempTx);
      transactions.value.unshift(tempTx);
    })
    .catch((error) => {
      console.log(error);
    });
}
</script>

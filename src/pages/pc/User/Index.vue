<template>
    <Title title="我的信息"> {{ address }}</Title>
    <AddressDesc :data="data?.summary" :maps="maps"></AddressDesc>
    <a-divider />
    <div style="display: flex; align-items: center; margin-bottom: 12px;">
        <h2 style="flex: 1;">交易列表</h2>
        <a-button type="primary" @click="visible = true">发起交易</a-button>
    </div>
    <TransactionTable :data="data?.transactions"></TransactionTable>
    <a-modal v-model:visible="visible" title="发起交易" @ok="handleOk" okText="发起" cancelText="取消">
        <a-form :model="formState" name="basic" :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }" autocomplete="off">
            <a-form-item label="属性" name="property">
                <a-input v-model:value="formState.property" placeholder="直接输入 13 位的属性码" />
                <div style="margin: 6px 0"> 或 </div>
                <div style="display: flex; gap: 10px;">
                    <a-select @change="selected" v-model:value="formState.pos" placeholder="请选择属地">
                        <a-select-option value="0310101">上海</a-select-option>
                        <a-select-option value="0110101">北京</a-select-option>
                    </a-select>
                    <a-select @change="selected" v-model:value="formState.work" placeholder="请选择行业">
                        <a-select-option value="300021">教师</a-select-option>
                        <a-select-option value="001024">程序员</a-select-option>
                    </a-select>
                </div>
            </a-form-item>

            <a-form-item label="目标地址" name="to">
                <a-input v-model:value="formState.to" />
            </a-form-item>

            <a-form-item label="Gas Limit" name="gas">
                <a-input v-model:value="formState.gas" />
            </a-form-item>

            <a-form-item label="合约代码" name="contract">
                <a-textarea v-model:value="formState.contract" />
            </a-form-item>
        </a-form>
    </a-modal>
</template>

<script setup lang="ts">
import Title from '@/components/Title.vue';
import TransactionTable from "@/components/tables/TransactionTable.vue";
import AddressDesc from "./AddressDesc.vue";
import { useAddressDetail } from "@/composition/useMock";
import { reactive, ref } from "vue"
import { maps } from "@/models/address";

const props = defineProps({
    address: String
})

// TODO: height may be null
const params = reactive({
    id: props.address || '123'
})


const { data, error } = useAddressDetail(params)

const visible = ref(false);

const formState = reactive<{ [key: string]: any }>({
    contract: undefined,
    to: undefined,
    property: undefined,
    gas: '',
    pos: undefined,
    work: undefined
})

const fakeTx = {
    "block_id": 13499801,
    "hash": "0x0f07cbf136644e19c279089ff96bf965963ccb0ebe254207931c92acf8dced23",
    "time": "2021-10-27 13:54:10",
    "status": "success",
    "sender": props.address,
    "recipient": formState.to,
    "gas_used": 14936857,
    "gas_limit": formState.gas,
    "input_hex": "67c354b50000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000004261617665206c75636b792c2069726f6e2062616e6b206c75636b792c20637265616d206e6f742e2079646576203a20696e63657374206261642c20646f6e7420646f000000000000000000000000000000000000000000000000000000000000",
    "input_size": "18",
    "v": "00",
    "r": "0e73549fe7fc8655b160c3a10f3db9594f2534c2d3bb9d38ebb84ffed11f5278",
    "s": "7240ed1a9242510171ee997da68563b56c78c8998564dcda2a98b443c9048424"
}

function selected() {
    formState.property = (formState.pos || '0000000') + (formState.work || '000000');
}

function pad2(n: number) {
  return (n < 10 ? '0' : '') + n;
}

function getTime() {
    var myDate = new Date();
    const y = myDate.getFullYear();    //获取完整的年份(4位,1970-????)
    const m = 1 + myDate.getMonth();   //获取当前月份(0-11,0代表1月)
    const d = myDate.getDate();        //获取当前日(1-31)
    
    const h = myDate.getHours();       //获取当前小时数(0-23)
    const mi = myDate.getMinutes();    //获取当前分钟数(0-59)
    const s = myDate.getSeconds();     //获取当前秒数(0-59)
    return `${y}-${pad2(m)}-${pad2(d)} ${pad2(h)}:${pad2(mi)}:${pad2(s)} `
}

function handleOk() {
    visible.value = false;
    setTimeout(() => {
        fakeTx.recipient = formState.to;
        fakeTx.time = getTime();
        data.value?.transactions.splice(0, 0, fakeTx);
    }, 1000);
}
</script>
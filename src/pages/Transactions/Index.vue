<template>
    <h1>Transactions</h1>
</template>


<script lang="ts">
import { list } from "@/api/transaction";

export default {
    mounted() {
        list({
            s: 'internal_value_usd(desc)',
            limit: 10,
            offset: 0
        }).then(res => {
            
        })
    }
}
</script>

<style scoped>
h1 {
    text-align: center;
}
</style>
import { useFetchFactory } from '@/api/factory'
import txs from '@/mock/transactions.json'
import blks from '@/mock/blocks.json'
import shuffle from "@/utils/shuffle";

export const useTransactionList = useFetchFactory<API.TransactionListParams, typeof txs.data>(
    (p: API.TransactionListParams) => {
        const data = shuffle<typeof txs.data[0]>(txs.data)

        return Promise.resolve({
            code: 1,
            message: 'mock',
            data,
        })
    }
)


export const useBlockList = useFetchFactory<API.BlockListParams, typeof blks.data>(
    (p: API.BlockListParams) => {
        const data = shuffle<typeof blks.data[0]>(blks.data)

        return Promise.resolve({
            code: 1,
            message: 'mock',
            data,
        })
    }
)
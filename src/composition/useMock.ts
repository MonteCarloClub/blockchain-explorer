import { useFetchFactory } from '@/api/factory'
import shuffle from "@/utils/shuffle";
import { wrapResponse } from "@/api/request";

import txs from '@/mock/transactions.json'
import blks from '@/mock/blocks.json'
import address from '@/mock/address.json'
import block from '@/mock/block.json'

export const useTransactionList = useFetchFactory<API.TransactionListParams, typeof txs.data>(
    () => {
        const data = shuffle<typeof txs.data[0]>(txs.data);
        return Promise.resolve(wrapResponse(data));
    }
)

export const useTransactionDetail = useFetchFactory<API.TransactionDetailParams, typeof txs.data[0]>(
    () => {
        const data = txs.data[0]
        return Promise.resolve(wrapResponse(data))
    }
)

export const useBlockList = useFetchFactory<API.BlockListParams, typeof blks.data>(
    () => {
        const data = shuffle<typeof blks.data[0]>(blks.data);
        return Promise.resolve(wrapResponse(data));
    }
)

export const useBlockDetail = useFetchFactory<API.BlockDetailParams, typeof block>(
    () => {
        const data = block
        return Promise.resolve(wrapResponse({
            ...data,
            transactions: txs.data
        }))
    }
)

export const useAddressDetail = useFetchFactory<API.AddressDetailParams, typeof address>(
    () => {
        const data = address
        return Promise.resolve(wrapResponse({
            ...data,
            transactions: txs.data
        }))
    }
)
import { useFetchFactory } from '@/api/factory'
import txs from '@/mock/transactions.json'

export const useTransactionList = useFetchFactory<API.TransactionListParams, typeof txs.data>(
    (p: API.TransactionListParams) => {
        return Promise.resolve({
            code: 1,
            message: 'mock',
            data: txs.data,
        })
    }
)
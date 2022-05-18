import { useFetchFactory } from '@/api/factory'
import { list } from "@/api/transaction/index";

/**获取交易列表 */
export const useTransactionList = useFetchFactory<API.TransactionListParams, API.TransactionList>(list)
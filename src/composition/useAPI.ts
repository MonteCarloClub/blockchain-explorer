import { useFetchFactory } from '@/api/factory'
import { list as txList } from "@/api/transaction/index";
import { list as blkList } from "@/api/block/index";

/**获取交易列表 */
export const useTransactionList = useFetchFactory<API.TransactionListParams, API.TransactionList>(txList)

export const useBlockList = useFetchFactory<API.BlockListParams, API.BlockList>(blkList)
import { useFetchFactory } from '@/api/factory'
import { list as txList } from "@/api/transaction/index";
import { detail as txDetail } from "@/api/transaction/index";
import { list as blkList } from "@/api/block/index";
import { detail as blkDetail } from "@/api/block/index";
import { detail as addrDetail } from "@/api/address/index";

/**获取交易列表 */
export const useTransactionList = useFetchFactory<API.TransactionListParams, API.TransactionListResponse>(txList)

/**获取交易的详细信息 */
export const useTransactionDetail = useFetchFactory<API.TransactionDetailParams, API.TransactionDetailResponse>(txDetail)

/**获取区块列表 */
export const useBlockList = useFetchFactory<API.BlockListParams, API.BlockListResponse>(blkList)

/**获取区块的详细信息 */
export const useBlockDetail = useFetchFactory<API.BlockDetailParams, API.BlockDetailResponse>(blkDetail)

/**获取区块的详细信息 */
export const useAddressDetail = useFetchFactory<API.AddressDetailParams, API.AddressDetailResponse>(addrDetail)
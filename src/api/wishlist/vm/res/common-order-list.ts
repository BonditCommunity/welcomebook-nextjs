import { ProductRes } from '@/api/product/vm/res/product';

export interface CommonOrderListRes {
    orderListId: number;
    product: ProductRes[];
}

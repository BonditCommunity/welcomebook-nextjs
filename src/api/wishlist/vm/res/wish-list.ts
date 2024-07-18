import { ProductRes } from '@/api/product/vm/res/product';

export interface WishListRes {
    wishListId: number;
    products: ProductRes[];
    totalAmount: number;
    countProduct: number;
    createdAt: Date;
    updatedAt: Date;
}

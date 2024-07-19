import { ProductInWishListRes } from './product-in-wish-list';

export interface WishListRes {
    wishListId: number;
    products: ProductInWishListRes[];
    totalAmount: number;
    countProduct: number;
    createdAt: Date;
    updatedAt: Date;
}

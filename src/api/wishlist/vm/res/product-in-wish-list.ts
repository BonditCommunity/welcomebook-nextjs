import { ProductStatus } from '@/api/product/vm/enum/product-status';

export interface ProductInWishListRes {
    id: number;
    productName: string;
    price: number;
    amazonPrice?: number;
    status: ProductStatus;
    imageUrl: string;
    orderUrl?: string;
    totalCount: number;
    updatedAt: Date;
    createdAt: Date;
}

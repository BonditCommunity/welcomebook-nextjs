import { ProductStatus } from '../enum/product-status';

export interface ProductRes {
    id: number;
    productName: string;
    price: number;
    status: ProductStatus;
    amazonPrice?: number;
    imageUrl: string;
    orderUrl?: string;
    createdAt: Date;
    updatedAt: Date;
}

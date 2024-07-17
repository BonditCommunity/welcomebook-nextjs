export interface ProductRes {
    id: number;
    productName: string;
    price: number;
    amazonPrice?: number;
    imageUrl: string;
    orderUrl?: string;
    createdAt: Date;
    updatedAt: Date;
}

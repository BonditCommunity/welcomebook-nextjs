import { Page } from '@/api/common/entity/page';
import { ProductRes } from '../entity/product';

export interface SearchProductsReq {
    keyword: string;
    page: number;
    size: number;
}

export interface SearchProductsRes extends Page<ProductRes> {}

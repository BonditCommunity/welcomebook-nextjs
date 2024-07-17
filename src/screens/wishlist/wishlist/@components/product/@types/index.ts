import { ComponentProps } from '@/@types';
import { ProductRes } from '@/api/product/entity/product';

export interface ProductProps extends ComponentProps {
    product: ProductRes;
    index: number;
}

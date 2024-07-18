import { ComponentProps } from '@/@types';
import { ProductRes } from '@/api/product/vm/res/product';

export interface ProductProps extends ComponentProps {
    product: ProductRes;
}

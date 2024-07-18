import { ComponentProps } from '@/@types';
import { ProductRes } from '@/api/product/vm/res/product';

export interface ProductComponentProps extends ComponentProps {
    product: ProductRes;
}

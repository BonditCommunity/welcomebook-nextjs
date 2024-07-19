import { ComponentProps } from '@/@types';
import { ProductInWishListRes } from '@/api/wishlist/vm/res/product-in-wish-list';

export interface ProductProps extends ComponentProps {
    product: ProductInWishListRes;
}

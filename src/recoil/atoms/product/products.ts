import { persistentAtom } from '../@helper';
import { ProductRes } from '@/api/product/vm/res/product';

export const productsState = persistentAtom<ProductRes[]>({
    key: 'productsState',
    defaultValue: [],
});

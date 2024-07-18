import { WishListRes } from '@/api/wishlist/vm/res/wish-list';
import { persistentAtom } from '../@helper';

export const wishListState = persistentAtom<WishListRes>({
    key: 'wishListState',
});

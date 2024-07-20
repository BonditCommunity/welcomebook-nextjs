import { persistentAtom } from '../@helper';
import { MyPageRes } from '@/api/my-page/vm/res/my-page';

export const myPageState = persistentAtom<MyPageRes | undefined>({
    key: 'myPageState',
    defaultValue: undefined,
});

import { persistentAtom } from '../@helper';
import { UserInfoRes } from '@/api/user-info/vm/res/user-info';

export const userInfoState = persistentAtom<UserInfoRes | undefined>({
    key: 'userInfoState',
    defaultValue: undefined,
});

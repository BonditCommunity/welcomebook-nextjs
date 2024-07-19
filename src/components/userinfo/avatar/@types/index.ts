import { ComponentProps } from '@/@types';
import { UserInfoRes } from '@/api/user-info/vm/res/user-info';

export interface AvatarProps extends ComponentProps {
    user?: UserInfoRes;
    size?: number;
}

import { ComponentProps } from '@/@types';
import { CollegeRes } from '@/api/college/vm/res/college';
import { UserInfoRes } from '@/api/user-info/vm/res/user-info';

export interface AvatarProps extends ComponentProps {
    user?: UserInfoRes;
    college?: CollegeRes;
    size?: number;
    file?: File;
}

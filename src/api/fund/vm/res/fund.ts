import { MyPageRes } from '@/api/my-page/vm/res/my-page';
import { UserInfoRes } from '@/api/user-info/vm/res/user-info';

export interface FundRes {
    id: number;
    amount: number;
    donor?: UserInfoRes;
    recipient: MyPageRes;
    countryNumber?: string;
    mobile?: string;
    createdAt: Date;
    updatedAt: Date;
}

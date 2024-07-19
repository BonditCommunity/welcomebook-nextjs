import { UserInfoRes } from '@/api/user-info/vm/res/user-info';
import { FundRes } from './fund';

export interface FundInMyPageRes {
    id: number;
    funds: FundRes[];
    totalFund: number;
    userInfo: UserInfoRes;
    createdAt: Date;
    updatedAt: Date;
}

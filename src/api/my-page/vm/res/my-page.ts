import { CollegeRes } from '@/api/college/vm/res/college';
import { FundRes } from '@/api/fund/vm/res/fund';
import { LetterRes } from '@/api/letter/vm/res/letter';
import { UserInfoRes } from '@/api/user-info/vm/res/user-info';

export interface MyPageRes {
    id: number;
    letters: LetterRes[];
    funds: FundRes;
    totalFund: number;
    userInfo: UserInfoRes;
    url?: string;
    college: CollegeRes;
    createdAt: Date;
    updatedAt: Date;
}

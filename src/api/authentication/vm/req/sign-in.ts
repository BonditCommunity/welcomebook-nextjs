import { SnsType } from '@/api/user-info/vm/enum/sns-type';

export interface SignInReq {
    snsType: SnsType;
    snsToken: string;
}

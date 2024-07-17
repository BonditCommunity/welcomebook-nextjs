import { SignInStatus } from '../entity/@enums';

export interface SignInReq {
    snsType: 'GOOGLE' | 'APPLE';
    snsToken: string;
}

export interface SignInRes {
    status?: SignInStatus;
    customToken?: string;
}

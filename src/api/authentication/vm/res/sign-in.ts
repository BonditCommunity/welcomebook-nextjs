import { SignInStatus } from '../enum/sign-in-status';

export interface SignInRes {
    status?: SignInStatus;
    customToken?: string;
}

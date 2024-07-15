import { User } from 'firebase/auth';

export interface AuthContext {
    user?: User;
    token?: string;
    loading: boolean;
}

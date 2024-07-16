import { User } from 'firebase/auth';

export interface AuthContext {
    user?: User;
    loading: boolean;
}

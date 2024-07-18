import { SnsType } from '../enum/sns-type';

export interface UserInfoRes {
    id: number;
    firebaseUid: string;
    name?: string;
    snsType: SnsType;
    collegeId?: number;
    collegeName?: string;
    isCollegeHide: boolean;
    myPageId?: number;
    wishListId?: number;
    orderListId?: number;
    imageUrl?: string;
    firstDay?: Date;
    address?: string;
}

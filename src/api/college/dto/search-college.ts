import { Pagination } from '@/api/common/dto/pagination';
import { College } from '../entity/college';

export interface SearchCollegeReq {
    keyword: string;
    page: number;
    size: number;
}

export interface SearchCollegeRes extends Pagination<College> {}

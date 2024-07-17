import { Page } from '@/api/common/entity/page';
import { CollegeRes } from '../entity/college';

export interface SearchCollegesReq {
    keyword: string;
    page: number;
    size: number;
}

export interface SearchCollegesRes extends Page<CollegeRes> {}

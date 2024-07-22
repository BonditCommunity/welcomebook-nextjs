import { CollegeRes } from '@/api/college/vm/res/college';

function replaceSpace(value: string): string {
    return value.replace(/ /g, '');
}

export function filterCollegeRes(college: CollegeRes, value: string): boolean {
    const lower = value.toLowerCase();
    if (
        replaceSpace(college.name.toLowerCase()).includes(value.toLowerCase())
    ) {
        return true;
    } else if (
        replaceSpace(college.shortName.toLowerCase()).includes(
            value.toLowerCase(),
        )
    ) {
        return true;
    } else if (
        replaceSpace(college.displayName.toLowerCase()).includes(
            value.toLowerCase(),
        )
    ) {
        return true;
    }
    return false;
}

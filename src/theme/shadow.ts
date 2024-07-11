import { colorWithAlpha } from '@/helpers/common/color-with-alpha';
import { Color } from './@enums';

export const dropShadow = `0px 4px 4px 0px ${colorWithAlpha(
    Color.black,
    0.25,
)}`;

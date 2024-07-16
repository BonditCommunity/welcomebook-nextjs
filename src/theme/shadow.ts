import { colorWithAlpha } from '@/helpers/common/color-with-alpha';
import { color } from './theme';

export const dropShadow = `0px 4px 4px 0px ${colorWithAlpha(
    color.black.default,
    0.25,
)}`;

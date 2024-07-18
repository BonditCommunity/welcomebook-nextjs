import { CSSObject } from '@mui/material/styles';

export const hideScrollBarX: CSSObject = {
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    overflowX: 'auto',
    '&::-webkit-scrollbar': { display: 'none' },
};

export const hideScrollBarY: CSSObject = {
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    overflowY: 'auto',
    '&::-webkit-scrollbar': { display: 'none' },
};

export const maxlines = (line: number): CSSObject => {
    return {
        display: '-webkit-box',
        overflow: 'hidden',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: line,
    };
};

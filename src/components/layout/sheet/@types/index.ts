import { BoxProps } from '@mui/material/Box';

export type SheetProps = BoxProps & {
    type?: 'default' | 'black' | 'white';
};

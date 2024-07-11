import type { InputBaseProps as MuiInputBaseProps } from '@mui/material/InputBase';

export type InputBaseProps = MuiInputBaseProps & {
    name: string;
    regex?: RegExp;
};

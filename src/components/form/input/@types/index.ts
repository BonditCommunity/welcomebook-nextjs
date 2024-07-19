import { InputBaseProps as MuiInputBaseProps } from '@mui/material/InputBase';

export type InputProps = MuiInputBaseProps & {
    name: string;
    regex?: RegExp;
    hiddenError?: boolean;
};

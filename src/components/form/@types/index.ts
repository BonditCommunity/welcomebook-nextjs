import { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';

export type InputProps = Omit<MuiTextFieldProps, 'color'> & {
    name: string;
    regex?: RegExp;
    hiddenError?: boolean;
};

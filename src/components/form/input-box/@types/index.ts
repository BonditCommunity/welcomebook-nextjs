import { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';

export type InputBoxProps = Omit<MuiTextFieldProps, 'color'> & {
    name: string;
    color?: 'default' | 'inverted' | 'black';
    regex?: RegExp;
    hiddenError?: boolean;
};

import { SxProps, Theme } from '@mui/material/styles';
import { ButtonProps as MuiButtonProps } from '@mui/material/Button';

export type ButtonProps = Pick<
    MuiButtonProps,
    'type' | 'disabled' | 'onClick' | 'sx'
> & {
    color?: 'default' | 'primary' | 'inverted';
    text: string;
    shadow?: boolean;
    textSx?: SxProps<Theme>;
};

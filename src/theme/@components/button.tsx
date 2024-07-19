'use client';

import { Theme, Components } from '@mui/material/styles';
import { buttonClasses } from '@mui/material/Button';

import { typography } from '../typography';
import { colorWithAlpha } from '@/helpers/common/color-with-alpha';

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        default: true;
        primary: true;
    }
    interface ButtonClasses {
        default: true;
        primary: true;
    }
    interface ButtonPropsColorOverrides {
        inverted: true;
    }
}

export const MuiButton: Components<Theme>['MuiButton'] = {
    defaultProps: { variant: 'default' },
    styleOverrides: {
        default: ({ theme }) => ({
            width: '100%',
            textTransform: 'none',
            backgroundColor: theme.palette.button.default.background,
            borderRadius: 15,
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: 0,
            paddingRight: 0,
            color: theme.palette.button.default.text,
            ...typography.FBody2,
            '&:hover': {
                backgroundColor: colorWithAlpha(
                    theme.palette.button.default.background,
                    0.9,
                ),
            },
            [`&.${buttonClasses.disabled}`]: {
                backgroundColor: theme.palette.button.disabled.background,
                color: theme.palette.button.disabled.text,
            },
        }),
    },
};

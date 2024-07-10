import { colorWithAlpha } from '@/helpers/common/color-with-alpha';
import type { Theme, Components } from '@mui/material/styles';
import { buttonClasses } from '@mui/material/Button';
import { typography } from '../typography';

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        default: true;
    }
    interface ButtonClasses {
        default: true;
    }
}

export const MuiButton: Components<Theme>['MuiButton'] = {
    styleOverrides: {
        default: ({ theme }) => {
            return {
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
            };
        },
    },
};

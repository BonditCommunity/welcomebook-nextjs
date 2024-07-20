import { colorWithAlpha } from '@/helpers/common/color-with-alpha';
import type { Theme, Components } from '@mui/material/styles';
import { switchClasses } from '@mui/material/Switch';
import { color } from '../theme';

export const MuiSwitch: Components<Theme>['MuiSwitch'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            width: 70,
            height: 30,
            padding: 0,
            [`& .${switchClasses.switchBase}`]: {
                padding: 0,
                [`&.${switchClasses.checked}`]: {
                    transform: 'translateX(40px)',
                    '& + .MuiSwitch-track': {
                        backgroundColor: theme.palette.form.switch.track.active,
                        opacity: 1,
                    },
                    '&.Mui-disabled + .MuiSwitch-track': {
                        opacity: 0.5,
                    },
                },
                '&.Mui-focusVisible .MuiSwitch-thumb': {
                    color: '#33cf4d',
                    border: '6px solid #fff',
                },
                '&.Mui-disabled .MuiSwitch-thumb': {
                    color:
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[600],
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
                },
            },
            [`& .${switchClasses.thumb}`]: {
                width: 30,
                height: 30,
                boxSizing: 'border-box',
                borderColor: theme.palette.form.switch.border,
                borderWidth: 2,
                borderStyle: 'solid',
                borderRadius: 9999,
                backgroundColor: theme.palette.form.switch.thumb,
            },
            [`& .${switchClasses.track}`]: {
                boxSizing: 'border-box',
                borderColor: theme.palette.form.switch.border,
                borderWidth: 2,
                borderStyle: 'solid',
                borderRadius: 9999,
                backgroundColor: theme.palette.form.switch.track.inactive,
                opacity: 1,
                transition: theme.transitions.create(['background-color'], {
                    duration: 500,
                }),
                boxShadow: `inset 22px 5px 4px ${colorWithAlpha(
                    color.black.default,
                    0.25,
                )}`,
            },
        }),
    },
};

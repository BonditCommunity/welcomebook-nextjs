'use client';

import { Theme, Components } from '@mui/material/styles';
import { checkboxClasses } from '@mui/material/Checkbox';

import { Svg } from '@/components/image/svg';
import { iconCheckbox, iconCheckboxChecked } from '@/assets/icons';

export const MuiCheckbox: Components<Theme>['MuiCheckbox'] = {
    defaultProps: {
        size: 'small',
        icon: <Svg src={iconCheckbox} />,
        checkedIcon: <Svg src={iconCheckboxChecked} />,
    },
    styleOverrides: {
        root: ({ theme }) => ({
            width: 20,
            height: 20,
            color: theme.palette.form.checkbox.icon,
            [`&.${checkboxClasses.checked}`]: {
                color: theme.palette.form.checkbox.icon,
            },
        }),
    },
};

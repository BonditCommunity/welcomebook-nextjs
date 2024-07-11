import { Theme, Components } from '@mui/material/styles';
import { autocompleteClasses } from '@mui/material/Autocomplete';
import { inputBaseClasses } from '@mui/material/InputBase';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

import { typography } from '../typography';

export const MuiAutocomplete: Components<Theme>['MuiAutocomplete'] = {
    styleOverrides: {
        root: {
            [`& .${inputBaseClasses.root}`]: {
                padding: 0,
            },
            [`& .${outlinedInputClasses.root}`]: {
                [`& .${autocompleteClasses.input}`]: {
                    padding: '15px 30px',
                },
            },
        },
        paper: ({ theme }) => ({
            backgroundColor: theme.palette.background.default,
            borderRadius: 15,
            marginTop: 15,
            ...typography.IBody1,
            color: theme.palette.text.default,
        }),
        option: ({ theme }) => ({
            margin: '5px 20px',
            paddingLeft: 5,
            paddingRight: 5,
            borderRadius: 5,
            minHeight: 0,
            [`&.${autocompleteClasses.option}[aria-selected="true"]`]: {
                color: theme.palette.text.primary,
            },
        }),
        listbox: {
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            overflowY: 'auto',
            '&::-webkit-scrollbar': { display: 'none' },
        },
        groupLabel: ({ theme }) => ({
            backgroundColor: theme.palette.background.default,
            paddingLeft: 20,
            paddingRight: 20,
            color: theme.palette.text.caption,
        }),
    },
};

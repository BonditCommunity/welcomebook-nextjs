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
        },
        hasPopupIcon: {
            [`&.${autocompleteClasses.root}`]: {
                [`& .${outlinedInputClasses.root}`]: {
                    paddingRight: 15,
                },
            },
        },
        paper: ({ theme }) => ({
            backgroundColor: theme.palette.form.autocomplete.background,
            borderRadius: 15,
            marginTop: 15,
            ...typography.IBody1,
            color: theme.palette.form.autocomplete.text,
        }),
        option: ({ theme }) => ({
            margin: '5px 20px',
            paddingLeft: 5,
            paddingRight: 5,
            borderRadius: 5,
            minHeight: 0,
            [`&.${autocompleteClasses.option}[aria-selected="true"]`]: {
                backgroundColor:
                    theme.palette.form.autocomplete.selected.background,
                color: theme.palette.form.autocomplete.selected.text,
            },
            '&:hover': {
                backgroundColor:
                    theme.palette.form.autocomplete.selected.background,
                color: theme.palette.form.autocomplete.selected.text,
            },
        }),
        noOptions: ({ theme }) => ({
            backgroundColor: theme.palette.form.autocomplete.background,
            ...typography.IBody1,
            color: theme.palette.form.autocomplete.text,
        }),
        listbox: {
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            overflowY: 'auto',
            '&::-webkit-scrollbar': { display: 'none' },
        },
        groupLabel: ({ theme }) => ({
            backgroundColor: theme.palette.form.autocomplete.group.background,
            paddingLeft: 20,
            paddingRight: 20,
            color: theme.palette.form.autocomplete.group.text,
        }),
    },
};

import { Theme, Components } from '@mui/material/styles';
import { autocompleteClasses } from '@mui/material/Autocomplete';
import { inputBaseClasses } from '@mui/material/InputBase';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

import { typography } from '../typography';
import { hideScrollBarY } from '../scrollbar';
import { Svg } from '@/components/image/svg';
import { iconArrowDown } from '@/assets/icons';

export const MuiAutocomplete: Components<Theme>['MuiAutocomplete'] = {
    defaultProps: {
        popupIcon: <Svg src={iconArrowDown} />,
    },
    styleOverrides: {
        root: {
            [`& .${inputBaseClasses.root}`]: {
                padding: 0,
            },
            [`& .${outlinedInputClasses.root}`]: {
                [`& .${autocompleteClasses.endAdornment}`]: {
                    right: 15,
                },
            },
        },
        hasPopupIcon: {
            [`&.${autocompleteClasses.root}`]: {
                [`& .${outlinedInputClasses.root}`]: {
                    paddingRight: 40,
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
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: 5,
            minHeight: 0,
            [`&.${autocompleteClasses.option}[aria-selected="true"]`]: {
                backgroundColor:
                    theme.palette.form.autocomplete.selected.background,
                color: theme.palette.form.autocomplete.selected.text,
                p: {
                    color: theme.palette.form.autocomplete.selected.text,
                },
            },
            '&:hover': {
                backgroundColor: `${theme.palette.form.autocomplete.selected.background} !important`,
                color: `${theme.palette.form.autocomplete.selected.text} !important`,
            },
            p: {
                '&:hover': {
                    color: `${theme.palette.form.autocomplete.selected.text} !important`,
                },
            },
        }),
        noOptions: ({ theme }) => ({
            backgroundColor: theme.palette.form.autocomplete.background,
            ...typography.IBody1,
            color: theme.palette.form.autocomplete.text,
        }),
        listbox: {
            ...hideScrollBarY,
        },
        groupLabel: ({ theme }) => ({
            backgroundColor: theme.palette.form.autocomplete.group.background,
            paddingLeft: 20,
            paddingRight: 20,
            color: theme.palette.form.autocomplete.group.text,
        }),
    },
};

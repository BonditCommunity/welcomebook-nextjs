import { Theme, Components } from '@mui/material/styles';
import type {} from '@mui/x-date-pickers/themeAugmentation'; // need to ts
import { buttonClasses } from '@mui/material/Button';
import { dialogActionsClasses } from '@mui/material/DialogActions';
import { typographyClasses } from '@mui/material/Typography';
import { buttonBaseClasses } from '@mui/material/ButtonBase';
import { pickersYearClasses } from '@mui/x-date-pickers/YearCalendar';
import { pickersCalendarHeaderClasses } from '@mui/x-date-pickers/PickersCalendarHeader';
import { dayCalendarClasses } from '@mui/x-date-pickers/DateCalendar';
import { datePickerToolbarClasses } from '@mui/x-date-pickers/DatePicker';
import { pickersDayClasses } from '@mui/x-date-pickers/PickersDay';

import { typography } from '../typography';

export const MuiPickersLayout: Components<Theme>['MuiPickersLayout'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            backgroundColor: theme.palette.background.default,
            borderRadius: 10,
            color: theme.palette.text.default,
            [`& .${typographyClasses.root}`]: {
                textTransform: 'none',
                ...typography.ISubtitle2,
                color: theme.palette.text.default,
            },
            [`& .${datePickerToolbarClasses.root}`]: {
                paddingLeft: 10,
                paddingRight: 10,
            },
            [`& .${datePickerToolbarClasses.title}`]: {
                ...typography.FH2,
                color: theme.palette.text.default,
            },
            [`& .${pickersCalendarHeaderClasses.label}`]: {
                ...typography.FBody2,
                color: theme.palette.text.default,
            },
            [`& .${pickersYearClasses.yearButton}`]: {
                ...typography.FBody2,
                borderRadius: 5,
                [`&.${pickersYearClasses.selected}`]: {
                    backgroundColor: theme.palette.button.rounded.background,
                    color: theme.palette.button.rounded.text,
                },
                [`&.${pickersYearClasses.disabled}`]: {
                    color: theme.palette.text.caption,
                },
            },
            [`& .${dayCalendarClasses.weekDayLabel}`]: {
                ...typography.FBody2,
                color: theme.palette.text.primary,
            },
            [`& .${buttonBaseClasses.root}`]: {
                ...typography.FBody2,
                color: theme.palette.text.default,
                [`&.${pickersDayClasses.today}`]: {
                    borderColor: theme.palette.border.primary,
                },
            },
            [`& .${buttonBaseClasses.root}[aria-selected="true"]`]: {
                backgroundColor: theme.palette.button.rounded.background,
                color: theme.palette.button.rounded.text,
            },
            [`& .${dialogActionsClasses.root}`]: {
                [`& .${buttonClasses.root}`]: {
                    padding: 10,
                    color: theme.palette.button.default.text,
                    [`&:last-of-type`]: {
                        color: theme.palette.button.rounded.text,
                        backgroundColor:
                            theme.palette.button.rounded.background,
                    },
                },
            },
        }),
        toolbar: {},
    },
};

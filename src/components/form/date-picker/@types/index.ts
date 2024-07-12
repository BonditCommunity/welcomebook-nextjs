import { MobileDatePickerProps } from '@mui/x-date-pickers/MobileDatePicker';
import { Dayjs } from 'dayjs';

export type DatePickerProps = MobileDatePickerProps<Dayjs> & {
    name: string;
};

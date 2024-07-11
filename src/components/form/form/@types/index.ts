import { UseFormReturn } from 'react-hook-form';

import { FCProps } from '@/@types';

export interface FormProps extends FCProps {
    methods: UseFormReturn<any>;
    onSubmit: () => void;
}

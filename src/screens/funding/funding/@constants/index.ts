'use client';

import { z } from 'zod';

import { i18n } from '@/i18n';
import { errors } from '@/messages/error';

export const schema = z
    .object({
        amount: z
            .number()
            .min(0, i18n.t(errors.form.required.funding.amount))
            .refine(value => value > 0 && value % 5 === 0, {
                message: i18n.t(errors.form.invalid.funding.amount),
            }),
    })
    .required();

export const steps: number[] = [5, 10, 15, 20];

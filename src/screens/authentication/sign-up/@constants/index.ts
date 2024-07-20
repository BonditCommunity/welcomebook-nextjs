'use client';

import { z } from 'zod';

import { i18n } from '@/i18n';
import { errors } from '@/messages/error';

export const sizing = {
    input: {
        gap: 20,
    },
};

export const schema = z
    .object({
        name: z
            .string()
            .min(1, { message: i18n.t(errors.form.required.user.name) }),
        college: z
            .string()
            .min(1, { message: i18n.t(errors.form.required.user.college) }),
        date: z.date(),
        agree: z.boolean().refine(val => val === true, {
            message: i18n.t(errors.form.required.user.terms),
        }),
    })
    .required();

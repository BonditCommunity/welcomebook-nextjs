'use client';

import { z } from 'zod';

import { i18n } from '@/i18n';
import { errors } from '@/messages/error';

export const size = {
    input: {
        gap: 15,
    },
};

export const schema = z
    .object({
        name: z
            .string()
            .min(1, { message: i18n.t(errors.form.required.user.name) }),
        school: z
            .string()
            .min(1, { message: i18n.t(errors.form.required.user.school) }),
        date: z.date().readonly(),
        agree: z.boolean().refine(val => val === true, {
            message: i18n.t(errors.form.required.user.terms),
        }),
    })
    .required();

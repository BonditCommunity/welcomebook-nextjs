'use client';

import { z } from 'zod';

import { i18n } from '@/i18n';
import { errors } from '@/messages/error';

export const schema = z
    .object({
        name: z
            .string()
            .min(1, { message: i18n.t(errors.form.required.user.name) }),
        school: z
            .string()
            .min(1, { message: i18n.t(errors.form.required.user.school) }),
        date: z.string().readonly(),
        agree: z.boolean().refine(val => val === true, {
            message: i18n.t(errors.form.required.user.terms),
        }),
    })
    .required();

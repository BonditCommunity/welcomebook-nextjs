'use client';

import { z } from 'zod';

import { i18n } from '@/i18n';
import { ERRORS } from '@/messages/error';

export const schema = z
    .object({
        name: z
            .string()
            .min(1, { message: i18n.t(ERRORS.FORM.REQUIRED.USER.NAME) }),
        school: z
            .string()
            .min(1, { message: i18n.t(ERRORS.FORM.REQUIRED.USER.SHCOOL) }),
        date: z.string().readonly(),
        agree: z.boolean().refine(val => val === true, {
            message: i18n.t(ERRORS.FORM.REQUIRED.USER.TERMS),
        }),
    })
    .required();

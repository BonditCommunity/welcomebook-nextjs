'use client';

import { z } from 'zod';

import { i18n } from '@/i18n';
import { errors } from '@/messages/error';

export const sizing = {
    input: {
        gap: 15,
    },
};

export const schema = z
    .object({
        name: z
            .string()
            .min(1, { message: i18n.t(errors.form.required.funding.name) }),
        mobile: z
            .string()
            .min(1, { message: i18n.t(errors.form.required.funding.mobile) }),
        countryNumber: z
            .string()
            .min(1, {
                message: i18n.t(errors.form.required.funding.countryNumber),
            })
            .readonly(),
    })
    .required();

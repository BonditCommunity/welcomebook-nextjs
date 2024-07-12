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
        country: z
            .string()
            .min(1, { message: i18n.t(errors.form.required.address.country) }),
        address: z
            .string()
            .min(1, { message: i18n.t(errors.form.required.address.address) }),
        city: z
            .string()
            .min(1, { message: i18n.t(errors.form.required.address.city) }),
        extraAddress: z.string(),
        postcode: z.string(),
        mobile: z.string(),
    })
    .required();

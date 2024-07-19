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
        country: z
            .string()
            .min(1, { message: i18n.t(errors.form.required.address.country) }),
        streetAddress: z.string().min(1, {
            message: i18n.t(errors.form.required.address.streetAddress),
        }),
        city: z
            .string()
            .min(1, { message: i18n.t(errors.form.required.address.city) }),
        optionalAddress: z.string().nullable(),
        zipCode: z
            .string()
            .min(1, { message: i18n.t(errors.form.required.address.zipCode) }),
        phoneNumber: z
            .string()
            .min(1, {
                message: i18n.t(errors.form.required.address.phoneNumber),
            }),
    })
    .required();

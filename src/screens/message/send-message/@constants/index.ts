'use client';

import { z } from 'zod';

import { i18n } from '@/i18n';
import { errors } from '@/messages/error';

export const sizing = {
    avatar: 95,
    sheet: {
        borderRadius: 30,
    },
    input: {
        padding: {
            horizontal: 15,
        },
    },
    image: 120,
};

export const schema = z.object({
    message: z
        .string()
        .min(1, { message: i18n.t(errors.form.required.message.message) }),
    name: z
        .string()
        .min(1, { message: i18n.t(errors.form.required.message.name) }),
});

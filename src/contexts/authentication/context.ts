'use client';

import { createContext } from 'react';

import { AuthContext as Context } from './@types';

export const AuthContext = createContext<Context>({
    loading: true,
});

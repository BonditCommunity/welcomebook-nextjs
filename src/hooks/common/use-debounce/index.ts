'use client';

import { useRef } from 'react';
import debounce from 'lodash/debounce';

import { UseDebounceProps } from './@types';

export function useDebounce({ callback, interval = 500 }: UseDebounceProps) {
    return useRef(debounce(callback, interval)).current;
}

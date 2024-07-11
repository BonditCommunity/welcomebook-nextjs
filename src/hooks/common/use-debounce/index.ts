'use client';

import { useRef } from 'react';
import debounce from 'lodash/debounce';

export function useDebounce(func: (props?: any) => void, interval?: number) {
    return useRef(debounce(func, interval ? interval : 300)).current;
}

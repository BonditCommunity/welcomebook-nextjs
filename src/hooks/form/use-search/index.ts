'use client';

import { ChangeEventHandler, useCallback, useEffect, useState } from 'react';

import { useDebounce } from '@/hooks/common/use-debounce';

export function useSearch(defaultValue: string) {
    const [value, setValue] = useState<string>(defaultValue);
    const [searched, setSearched] = useState<string>(defaultValue);

    const search = useDebounce(value => setSearched(value));

    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(e => {
        setValue(e.target.value);
    }, []);

    useEffect(() => {
        search(value);
        return () => {
            search.cancel();
        };
    }, [value]);

    return {
        value,
        searched,
        onChange,
        setValue,
    };
}

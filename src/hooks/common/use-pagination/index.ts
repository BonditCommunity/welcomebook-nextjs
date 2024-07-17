import { useCallback, useMemo, useState } from 'react';

import { UsePaginationProps } from './@types';
import { pagination } from '@/constants/common/pagination';

export const usePagination = (props?: UsePaginationProps) => {
    const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
    const [hasNextPage, setHasNextPage] = useState<boolean>(true);

    const canMore = useMemo<boolean>(() => {
        return !isLoadingMore && hasNextPage;
    }, [isLoadingMore, hasNextPage]);

    const reset = useCallback(() => {
        setHasNextPage(true);
        setIsLoadingMore(false);
    }, []);

    const onStartMore = useCallback(() => {
        setIsLoadingMore(true);
    }, []);

    const onEndMore = useCallback((result = 0) => {
        if (result < (props?.size ?? pagination.default)) {
            setHasNextPage(false);
        }
        setIsLoadingMore(false);
    }, []);

    return {
        size: props?.size ?? pagination.default,
        isLoadingMore,
        hasNextPage,
        canMore,
        reset,
        onStartMore,
        onEndMore,
    };
};

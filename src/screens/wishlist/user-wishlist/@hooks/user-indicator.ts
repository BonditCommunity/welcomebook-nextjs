'use client';

import { useCallback, useEffect, useState } from 'react';
import { EmblaCarouselType } from 'embla-carousel';

export const useIndicator = (emblaApi?: EmblaCarouselType) => {
    const [index, setIndex] = useState<number>(0);

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setIndex(emblaApi.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (emblaApi) {
            onSelect(emblaApi);
            emblaApi.on('reInit', onSelect).on('select', onSelect);
        }
        return () => {
            emblaApi?.off('reInit', onSelect).off('select', onSelect);
        };
    }, [emblaApi, onSelect]);

    return {
        index,
    };
};

import { forwardRef } from 'react';

import Box from '@mui/material/Box';

import { SvgProps } from './@types';

export const Svg = forwardRef<HTMLSpanElement, SvgProps>(
    ({ src, width = 20, sx, ...props }, ref) => (
        <Box
            ref={ref}
            component={'span'}
            sx={{
                width,
                height: width,
                flexShrink: 0,
                display: 'inline-flex',
                bgcolor: 'currentColor',
                mask: `url(${src}) no-repeat center / contain`,
                WebkitMask: `url(${src}) no-repeat center / contain`,
                ...sx,
            }}
            {...props}
        />
    ),
);

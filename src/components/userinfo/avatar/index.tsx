'use client';

import React from 'react';

import { AvatarProps } from './@types';
import { Image } from '@/components/image/image/image';
import { useTheme } from '@/hooks/common/use-theme';
import { imgProfile } from '@/assets/images';

export const Avatar: React.FC<AvatarProps> = ({ style, user, size = 95 }) => {
    const { theme } = useTheme();
    if (user?.imageUrl) {
        return (
            <Image
                src={user.imageUrl}
                width={size}
                height={size}
                style={{
                    borderWidth: 10,
                    borderColor: theme.background.default,
                    borderStyle: 'solid',
                    borderRadius: 9999,
                    ...style,
                }}
            />
        );
    }
    return (
        <img
            src={imgProfile.src}
            width={size}
            height={size}
            style={{
                borderWidth: 10,
                borderColor: theme.background.default,
                borderStyle: 'solid',
                borderRadius: 9999,
            }}
        />
    );
};

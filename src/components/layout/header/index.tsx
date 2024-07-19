'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import { HeaderProps } from './@types';
import { Row } from '@/components/grid/row';
import { FH3 } from '@/components/typography/FH3';
import { Svg } from '@/components/image/svg';
import { iconBack } from '@/assets/icons';
import { useTheme } from '@/hooks/common/use-theme';
import { spacing } from '@/theme/spacing';

export const Header: React.FC<HeaderProps> = ({
    style,
    title,
    renderAction,
}) => {
    const router = useRouter();

    const { theme } = useTheme();

    return (
        <div
            style={{
                backgroundColor: theme.background.default,
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 10000,
                ...style,
            }}>
            <Row
                alignItems={'center'}
                justifyContent={'space-between'}
                style={{
                    width: '100%',
                    minWidth: spacing.screen.minWidth,
                    maxWidth: spacing.screen.maxWidth,
                    height: spacing.header.height,
                    paddingLeft: spacing.screen.padding.horizontal,
                    paddingRight: spacing.screen.padding.horizontal,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}>
                <FH3
                    textAlign={'center'}
                    style={{
                        position: 'absolute',
                        left: spacing.screen.padding.horizontal,
                        right: spacing.screen.padding.horizontal,
                    }}>
                    {title}
                </FH3>
                <Svg
                    src={iconBack}
                    color={theme.icon.action}
                    onClick={router.back}
                />
                {renderAction?.()}
            </Row>
        </div>
    );
};

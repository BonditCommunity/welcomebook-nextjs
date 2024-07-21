'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDroppable } from '@dnd-kit/core';

import { DropBoxProps } from './@types';
import { Center } from '@/components/grid/center';
import { useTheme } from '@/hooks/common/use-theme';
import { Svg } from '@/components/image/svg';
import { iconHeart, iconHeartFilled } from '@/assets/icons';
import { dropShadow } from '@/theme/shadow';
import { sizing } from '../../@constants';
import { colorWithAlpha } from '@/helpers/common/color-with-alpha';
import { color } from '@/theme/theme';
import { ISubtitle2 } from '@/components/typography/ISubtitle2';
import { FBody3 } from '@/components/typography/FBody3';

export const DropBox: React.FC<DropBoxProps> = ({ products, onSubmit }) => {
    const { t } = useTranslation();
    const { theme } = useTheme();

    const { isOver, setNodeRef } = useDroppable({
        id: 'droppable',
    });

    return (
        <Center
            ref={setNodeRef}
            onClick={onSubmit}
            sx={{
                cursor: 'pointer',
                width: sizing.dropBox.container,
                height: sizing.dropBox.container,
                borderRadius: 9999,
                backgroundColor: colorWithAlpha(theme.background.black, 0.8),
                borderWidth: sizing.dropBox.border * (products > 0 ? 2 : 1),
                borderColor: theme.border.default,
                borderStyle: 'solid',
                boxShadow: dropShadow,
                position: 'fixed',
                left: '50%',
                bottom: 30,
                transition: 'transform 0.3s',
                transform: `translateX(-${sizing.dropBox.container / 2}px)`,
                ...(isOver && {
                    transform: `translateX(-${
                        sizing.dropBox.container / 2
                    }px) scale(1.2)`,
                }),
            }}>
            <Center
                style={{
                    position: 'relative',
                    width: sizing.dropBox.icon,
                    height: sizing.dropBox.icon,
                }}>
                <Svg
                    src={iconHeart}
                    color={theme.icon.white}
                    width={sizing.dropBox.icon}
                    height={sizing.dropBox.icon}
                    style={{
                        position: 'absolute',
                        ...(products > 0 && {
                            opacity: 0,
                        }),
                    }}
                />
                <Svg
                    src={iconHeartFilled}
                    color={color.red.default}
                    width={sizing.dropBox.icon}
                    height={sizing.dropBox.icon}
                    style={{
                        position: 'absolute',
                        ...(products === 0 && {
                            opacity: 0,
                        }),
                    }}
                />
                {products > 0 && (
                    <FBody3
                        color={theme.text.white}
                        textAlign={'center'}
                        style={{
                            fontSize: 8.5,
                            position: 'absolute',
                            top: -12,
                        }}>
                        {t('wishListDropBoxText')}
                    </FBody3>
                )}
            </Center>
            {products > 0 && (
                <Center
                    sx={{
                        width: sizing.dropBox.counter,
                        height: sizing.dropBox.counter,
                        borderRadius: 9999,
                        backgroundColor: color.primary.default,
                        position: 'absolute',
                        right: 0,
                        bottom: -5,
                    }}>
                    <ISubtitle2 textAlign={'center'} color={theme.text.white}>
                        {products}
                    </ISubtitle2>
                </Center>
            )}
        </Center>
    );
};

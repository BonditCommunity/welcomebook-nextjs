'use client';

import React from 'react';
import { useDroppable } from '@dnd-kit/core';

import { DropBoxProps } from './@types';
import { Center } from '@/components/grid/center';
import { useTheme } from '@/hooks/common/use-theme';
import { Svg } from '@/components/image/svg';
import { iconHeart } from '@/assets/icons';
import { dropShadow } from '@/theme/shadow';
import { sizing } from '../../@constants';
import { colorWithAlpha } from '@/helpers/common/color-with-alpha';
import { color } from '@/theme/theme';
import { ISubtitle2 } from '@/components/typography/ISubtitle2';

export const DropBox: React.FC<DropBoxProps> = ({ products, onSubmit }) => {
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
                borderWidth: sizing.dropBox.border,
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
            <div
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
                />
                {products > 0 && (
                    <Center
                        sx={{
                            width: sizing.dropBox.counter,
                            height: sizing.dropBox.counter,
                            borderRadius: 9999,
                            backgroundColor: color.blue.default,
                            position: 'absolute',
                            right: -5,
                            bottom: -3,
                        }}>
                        <ISubtitle2
                            textAlign={'center'}
                            color={theme.text.white}>
                            {products}
                        </ISubtitle2>
                    </Center>
                )}
            </div>
        </Center>
    );
};

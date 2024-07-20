'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { FundingProps } from './@types';
import { sizing } from '../../@constants';
import { Row } from '@/components/grid/row';
import { color } from '@/theme/theme';
import { FBody3 } from '@/components/typography/FBody3';
import { useTheme } from '@/hooks/common/use-theme';

export const Funding: React.FC<FundingProps> = ({ style, percent }) => {
    const { t } = useTranslation();
    const { theme } = useTheme();

    const textRef = useRef<HTMLParagraphElement>(null);

    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
        if (textRef.current) {
            setWidth(textRef.current.offsetWidth);
        }
    }, []);

    return (
        <div
            style={{
                position: 'relative',
                ...style,
            }}>
            <Row
                alignItems={'center'}
                style={{
                    position: 'relative',
                    height: sizing.funding.thumb.size,
                }}>
                <div
                    style={{
                        width: `${percent}%`,
                        height: sizing.funding.rail.height,
                        backgroundColor: color.primary.default,
                        borderRadius: 9999,
                    }}
                />
                <div
                    style={{
                        width: `${100 - percent}%`,
                        height: sizing.funding.rail.height,
                        backgroundColor: color.primary['2'],
                        borderRadius: 9999,
                    }}
                />
                <div
                    style={{
                        width: sizing.funding.thumb.size,
                        height: sizing.funding.thumb.size,
                        backgroundColor: color.white.default,
                        boxSizing: 'border-box',
                        borderWidth: sizing.funding.thumb.border,
                        borderColor: color.primary.default,
                        borderStyle: 'solid',
                        borderRadius: 9999,
                        position: 'absolute',
                        left: `${percent}%`,
                        transform: `translateX(-${
                            sizing.funding.thumb.size / 2
                        }px)`,
                    }}
                />
            </Row>
            {percent < 100 && (
                <FBody3
                    color={theme.text.primary}
                    textAlign={'center'}
                    style={{
                        fontSize: 9,
                        position: 'absolute',
                        right: 0,
                    }}>
                    {`$${100}`}
                </FBody3>
            )}
            <FBody3
                ref={textRef}
                color={theme.text.primary}
                textAlign={'center'}
                style={{
                    fontSize: 9,
                    position: 'absolute',
                    left: `${percent}%`,
                    transform: `translateX(-${width / 2}px)`,
                }}>
                {t('letterMyFundingThumbText')}
            </FBody3>
        </div>
    );
};

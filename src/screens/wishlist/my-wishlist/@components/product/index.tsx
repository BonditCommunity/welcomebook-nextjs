'use client';

import React, { useState } from 'react';

import { ProductProps } from './@types';
import { useTheme } from '@/hooks/common/use-theme';
import { ISubtitle2 } from '@/components/typography/ISubtitle2';
import { maxlines } from '@/theme/styles';
import { ISubtitle3 } from '@/components/typography/ISubtitle3';
import { Col } from '@/components/grid/col';
import { Row } from '@/components/grid/row';
import { Center } from '@/components/grid/center';
import { color } from '@/theme/theme';
import { Svg } from '@/components/image/svg';
import { iconAdd, iconMinus } from '@/assets/icons';
import { Image } from '@/components/image/image/image';
import { typography } from '@/theme/typography';

export const Product: React.FC<ProductProps> = ({ style, product }) => {
    const { theme } = useTheme();

    const [count, setCount] = useState<number>(product.totalCount);

    const minus = () => {
        if (count < 1) return;
        setCount(count - 1);
    };

    const plus = () => {
        setCount(count + 1);
    };

    return (
        <div
            style={{
                backgroundColor: theme.background.primary,
                padding: '15px 20px',
                borderRadius: 30,
                ...style,
            }}>
            <div
                style={{
                    height:
                        2 *
                        typography.ISubtitle2.lineHeight *
                        typography.ISubtitle2.fontSize,
                }}>
                <ISubtitle2
                    color={theme.text.white}
                    textAlign={'center'}
                    sx={{
                        ...maxlines(2),
                    }}>
                    {product.productName}
                </ISubtitle2>
            </div>
            <Col alignItems={'center'} style={{ marginTop: 5 }}>
                <Image
                    src={product.imageUrl}
                    width={100}
                    height={120}
                    style={{
                        objectFit: 'contain',
                        alignSelf: 'center',
                    }}
                />
            </Col>
            <ISubtitle3
                color={theme.text.white}
                textAlign={'center'}
                style={{ marginTop: 10 }}>
                {`$${product.price}`}
                {!!product.amazonPrice && (
                    <ISubtitle3 component={'span'} color={theme.text.default}>
                        {` / ${product.amazonPrice}$`}
                    </ISubtitle3>
                )}
            </ISubtitle3>
            <Row
                alignItems={'center'}
                justifyContent={'space-between'}
                style={{ marginTop: 15 }}>
                <Center
                    onClick={minus}
                    style={{
                        cursor: 'pointer',
                        width: 24,
                        height: 24,
                        borderRadius: 9999,
                        backgroundColor: color.primary['1'],
                    }}>
                    <Svg
                        src={iconMinus}
                        color={theme.icon.white}
                        width={12}
                        height={12}
                    />
                </Center>
                <ISubtitle2 color={theme.text.white} textAlign={'center'}>
                    {count}
                </ISubtitle2>
                <Center
                    onClick={plus}
                    style={{
                        cursor: 'pointer',
                        width: 24,
                        height: 24,
                        borderRadius: 9999,
                        backgroundColor: color.primary['1'],
                    }}>
                    <Svg
                        src={iconAdd}
                        color={theme.icon.white}
                        width={12}
                        height={12}
                    />
                </Center>
            </Row>
        </div>
    );
};

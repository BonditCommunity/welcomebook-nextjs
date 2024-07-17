'use client';

import React from 'react';

import { ProductProps } from './@types';
import { Image } from '@/components/image/image/image';
import { sizing } from '../../@constants';
import { Row } from '@/components/grid/row';
import { ISubtitle2 } from '@/components/typography/ISubtitle2';
import { useTheme } from '@/hooks/common/use-theme';

export const Product: React.FC<ProductProps> = ({ style, product, index }) => {
    const { theme } = useTheme();

    if (index % 4 === 0) {
        return (
            <Row
                style={{
                    ...style,
                }}>
                <Image
                    src={product.imageUrl}
                    width={sizing.product.image}
                    height={sizing.product.image}
                    style={{
                        objectFit: 'contain',
                    }}
                />
                <div
                    style={{
                        flex: 1,
                        paddingTop: sizing.product.text.padding,
                        paddingLeft: sizing.product.text.padding,
                    }}>
                    <ISubtitle2 color={theme.text.white}>
                        {product.productName}
                    </ISubtitle2>
                    <ISubtitle2
                        color={theme.text.white}
                        style={{
                            marginTop: sizing.product.price.gap,
                        }}>
                        {`$${product.price}`}
                    </ISubtitle2>
                </div>
            </Row>
        );
    } else if (index % 4 === 1) {
        return (
            <Row
                style={{
                    ...style,
                }}>
                <div
                    style={{
                        flex: 1,
                        paddingTop: sizing.product.text.padding,
                        paddingRight: sizing.product.text.padding,
                    }}>
                    <ISubtitle2 color={theme.text.white} textAlign={'right'}>
                        {product.productName}
                    </ISubtitle2>
                    <ISubtitle2
                        color={theme.text.white}
                        textAlign={'right'}
                        style={{
                            marginTop: sizing.product.price.gap,
                        }}>
                        {`$${product.price}`}
                    </ISubtitle2>
                </div>
                <Image
                    src={product.imageUrl}
                    width={sizing.product.image}
                    height={sizing.product.image}
                    style={{
                        objectFit: 'contain',
                    }}
                />
            </Row>
        );
    }
    return (
        <div
            style={{
                ...style,
            }}>
            <Image
                src={product.imageUrl}
                width={sizing.product.image}
                height={sizing.product.image}
                style={{
                    objectFit: 'contain',
                }}
            />
        </div>
    );
};

'use client';

import React from 'react';

import { ProductProps } from './@types';
import { Row } from '@/components/grid/row';
import { Image } from '@/components/image/image/image';
import { sizing } from '@/screens/wishlist/user-wishlist/@constants';
import { Col } from '@/components/grid/col';
import { ISubtitle3 } from '@/components/typography/ISubtitle3';
import { useTheme } from '@/hooks/common/use-theme';
import { maxlines } from '@/theme/styles';

export const Product: React.FC<ProductProps> = ({ product, ...props }) => {
    const { theme } = useTheme();
    return (
        <Row alignItems={'center'} {...props}>
            <Image
                src={product.imageUrl}
                width={sizing.product.image}
                height={sizing.product.image}
                style={{
                    objectFit: 'contain',
                }}
            />
            <Col style={{ flex: 1, marginLeft: 10 }}>
                <ISubtitle3
                    color={theme.text.white}
                    sx={{
                        ...maxlines(2),
                    }}>
                    {product.productName}
                </ISubtitle3>
                <ISubtitle3
                    color={theme.text.white}
                    sx={{
                        ...maxlines(1),
                    }}>
                    {`$${product.price}`}
                </ISubtitle3>
            </Col>
        </Row>
    );
};

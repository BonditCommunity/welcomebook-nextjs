'use client';

import React from 'react';

import { ProductProps } from './@types';
import { sizing } from '../../@constants';
import { Row } from '@/components/grid/row';
import { ISubtitle2 } from '@/components/typography/ISubtitle2';
import { useTheme } from '@/hooks/common/use-theme';
import { Image } from './@components/image';
import { Col } from '@/components/grid/col';

export const Product: React.FC<ProductProps> = ({
    product,
    index,
    ...props
}) => {
    const { theme } = useTheme();

    if (index % 4 === 0) {
        return (
            <Row {...props}>
                <Image product={product} />
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
            <Row {...props}>
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
                <Image product={product} />
            </Row>
        );
    }
    return (
        <Col {...props}>
            <Image product={product} />
            <ISubtitle2 color={theme.text.white} textAlign={'center'}>
                {product.productName}
            </ISubtitle2>
            <ISubtitle2
                color={theme.text.white}
                textAlign={'center'}
                style={{
                    marginTop: sizing.product.price.gap,
                }}>
                {`$${product.price}`}
            </ISubtitle2>
        </Col>
    );
};

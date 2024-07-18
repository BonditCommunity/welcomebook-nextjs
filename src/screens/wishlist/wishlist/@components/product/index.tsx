'use client';

import React from 'react';

import { ProductProps } from './@types';
import { sizing } from '../../@constants';
import { Row } from '@/components/grid/row';
import { ISubtitle2 } from '@/components/typography/ISubtitle2';
import { useTheme } from '@/hooks/common/use-theme';
import { Image } from './@components/image';
import { Col } from '@/components/grid/col';
import { Status } from './@components/status';

export const Product: React.FC<ProductProps> = ({
    product,
    index,
    ...props
}) => {
    const { theme } = useTheme();

    if (index % 4 === 0) {
        return (
            <Row alignItems={'center'} {...props}>
                <Image product={product} />
                <div
                    style={{
                        flex: 1,
                        marginLeft: sizing.product.text.gap,
                    }}>
                    <ISubtitle2 color={theme.text.white}>
                        {product.productName}
                    </ISubtitle2>
                    <Row
                        alignItems={'center'}
                        style={{
                            marginTop: sizing.product.price.gap,
                        }}>
                        <ISubtitle2 color={theme.text.white}>
                            {`$${product.price}`}
                        </ISubtitle2>
                        <Status
                            product={product}
                            style={{
                                marginLeft: sizing.product.status.gap,
                            }}
                        />
                    </Row>
                </div>
            </Row>
        );
    } else if (index % 4 === 1) {
        return (
            <Row alignItems={'center'} {...props}>
                <div
                    style={{
                        flex: 1,
                        paddingRight: sizing.product.text.gap,
                    }}>
                    <ISubtitle2 color={theme.text.white} textAlign={'right'}>
                        {product.productName}
                    </ISubtitle2>
                    <Row
                        alignItems={'center'}
                        justifyContent={'flex-end'}
                        style={{
                            marginTop: sizing.product.price.gap,
                        }}>
                        <ISubtitle2 color={theme.text.white}>
                            {`$${product.price}`}
                        </ISubtitle2>
                        <Status
                            product={product}
                            style={{
                                marginLeft: sizing.product.status.gap,
                            }}
                        />
                    </Row>
                </div>
                <Image product={product} />
            </Row>
        );
    } else if (index % 4 === 2) {
        return (
            <Col
                alignItems={'center'}
                style={{
                    width: sizing.product.container.width,
                    ...props.style,
                }}>
                <Image product={product} />
                <ISubtitle2
                    color={theme.text.white}
                    textAlign={'center'}
                    style={{
                        marginTop: sizing.product.text.gap,
                    }}>
                    {product.productName}
                </ISubtitle2>
                <Row
                    alignItems={'center'}
                    justifyContent={'center'}
                    style={{
                        marginTop: sizing.product.price.gap,
                    }}>
                    <ISubtitle2 color={theme.text.white}>
                        {`$${product.price}`}
                    </ISubtitle2>
                    <Status
                        product={product}
                        style={{
                            marginLeft: sizing.product.status.gap,
                        }}
                    />
                </Row>
            </Col>
        );
    }
    return (
        <Col {...props}>
            <Col
                alignItems={'center'}
                alignSelf={'flex-end'}
                style={{ width: sizing.product.container.width }}>
                <Image product={product} />
                <ISubtitle2
                    color={theme.text.white}
                    textAlign={'center'}
                    style={{
                        marginTop: sizing.product.text.gap,
                    }}>
                    {product.productName}
                </ISubtitle2>
                <Row
                    alignItems={'center'}
                    justifyContent={'center'}
                    style={{
                        marginTop: sizing.product.price.gap,
                    }}>
                    <ISubtitle2 color={theme.text.white}>
                        {`$${product.price}`}
                    </ISubtitle2>
                    <Status
                        product={product}
                        style={{
                            marginLeft: sizing.product.status.gap,
                        }}
                    />
                </Row>
            </Col>
        </Col>
    );
};

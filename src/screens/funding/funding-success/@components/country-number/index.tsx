'use client';

import React from 'react';

import { CountryNumberProps } from './@types';
import { Row } from '@/components/grid/row';
import { FH4 } from '@/components/typography/FH4';
import { useTheme } from '@/hooks/common/use-theme';
import { IBody1 } from '@/components/typography/IBody1';
import { Svg } from '@/components/image/svg';
import { iconTriangle } from '@/assets/icons';

export const CountryNumber: React.FC<CountryNumberProps> = ({
    countryNumber,
    focused,
    ...props
}) => {
    const { theme } = useTheme();

    if (focused) {
        return (
            <Row alignItems={'center'} {...props}>
                <FH4 color={theme.form.outlined.text} style={{ minWidth: 60 }}>
                    {countryNumber}
                </FH4>
                <Svg src={iconTriangle} color={theme.form.outlined.text} />
            </Row>
        );
    }
    return (
        <Row alignItems={'center'} {...props}>
            <IBody1
                color={theme.form.outlined.placeholder.inverted}
                style={{ minWidth: 60 }}>
                {countryNumber}
            </IBody1>
            <Svg
                src={iconTriangle}
                color={theme.form.outlined.placeholder.inverted}
            />
        </Row>
    );
};

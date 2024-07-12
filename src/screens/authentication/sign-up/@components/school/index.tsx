'use client';

import React from 'react';
import { SchoolProps } from './@types';
import { Row } from '@/components/grid/row';
import { IBody1 } from '@/components/typography/IBody1';
import { Svg } from '@/components/image/svg';
import { iconAdd } from '@/assets/icons';
import { useTheme } from '@/hooks/common/use-theme';

export const Shcool: React.FC<SchoolProps> = ({ school, ...props }) => {
    const { theme } = useTheme();

    return (
        <Row alignItems={'center'} {...props}>
            <IBody1 style={{ flex: 1 }}>{school.name}</IBody1>
            {school.id < 0 && <Svg src={iconAdd} color={theme.icon.caption} />}
        </Row>
    );
};

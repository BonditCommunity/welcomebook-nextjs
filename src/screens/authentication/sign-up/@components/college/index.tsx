'use client';

import React from 'react';

import { CollegeProps } from './@types';
import { Row } from '@/components/grid/row';
import { IBody1 } from '@/components/typography/IBody1';
import { Svg } from '@/components/image/svg';
import { iconAdd } from '@/assets/icons';
import { useTheme } from '@/hooks/common/use-theme';

export const College: React.FC<CollegeProps> = ({ college, ...props }) => {
    const { theme } = useTheme();

    return (
        <Row alignItems={'center'} {...props}>
            <IBody1 style={{ flex: 1 }}>{college.name}</IBody1>
            {college.id < 0 && <Svg src={iconAdd} color={theme.icon.caption} />}
        </Row>
    );
};

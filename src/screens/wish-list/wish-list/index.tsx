'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import { Sheet } from '@/components/layout/sheet';
import { FH2 } from '@/components/typography/FH2';
import { useTheme } from '@/hooks/common/use-theme';
import { useSearch } from '@/hooks/form/use-search';
import { Svg } from '@/components/image/svg';
import { iconSearch } from '@/assets/icons';
import { IBody2 } from '@/components/typography/IBody2';
import { Row } from '@/components/grid/row';
import { DropBox } from './@components/drop-box';
import { size } from './@constants';

export function WishList() {
    const { t } = useTranslation();
    const { theme } = useTheme();

    const q = useSearch('');

    return (
        <Sheet type={'black'}>
            <FH2 color={theme.text.primary} style={{ paddingTop: 30 }}>
                {t('wishListTitle')}
            </FH2>
            <TextField
                type={'text'}
                name={'search'}
                variant={'outlined'}
                color={'secondary'}
                fullWidth={true}
                hiddenLabel={true}
                value={q.value}
                onChange={q.onChange}
                inputMode={'search'}
                InputProps={{
                    startAdornment: (
                        <Svg src={iconSearch} color={theme.icon.white} />
                    ),
                }}
                style={{
                    marginTop: 30,
                }}
            />
            <IBody2 color={theme.text.white} style={{ marginTop: 30 }}>
                {t('wishListItemCaution')}
            </IBody2>
            <Row alignItems={'center'} style={{ marginTop: 25 }}>
                <Box
                    sx={{
                        width: 12,
                        height: 12,
                        backgroundColor: theme.icon.info,
                        borderRadius: 9999,
                    }}
                />
                <IBody2 color={theme.text.caption} style={{ marginLeft: 15 }}>
                    {t('wishListItemSufficient')}
                </IBody2>
            </Row>
            <Row alignItems={'center'} style={{ flex: 1, marginTop: 10 }}>
                <Box
                    sx={{
                        width: 12,
                        height: 12,
                        backgroundColor: theme.icon.error,
                        borderRadius: 9999,
                    }}
                />
                <IBody2
                    color={theme.text.caption}
                    style={{ flex: 1, marginLeft: 15 }}>
                    {t('wishListItemInsufficient')}
                </IBody2>
            </Row>
            <DropBox
                style={{
                    position: 'absolute',
                    left: '50%',
                    transform: `translateX(-${size.dropBox.container / 2}px)`,
                    bottom: 30,
                }}
            />
        </Sheet>
    );
}

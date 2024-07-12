'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';

import { Col } from '@/components/grid/col';
import { Sheet } from '@/components/layout/sheet';
import { FH2 } from '@/components/typography/FH2';
import { useTheme } from '@/hooks/common/use-theme';
import { imgSuccess } from '@/assets/images';
import { routes } from '@/routes';
import { spacing } from '@/theme/spacing';

export function AddressSuccess() {
    const { t } = useTranslation();
    const { theme } = useTheme();

    return (
        <Sheet
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                paddingTop: 60,
            }}>
            <Col alignItems={'center'}>
                <FH2
                    textAlign={'center'}
                    color={theme.text.darkPurple}
                    style={{ marginTop: 90 }}>
                    {t('addressSuccessTitle')}
                </FH2>
                <img
                    src={imgSuccess.src}
                    width={'100%'}
                    style={{
                        marginTop: 40,
                    }}
                />
            </Col>
            <Button
                variant={'rounded'}
                color={'inverted'}
                href={routes.home}
                style={{
                    marginTop: 10,
                    marginBottom: spacing.form.submit.margin.bottom,
                }}>
                {t('addressSuccessGoMainText')}
            </Button>
        </Sheet>
    );
}

'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

import { Sheet } from '@/components/layout/sheet';
import { Col } from '@/components/grid/col';
import { FH2 } from '@/components/typography/FH2';
import { useTheme } from '@/hooks/common/use-theme';
import { imgCongratulation } from '@/assets/images';
import { spacing } from '@/theme/spacing';
import { RoundButton } from '@/components/button/round-button';

export function Success() {
    const { t } = useTranslation();
    const { theme } = useTheme();

    return (
        <Sheet
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                paddingTop: 90,
            }}>
            <Col alignItems={'center'}>
                <FH2
                    color={theme.text.white}
                    textAlign={'center'}
                    style={{
                        marginLeft: 25,
                        marginRight: 25,
                    }}>
                    {t('myWishListSuccessTitle')}
                </FH2>
                <img
                    src={imgCongratulation.src}
                    width={'100%'}
                    style={{
                        marginTop: 5,
                    }}
                />
            </Col>
            <RoundButton
                size={'xl'}
                color={'inverted'}
                text={t('myWishListSuccessSubmitText')}
                shadow={true}
                sx={{
                    marginTop: 10,
                    marginLeft: 25,
                    marginRight: 25,
                    marginBottom: spacing.form.submit.margin.bottom,
                }}
            />
        </Sheet>
    );
}

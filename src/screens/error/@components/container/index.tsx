'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';

import { ContainerProps } from './@types';
import { Sheet } from '@/components/layout/sheet';
import { FTitle } from '@/components/typography/FTitle';
import { useTheme } from '@/hooks/common/use-theme';
import { FH3 } from '@/components/typography/FH3';
import { imgError } from '@/assets/images';
import { Col } from '@/components/grid/col';
import { ISubtitle } from '@/components/typography/ISubtitle';
import { routes } from '@/routes';
import { spacing } from '@/theme/spacing';

export const Container: React.FC<ContainerProps> = ({ error }) => {
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
                <FTitle textAlign={'center'} color={theme.text.white}>
                    {t('errorTitle')}
                </FTitle>
                <FH3
                    textAlign={'center'}
                    color={theme.text.darkPurple}
                    style={{ marginTop: 20 }}>
                    {t(`error${error}Title`)}
                </FH3>
                <img
                    src={imgError.src}
                    width={260}
                    height={260}
                    style={{
                        marginTop: 5,
                    }}
                />
                <ISubtitle
                    textAlign={'center'}
                    color={theme.text.white}
                    style={{ marginTop: 5 }}>
                    {t(`error${error}Description`)}
                </ISubtitle>
            </Col>
            <Button
                variant={'rounded'}
                color={'inverted'}
                href={routes.home}
                style={{
                    marginTop: 10,
                    marginBottom: spacing.form.submit.margin.bottom,
                }}>
                {t('errorGoHomeText')}
            </Button>
        </Sheet>
    );
};

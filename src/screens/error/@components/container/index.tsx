'use client';

import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import { ContainerProps } from './@types';
import { Sheet } from '@/components/layout/sheet';
import { FTitle } from '@/components/typography/FTitle';
import { useTheme } from '@/hooks/common/use-theme';
import { FH3 } from '@/components/typography/FH3';
import { imgError } from '@/assets/images';
import { Col } from '@/components/grid/col';
import { ISubtitle2 } from '@/components/typography/ISubtitle2';
import { routes } from '@/routes';
import { spacing } from '@/theme/spacing';
import { RoundButton } from '@/components/button/round-button';

export const Container: React.FC<ContainerProps> = ({ error }) => {
    const router = useRouter();

    const { t } = useTranslation();
    const { theme } = useTheme();

    const goHome = useCallback(() => {
        router.push(routes.home);
    }, []);

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
                <img
                    src={imgError.src}
                    width={245}
                    height={245}
                    style={{
                        marginTop: 20,
                    }}
                />
                <FH3
                    textAlign={'center'}
                    color={theme.text.title}
                    style={{ marginTop: 20 }}>
                    {t(`error${error}Title`)}
                </FH3>
                <ISubtitle2
                    textAlign={'center'}
                    color={theme.text.white}
                    style={{ marginTop: 35 }}>
                    {t(`error${error}Description`)}
                </ISubtitle2>
            </Col>
            <RoundButton
                color={'inverted'}
                text={t('errorGoHomeText')}
                shadow={true}
                onClick={goHome}
                sx={{
                    marginTop: 10,
                    marginBottom: spacing.form.submit.margin.bottom,
                }}
            />
        </Sheet>
    );
};

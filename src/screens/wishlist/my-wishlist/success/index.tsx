'use client';

import React, { ChangeEvent, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import { useTranslation } from 'react-i18next';

import { Sheet } from '@/components/layout/sheet';
import { Col } from '@/components/grid/col';
import { FH2 } from '@/components/typography/FH2';
import { useTheme } from '@/hooks/common/use-theme';
import { imgCongratulation } from '@/assets/images';
import { spacing } from '@/theme/spacing';
import { RoundButton } from '@/components/button/round-button';
import { fileState } from '@/recoil/atoms/common/file';
import { routes } from '@/routes';

export function Success() {
    const router = useRouter();

    const inputRef = useRef<HTMLInputElement>(null);

    const setFile = useSetRecoilState(fileState);

    const { t } = useTranslation();
    const { theme } = useTheme();

    const openImagePicker = useCallback(() => {
        inputRef.current?.click();
    }, []);

    const handleFile = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setFile(event.target.files?.item(0) ?? undefined);
        router.push(routes.profile.root);
    }, []);

    const goProfile = useCallback(() => {
        router.push(routes.profile.root);
    }, []);

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
                onClick={goProfile}
                shadow={true}
                sx={{
                    marginTop: 10,
                    marginLeft: 25,
                    marginRight: 25,
                    marginBottom: spacing.form.submit.margin.bottom,
                }}
            />
            <input
                ref={inputRef}
                type={'file'}
                accept={'image/*'}
                onChange={handleFile}
                style={{ display: 'none' }}
            />
        </Sheet>
    );
}

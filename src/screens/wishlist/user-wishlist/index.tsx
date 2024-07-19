'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import Fab from '@mui/material/Fab';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaCarouselType } from 'embla-carousel';

import { Sheet } from '@/components/layout/sheet';
import { Row } from '@/components/grid/row';
import { FH3 } from '@/components/typography/FH3';
import { useTheme } from '@/hooks/common/use-theme';
import { UserInfoRes } from '@/api/user-info/vm/res/user-info';
import { useFindProfileById } from '@/api/user-info/repository/find-profile-by-id';
import { UserWishListParams } from './@types';
import { Svg } from '@/components/image/svg';
import { iconClose, iconNext, iconPrev } from '@/assets/icons';
import { sizing, slideHeight, step } from './@constants';
import { Col } from '@/components/grid/col';
import { Avatar } from '@/components/userinfo/avatar';
import { FH2 } from '@/components/typography/FH2';
import { RoundButton } from '@/components/button/round-button';
import { spacing } from '@/theme/spacing';
import { IH2 } from '@/components/typography/IH2';
import { imgHand } from '@/assets/images';
import { useFindAllProductsByUserInfoId } from '@/api/wishlist/repository/find-all-products-by-user-info-id';
import { ProductInWishListRes } from '@/api/wishlist/vm/res/product-in-wish-list';
import { Slide } from './@components/slide';
import { Indicator } from './@components/indicator';
import { routes } from '@/routes';

export function UserWishList() {
    const router = useRouter();
    const params = useParams<UserWishListParams>();

    const { t } = useTranslation();
    const { theme } = useTheme();

    const { fetch } = useFindProfileById();
    const { fetch: findAllProductsByUserInfoId } =
        useFindAllProductsByUserInfoId();

    const [emblaRef, emblaApi] = useEmblaCarousel();

    const [user, setUser] = useState<UserInfoRes>();
    const [products, setProducts] = useState<ProductInWishListRes[][]>([]);
    const [index, setIndex] = useState<number>(0);

    const prev = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollPrev();
    }, [emblaApi]);

    const next = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setIndex(emblaApi.selectedScrollSnap());
    }, []);

    const goFunding = useCallback(() => {
        router.push(routes.funding.user(params.id));
    }, []);

    useEffect(() => {
        if (emblaApi) {
            onSelect(emblaApi);
            emblaApi.on('reInit', onSelect).on('select', onSelect);
        }
        return () => {
            emblaApi?.off('reInit', onSelect).off('select', onSelect);
        };
    }, [emblaApi, onSelect]);

    useEffect(() => {
        const getProfile = async () => {
            const { result } = await fetch(Number(params.id));
            if (result) {
                setUser(result);
            }
        };
        const getProducts = async () => {
            const { result } = await findAllProductsByUserInfoId(
                Number(params.id),
            );
            if (result) {
                let products: ProductInWishListRes[][] = [];
                let row: ProductInWishListRes[] = [];
                for (var i = 0; i < result.products.length; i++) {
                    if (i > 0 && i % step === 0) {
                        products.push(row);
                        row = [result.products[i]];
                    } else {
                        row.push(result.products[i]);
                        if (i === result.products.length - 1) {
                            products.push(row);
                        }
                    }
                }
                setProducts(products);
            }
        };
        getProfile();
        getProducts();
    }, []);

    return (
        <Sheet
            type={'white'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'space-between'}>
            <div>
                <Row alignItems={'center'} style={{ marginTop: 20 }}>
                    <FH3 color={theme.text.primary} style={{ flex: 1 }}>
                        {t('userWishListTitle', {
                            user: user?.name ?? '',
                        })}
                    </FH3>
                    <Fab
                        component={'label'}
                        sx={{
                            width: 35,
                            height: 35,
                            borderRadius: 9999,
                            padding: 0,
                        }}>
                        <Svg
                            src={iconClose}
                            color={theme.form.action.icon.black}
                            width={12}
                            height={12}
                        />
                    </Fab>
                </Row>

                <Col
                    alignItems={'center'}
                    style={{
                        marginTop: 5,
                    }}>
                    <Avatar user={user} size={sizing.avatar} />
                </Col>
                <div
                    style={{
                        backgroundColor: theme.background.primary,
                        borderRadius: sizing.sheet.borderRadius,
                        paddingTop: sizing.avatar / 2,
                        paddingBottom: 20,
                        marginTop: -sizing.avatar / 2,
                        overflow: 'hidden',
                        zIndex: 1,
                    }}>
                    <div style={{ position: 'relative' }}>
                        <FH2
                            textAlign={'center'}
                            color={theme.text.white}
                            sx={{
                                textTransform: 'uppercase',
                            }}>
                            {t('userWishListListTitle')}
                        </FH2>
                        <div
                            ref={emblaRef}
                            style={{ marginTop: 20, height: slideHeight }}>
                            <Row>
                                {products.map((items, i) => {
                                    return <Slide key={i} products={items} />;
                                })}
                            </Row>
                        </div>
                        <Row
                            alignItems={'center'}
                            justifyContent={'center'}
                            style={{ marginTop: 40 }}>
                            {products.map((_, i) => {
                                return (
                                    <Indicator
                                        key={i}
                                        selected={index === i}
                                        style={{
                                            ...(products.length === 1 && {
                                                opacity: 0,
                                            }),
                                            ...(i > 0 && {
                                                marginLeft:
                                                    sizing.slide.indicator.gap,
                                            }),
                                        }}
                                    />
                                );
                            })}
                        </Row>
                        {products.length > 1 && index > 0 && (
                            <Svg
                                src={iconPrev}
                                color={theme.icon.white}
                                width={sizing.slide.button.width}
                                height={sizing.slide.button.height}
                                onClick={prev}
                                style={{
                                    cursor: 'pointer',
                                    position: 'absolute',
                                    top: '50%',
                                    transform: `translateY(-${
                                        (sizing.slide.button.height +
                                            sizing.avatar / 2) /
                                        2
                                    }px)`,
                                    left: 15,
                                }}
                            />
                        )}
                        {products.length > 1 && index < products.length - 1 && (
                            <Svg
                                src={iconNext}
                                color={theme.icon.white}
                                width={sizing.slide.button.width}
                                height={sizing.slide.button.height}
                                onClick={next}
                                style={{
                                    cursor: 'pointer',
                                    position: 'absolute',
                                    top: '50%',
                                    transform: `translateY(-${
                                        (sizing.slide.button.height +
                                            sizing.avatar / 2) /
                                        2
                                    }px)`,
                                    right: 15,
                                }}
                            />
                        )}
                    </div>
                </div>
            </div>
            <div>
                <Row
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    style={{ marginTop: 10, marginLeft: 75, marginRight: 75 }}>
                    <img
                        src={imgHand.src}
                        width={sizing.guide.icon}
                        height={sizing.guide.icon}
                    />
                    <IH2 textAlign={'center'}>
                        {t('userWishListFundingGuide')}
                    </IH2>
                    <img
                        src={imgHand.src}
                        width={sizing.guide.icon}
                        height={sizing.guide.icon}
                    />
                </Row>
                <RoundButton
                    color={'primary'}
                    text={t('userWishListFundingText')}
                    onClick={goFunding}
                    sx={{
                        width: '100%',
                        marginTop: 10,
                        marginBottom: spacing.form.submit.margin.bottom,
                    }}
                />
            </div>
        </Sheet>
    );
}

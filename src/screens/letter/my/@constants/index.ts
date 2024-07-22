import {
    imgLetter1,
    imgLetter2,
    imgLetter3,
    imgLetter4,
    imgLetter5,
    imgLetter6,
    imgLetter7,
    imgLetter8,
    imgLetter9,
} from '@/assets/images';
import { Sticker } from '../@types';
import { calculateAssetHeight } from '@/helpers/common/calculate-asset-size';
import { color } from '@/theme/theme';

export const sizing = {
    funding: {
        rail: {
            height: 15,
        },
        thumb: {
            size: 30,
            border: 3,
        },
    },
    avatar: 75,
    sheet: {
        borderRadius: 20,
    },
    guide: {
        icon: 25,
    },
    share: {
        icon: 25,
    },
};

export const stickers: Sticker[] = [
    {
        img: imgLetter1,
        containerStyle: {
            width: 135,
            height: calculateAssetHeight(imgLetter1, 135),
            padding: 20,
            position: 'absolute',
            top: 100,
            left: -5,
            transform: 'rotate(13.01deg)',
        },
        textStyle: {
            color: color.white.default,
        },
    },
    {
        img: imgLetter2,
        containerStyle: {
            width: 125,
            height: calculateAssetHeight(imgLetter2, 125),
            padding: 20,
            position: 'absolute',
            top: 120,
            left: '50%',
            transform: 'translateX(-62.5px)',
        },
    },
    {
        img: imgLetter3,
        containerStyle: {
            width: 135,
            height: calculateAssetHeight(imgLetter3, 135),
            padding: 20,
            position: 'absolute',
            top: 100,
            right: -5,
            transform: 'rotate(-16.16deg)',
        },
    },
    {
        img: imgLetter4,
        containerStyle: {
            width: 180,
            height: calculateAssetHeight(imgLetter4, 180),
            padding: '20px 30px',
            position: 'absolute',
            top: 310,
            left: -30,
            transform: 'rotate(5.81deg)',
        },
    },
    {
        img: imgLetter5,
        containerStyle: {
            width: 190,
            height: calculateAssetHeight(imgLetter5, 190),
            padding: 20,
            position: 'absolute',
            top: 290,
            left: '50%',
            transform: 'translateX(-95px)',
            zIndex: 2,
        },
    },
    {
        img: imgLetter6,
        containerStyle: {
            width: 200,
            height: calculateAssetHeight(imgLetter6, 200),
            padding: 20,
            position: 'absolute',
            top: 300,
            right: -50,
        },
    },
    {
        img: imgLetter7,
        containerStyle: {
            width: 190,
            height: calculateAssetHeight(imgLetter7, 190),
            padding: '30px 20px',
            position: 'absolute',
            top: 455,
            left: -20,
            transform: 'rotate(10.52deg)',
        },
    },
    {
        img: imgLetter8,
        containerStyle: {
            width: 145,
            height: calculateAssetHeight(imgLetter8, 145),
            padding: '30px 20px',
            position: 'absolute',
            top: 480,
            left: '50%',
            transform: 'translateX(-72.5px)',
        },
    },
    {
        img: imgLetter9,
        containerStyle: {
            width: 135,
            height: calculateAssetHeight(imgLetter9, 135),
            padding: 20,
            position: 'absolute',
            top: 480,
            right: -10,
            transform: 'rotate(-13.73deg)',
        },
    },
];

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

export const stickers: Sticker[] = [
    {
        img: imgLetter1,
        style: {
            width: 135,
            height: calculateAssetHeight(imgLetter1, 135),
            position: 'absolute',
            top: 100,
            left: -5,
            transform: 'rotate(13.01deg)',
        },
    },
    {
        img: imgLetter2,
        style: {
            width: 125,
            height: calculateAssetHeight(imgLetter2, 125),
            position: 'absolute',
            top: 120,
            left: '50%',
            transform: 'translateX(-62.5px)',
        },
    },
    {
        img: imgLetter3,
        style: {
            width: 135,
            height: calculateAssetHeight(imgLetter3, 135),
            position: 'absolute',
            top: 100,
            right: -5,
            transform: 'rotate(-16.16deg)',
        },
    },
    {
        img: imgLetter4,
        style: {
            width: 180,
            height: calculateAssetHeight(imgLetter4, 180),
            position: 'absolute',
            top: 310,
            left: -30,
            transform: 'rotate(5.81deg)',
        },
    },
    {
        img: imgLetter5,
        style: {
            width: 190,
            height: calculateAssetHeight(imgLetter5, 190),
            position: 'absolute',
            top: 290,
            left: '50%',
            transform: 'translateX(-95px)',
            zIndex: 2,
        },
    },
    {
        img: imgLetter6,
        style: {
            width: 200,
            height: calculateAssetHeight(imgLetter6, 200),
            position: 'absolute',
            top: 300,
            right: -50,
        },
    },
    {
        img: imgLetter7,
        style: {
            width: 190,
            height: calculateAssetHeight(imgLetter7, 190),
            position: 'absolute',
            top: 455,
            left: -20,
            transform: 'rotate(10.52deg)',
        },
    },
    {
        img: imgLetter8,
        style: {
            width: 145,
            height: calculateAssetHeight(imgLetter8, 145),
            position: 'absolute',
            top: 480,
            left: '50%',
            transform: 'translateX(-72.5px)',
        },
    },
    {
        img: imgLetter9,
        style: {
            width: 135,
            height: calculateAssetHeight(imgLetter9, 135),
            position: 'absolute',
            top: 480,
            right: -10,
            transform: 'rotate(-13.73deg)',
        },
    },
];

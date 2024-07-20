import { Size } from '@/@types';

export function calculateAssetWidth(image: Size, h: number): number {
    return (image.width * h) / image.height;
}

export function calculateAssetHeight(image: Size, w: number): number {
    return (image.height * w) / image.width;
}

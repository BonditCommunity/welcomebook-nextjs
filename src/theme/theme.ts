import { PaletteOptions } from '@mui/material/styles';

import { Color } from './@enums';
import { TypeButton, TypeSheet } from './@types';

declare module '@mui/material/styles/createPalette' {
    interface TypeText {
        default: string;
        white: string;
        test: string;
    }
    interface PaletteOptions {
        button: TypeButton;
        sheet: TypeSheet;
    }
    interface Palette {
        button: TypeButton;
        sheet: TypeSheet;
    }
}

export const light: PaletteOptions = {
    background: {
        default: Color.white,
    },
    text: {
        default: Color.black,
        white: Color.white,
        primary: Color.main,
        secondary: Color.green,
        test: Color.main,
    },
    button: {
        default: {
            background: Color.black,
            text: Color.white,
        },
        disabled: {
            background: Color.white,
            text: Color.black,
        },
    },
    sheet: {
        background: {
            default: Color.main,
            black: Color.black,
        },
        handle: Color.grayA1,
    },
};

export const dark: PaletteOptions = {
    background: {
        default: Color.white,
    },
    text: {
        default: Color.black,
        white: Color.white,
        primary: Color.main,
        secondary: Color.green,
        test: Color.main,
    },
    button: {
        default: {
            background: Color.black,
            text: Color.white,
        },
        disabled: {
            background: Color.white,
            text: Color.black,
        },
    },
    sheet: {
        background: {
            default: Color.main,
            black: Color.black,
        },
        handle: Color.grayA1,
    },
};

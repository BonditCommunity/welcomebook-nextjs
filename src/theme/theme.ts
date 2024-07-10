import { PaletteOptions } from '@mui/material';

import { Color } from './@enums';
import { TypeButton } from './@types';

declare module '@mui/material/styles/createPalette' {
    interface TypeText {
        default: string;
        white: string;
        test: string;
    }
    interface PaletteOptions {
        button: TypeButton;
    }
    interface Palette {
        button: TypeButton;
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
};

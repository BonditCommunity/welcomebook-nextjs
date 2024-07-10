import { PaletteOptions } from '@mui/material';

import { Color } from './@enums';

declare module '@mui/material/styles/createPalette' {
    interface TypeText {
        default: string;
        white: string;
    }
    interface PaletteOptions {
        button: {
            default: {
                background: string;
                text: string;
            };
        };
    }
}

export const light: PaletteOptions = {
    background: {
        default: Color.white,
    },
    text: {
        default: Color.black,
        white: Color.white,
    },
    button: {
        default: {
            background: Color.black,
            text: Color.white,
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
    },
    button: {
        default: {
            background: Color.black,
            text: Color.white,
        },
    },
};

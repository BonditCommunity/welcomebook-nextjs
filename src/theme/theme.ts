import { PaletteOptions } from '@mui/material/styles';

import { Color } from './@enums';
import { TypeButton, TypeForm, TypeIcon, TypeSheet } from './@types';

declare module '@mui/material/styles/createPalette' {
    interface TypeText {
        default: string;
        white: string;
        caption: string;
    }
    interface PaletteOptions {
        icon: TypeIcon;
        button: TypeButton;
        form: TypeForm;
        sheet: TypeSheet;
    }
    interface Palette {
        icon: TypeIcon;
        button: TypeButton;
        form: TypeForm;
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
        caption: Color.grayA1,
    },
    icon: {
        white: Color.white,
        info: Color.green,
        error: Color.red,
    },
    button: {
        default: {
            background: Color.black,
            text: Color.white,
        },
        disabled: {
            background: Color.black,
            text: Color.white,
        },
    },
    form: {
        textfield: {
            background: Color.dark_purple,
            text: Color.white,
            placeholder: Color.purple,
            error: Color.red,
            border: Color.white,
        },
        checkbox: {
            icon: Color.white,
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
        caption: Color.grayA1,
    },
    icon: {
        white: Color.white,
        info: Color.green,
        error: Color.red,
    },
    button: {
        default: {
            background: Color.black,
            text: Color.white,
        },
        disabled: {
            background: Color.black,
            text: Color.white,
        },
    },
    form: {
        textfield: {
            background: Color.dark_purple,
            text: Color.white,
            placeholder: Color.purple,
            error: Color.red,
            border: Color.white,
        },
        checkbox: {
            icon: Color.white,
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

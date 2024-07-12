import { PaletteOptions } from '@mui/material/styles';

import { Color } from './@enums';
import {
    TypeBorder,
    TypeButton,
    TypeForm,
    TypeIcon,
    TypeSheet,
} from './@types';

declare module '@mui/material/styles/createPalette' {
    interface TypeBackground {
        primary: string;
        black: string;
        gray: string;
    }
    interface TypeText {
        default: string;
        white: string;
        caption: string;
        darkPurple: string;
    }
    interface PaletteOptions {
        icon: TypeIcon;
        button: TypeButton;
        form: TypeForm;
        sheet: TypeSheet;
        border: TypeBorder;
    }
    interface Palette {
        icon: TypeIcon;
        button: TypeButton;
        form: TypeForm;
        sheet: TypeSheet;
        border: TypeBorder;
    }
}

export const light: PaletteOptions = {
    background: {
        default: Color.white,
        primary: Color.main,
        black: Color.black,
        gray: Color.gray47,
    },
    text: {
        default: Color.black,
        white: Color.white,
        primary: Color.main,
        secondary: Color.green,
        caption: Color.grayA1,
        darkPurple: Color.dark_purple,
    },
    icon: {
        white: Color.white,
        info: Color.green,
        error: Color.red,
        caption: Color.grayA1,
    },
    button: {
        default: {
            background: Color.black,
            text: Color.white,
        },
        disabled: {
            background: Color.grayA1,
            text: Color.white,
        },
        rounded: {
            background: Color.main,
            text: Color.white,
        },
    },
    form: {
        base: {
            text: Color.black,
            placeholder: Color.grayA1,
        },
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
        upload: {
            background: Color.grayF6F7F9,
            icon: Color.gray47,
        },
        autocomplete: {
            background: Color.white,
            text: Color.black,
            group: {
                background: Color.white,
                text: Color.grayA1,
            },
            selected: {
                background: Color.light_purple,
                text: Color.main,
            },
        },
    },
    sheet: {
        background: {
            default: Color.main,
            black: Color.black,
            white: Color.white,
        },
        handle: Color.grayA1,
    },
    border: {
        primary: Color.main,
    },
};

export const dark: PaletteOptions = {
    background: {
        default: Color.white,
        primary: Color.main,
        black: Color.black,
        gray: Color.gray47,
    },
    text: {
        default: Color.black,
        white: Color.white,
        primary: Color.main,
        secondary: Color.green,
        caption: Color.grayA1,
        darkPurple: Color.dark_purple,
    },
    icon: {
        white: Color.white,
        info: Color.green,
        error: Color.red,
        caption: Color.grayA1,
    },
    button: {
        default: {
            background: Color.black,
            text: Color.white,
        },
        disabled: {
            background: Color.grayA1,
            text: Color.white,
        },
        rounded: {
            background: Color.main,
            text: Color.white,
        },
    },
    form: {
        base: {
            text: Color.black,
            placeholder: Color.grayA1,
        },
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
        upload: {
            background: Color.grayF6F7F9,
            icon: Color.gray47,
        },
        autocomplete: {
            background: Color.white,
            text: Color.black,
            group: {
                background: Color.white,
                text: Color.grayA1,
            },
            selected: {
                background: Color.light_purple,
                text: Color.main,
            },
        },
    },
    sheet: {
        background: {
            default: Color.main,
            black: Color.black,
            white: Color.white,
        },
        handle: Color.grayA1,
    },
    border: {
        primary: Color.main,
    },
};

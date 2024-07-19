import { PaletteOptions } from '@mui/material/styles';

import {
    TypeBorder,
    TypeButton,
    TypeDialog,
    TypeForm,
    TypeIcon,
    TypeSheet,
} from './@types';

declare module '@mui/material/styles/createPalette' {
    interface TypeBackground {
        primary: string;
        black: string;
    }
    interface TypeText {
        default: string;
        white: string;
        caption: string;
        title: string;
    }
    interface PaletteOptions {
        icon: TypeIcon;
        button: TypeButton;
        form: TypeForm;
        sheet: TypeSheet;
        border: TypeBorder;
        dialog: TypeDialog;
    }
    interface Palette {
        icon: TypeIcon;
        button: TypeButton;
        form: TypeForm;
        sheet: TypeSheet;
        border: TypeBorder;
        dialog: TypeDialog;
    }
}

export const color = {
    black: {
        default: '#000000',
    },
    white: {
        default: '#FFFFFF',
    },
    red: {
        default: '#FE0000',
    },
    green: {
        default: '#05FF00',
    },
    blue: {
        default: '#1337F0',
        '0': '#EEF4FF',
    },
    yellow: {
        default: '#05FF00',
    },
    gray: {
        AA: '#AAAAAA',
        E7: '#E7E7E7',
    },
    primary: {
        default: '#6648F4',
        '0': '#4C35B9',
        '1': '#A999F9',
        '2': '#B8A9FF',
        '3': '#F8F0FF',
    },
    secondary: {
        default: '#CBEE4C',
    },
};

export const light: PaletteOptions = {
    background: {
        default: color.white.default,
        primary: color.primary.default,
        black: color.black.default,
    },
    text: {
        default: color.black.default,
        white: color.white.default,
        primary: color.primary.default,
        secondary: color.secondary.default,
        caption: color.gray.AA,
        title: color.primary['0'],
    },
    icon: {
        white: color.white.default,
        action: color.black.default,
        caption: color.gray.AA,
    },
    button: {
        default: {
            background: color.black.default,
            text: color.white.default,
        },
        primary: {
            background: color.primary.default,
            text: color.white.default,
        },
        inverted: {
            background: color.white.default,
            text: color.primary.default,
        },
        disabled: {
            background: color.gray.AA,
            text: color.white.default,
        },
    },
    form: {
        base: {
            text: color.black.default,
            placeholder: color.gray.AA,
            error: color.red.default,
        },
        standard: {
            border: color.black.default,
        },
        outlined: {
            text: color.white.default,
            background: {
                default: color.primary['0'],
                inverted: color.gray.E7,
                black: 'transparent',
                focused: {
                    default: color.primary['0'],
                    inverted: color.primary.default,
                    black: 'transparent',
                },
            },
            placeholder: {
                default: color.primary['2'],
                inverted: color.gray.AA,
                black: color.gray.AA,
            },
            border: {
                default: color.primary['0'],
                inverted: color.gray.E7,
                black: color.white.default,
                focused: {
                    default: color.white.default,
                    inverted: color.primary.default,
                    black: color.white.default,
                },
                hover: {
                    default: color.white.default,
                    inverted: 'transparent',
                    black: color.white.default,
                },
            },
        },
        checkbox: {
            icon: color.white.default,
        },
        upload: {
            background: color.gray.E7,
            icon: color.gray.AA,
        },
        autocomplete: {
            background: color.white.default,
            text: color.black.default,
            group: {
                background: color.white.default,
                text: color.gray.AA,
            },
            selected: {
                background: color.blue['0'],
                text: color.blue.default,
            },
        },
    },
    sheet: {
        background: {
            default: color.primary.default,
            black: color.black.default,
            white: color.white.default,
        },
        handle: color.gray.AA,
    },
    border: {
        default: color.gray.E7,
        primary: color.primary.default,
    },
    dialog: {
        background: color.white.default,
        action: {
            default: {
                background: color.primary.default,
                text: color.black.default,
                border: color.primary.default,
            },
            inverted: {
                background: color.white.default,
                text: color.black.default,
                border: color.primary.default,
            },
        },
    },
};

export const dark: PaletteOptions = {
    background: {
        default: color.white.default,
        primary: color.primary.default,
        black: color.black.default,
    },
    text: {
        default: color.black.default,
        white: color.white.default,
        primary: color.primary.default,
        secondary: color.secondary.default,
        caption: color.gray.AA,
        title: color.primary['0'],
    },
    icon: {
        white: color.white.default,
        action: color.black.default,
        caption: color.gray.AA,
    },
    button: {
        default: {
            background: color.black.default,
            text: color.white.default,
        },
        primary: {
            background: color.primary.default,
            text: color.white.default,
        },
        inverted: {
            background: color.white.default,
            text: color.primary.default,
        },
        disabled: {
            background: color.gray.AA,
            text: color.white.default,
        },
    },
    form: {
        base: {
            text: color.black.default,
            placeholder: color.gray.AA,
            error: color.red.default,
        },
        standard: {
            border: color.black.default,
        },
        outlined: {
            text: color.white.default,
            background: {
                default: color.primary['0'],
                inverted: color.gray.E7,
                black: 'transparent',
                focused: {
                    default: color.primary['0'],
                    inverted: color.primary.default,
                    black: 'transparent',
                },
            },
            placeholder: {
                default: color.primary['2'],
                inverted: color.gray.AA,
                black: color.gray.AA,
            },
            border: {
                default: 'transparent',
                inverted: 'transparent',
                black: color.white.default,
                focused: {
                    default: color.white.default,
                    inverted: 'transparent',
                    black: color.white.default,
                },
                hover: {
                    default: color.white.default,
                    inverted: 'transparent',
                    black: color.white.default,
                },
            },
        },
        checkbox: {
            icon: color.white.default,
        },
        upload: {
            background: color.gray.E7,
            icon: color.gray.AA,
        },
        autocomplete: {
            background: color.white.default,
            text: color.black.default,
            group: {
                background: color.white.default,
                text: color.gray.AA,
            },
            selected: {
                background: color.blue['0'],
                text: color.blue.default,
            },
        },
    },
    sheet: {
        background: {
            default: color.primary.default,
            black: color.black.default,
            white: color.white.default,
        },
        handle: color.gray.AA,
    },
    border: {
        default: color.gray.E7,
        primary: color.primary.default,
    },
    dialog: {
        background: color.white.default,
        action: {
            default: {
                background: color.primary.default,
                text: color.black.default,
                border: color.primary.default,
            },
            inverted: {
                background: color.white.default,
                text: color.black.default,
                border: color.primary.default,
            },
        },
    },
};

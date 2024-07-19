export interface TypeIcon {
    white: string;
    action: string;
    caption: string;
}

export interface TypeButton {
    default: {
        background: string;
        text: string;
    };
    primary: {
        background: string;
        text: string;
    };
    inverted: {
        background: string;
        text: string;
    };
    disabled: {
        background: string;
        text: string;
    };
}

export interface TypeForm {
    base: {
        text: string;
        placeholder: string;
        error: string;
    };
    standard: {
        border: string;
    };
    outlined: {
        text: string;
        background: {
            default: string;
            inverted: string;
            black: string;
            focused: {
                default: string;
                inverted: string;
                black: string;
            };
        };
        placeholder: {
            default: string;
            inverted: string;
            black: string;
        };
        border: {
            default: string;
            inverted: string;
            black: string;
            focused: {
                default: string;
                inverted: string;
                black: string;
            };
            hover: {
                default: string;
                inverted: string;
                black: string;
            };
        };
    };
    checkbox: {
        icon: string;
    };
    upload: {
        background: string;
        icon: string;
    };
    autocomplete: {
        background: string;
        text: string;
        group: {
            background: string;
            text: string;
        };
        selected: {
            background: string;
            text: string;
        };
    };
}

export interface TypeSheet {
    background: {
        default: string;
        black: string;
        white: string;
    };
    handle: string;
}

export interface TypeBorder {
    default: string;
    primary: string;
}

export interface TypeDialog {
    background: string;
    action: {
        default: {
            background: string;
            text: string;
            border: string;
        };
        inverted: {
            background: string;
            text: string;
            border: string;
        };
    };
}

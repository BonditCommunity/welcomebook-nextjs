export interface TypeIcon {
    white: string;
    info: string;
    error: string;
    caption: string;
}

export interface TypeButton {
    default: {
        background: string;
        text: string;
    };
    disabled: {
        background: string;
        text: string;
    };
    rounded: {
        background: string;
        text: string;
    };
}

export interface TypeForm {
    base: {
        text: string;
        placeholder: string;
    };
    textfield: {
        background: string;
        text: string;
        placeholder: string;
        error: string;
        border: string;
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
    primary: string;
}

export interface TypeIcon {
    white: string;
    info: string;
    error: string;
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
}

export interface TypeSheet {
    background: {
        default: string;
        black: string;
    };
    handle: string;
}

export interface TypeIcon {
    white: string;
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
}

export interface TypeSheet {
    background: {
        default: string;
        black: string;
    };
    handle: string;
}

export const sizing = {
    avatar: 95,
    sheet: {
        borderRadius: 30,
    },
    product: {
        image: 70,
        gap: 20,
    },
    slide: {
        button: {
            width: 30,
            height: 36,
        },
        indicator: {
            size: 6,
            gap: 3,
        },
    },
    guide: {
        icon: 25,
    },
};

export const step = 3;

export const slideHeight =
    sizing.product.image * step + sizing.product.gap * (step - 1);

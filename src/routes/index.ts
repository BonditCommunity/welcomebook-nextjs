export const routes = {
    home: '/',
    signUp: '/sign-up',
    wishlist: {
        root: '/wishlist',
        my: '/wishlist/my',
    },
    terms: {
        service: '/terms/service',
        privacy: '/terms/privacy',
    },
    funding: {
        root: '/funding',
        success: '/funding/success',
    },
    message: {
        send: '/message/send',
    },
    profile: {
        address: '/profile/address',
    },
};

export const loginRequiredRoutes: string[] = [
    routes.wishlist.root,
    routes.wishlist.my,
    routes.profile.address,
];

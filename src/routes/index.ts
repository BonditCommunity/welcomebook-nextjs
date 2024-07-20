export const routes = {
    origin: 'https://uscollege.live',
    home: '/',
    signUp: '/sign-up',
    wishlist: {
        root: '/wishlist',
        my: '/wishlist/my',
        user: (id: string) => `/wishlist/user/${id}`,
    },
    terms: {
        service: '/terms/service',
        privacy: '/terms/privacy',
    },
    funding: {
        user: (id: string) => `/funding/user/${id}`,
        success: (id: string) => `/funding/success/${id}`,
    },
    profile: {
        root: '/profile',
        address: '/profile/address',
    },
    letter: {
        my: '/letter/my',
        send: (id: string) => `/message/send/${id}`,
    },
    api: {
        createCheckoutSession: '/api/create-checkout-session',
    },
};

export const loginRequiredRoutes: string[] = [
    routes.wishlist.root,
    routes.wishlist.my,
    routes.profile.root,
    routes.profile.address,
    routes.letter.my,
];

export const errors = {
    common: 'errorCommon',
    form: {
        required: {
            user: {
                name: 'errorFormRequiredUserName',
                school: 'errorFormRequiredUserSchool',
                terms: 'errorFormRequiredUserTerms',
            },
            message: {
                message: 'errorFormRequiredMessageMessage',
                name: 'errorFormRequiredMessageName',
            },
            address: {
                country: 'errorFormRequiredAddressCountry',
                address: 'errorFormRequiredAddressAddress',
                city: 'errorFormRequiredAddressCity',
            },
            funding: {
                amount: 'errorFormRequiredFundingAmount',
            },
        },
        invalid: {
            funding: {
                amount: 'errorFormInvalidFundingAmount',
            },
        },
    },
};

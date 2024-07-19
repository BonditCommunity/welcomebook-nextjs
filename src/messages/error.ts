export const errors = {
    common: 'errorCommon',
    form: {
        required: {
            user: {
                name: 'errorFormRequiredUserName',
                college: 'errorFormRequiredUserCollege',
                terms: 'errorFormRequiredUserTerms',
            },
            message: {
                content: 'errorFormRequiredMessageContent',
                writer: 'errorFormRequiredMessageWriter',
            },
            address: {
                country: 'errorFormRequiredAddressCountry',
                streetAddress: 'c',
                city: 'errorFormRequiredAddressCity',
                zipCode: 'errorFormRequiredAddressZipCode',
                phoneNumber: 'errorFormRequiredAddressPhoneNumber',
            },
            funding: {
                amount: 'errorFormRequiredFundingAmount',
                name: 'errorFormRequiredFundingName',
                mobile: 'errorFormRequiredFundingMobile',
                countryNumber: 'errorFormRequiredFundingCountryNumber',
            },
        },
        invalid: {
            funding: {
                amount: 'errorFormInvalidFundingAmount',
            },
        },
    },
};

export interface OrderListReq {
    country: string;
    streetAddress: string;
    city: string;
    optionalAddress?: string;
    zipCode: string;
    phoneNumber: string;
}

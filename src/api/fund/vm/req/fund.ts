export interface FundReq {
    orderUid: string;
    recipientId: number;
    amount: number;
    name?: string;
    countryNumber?: string;
    mobile?: string;
}

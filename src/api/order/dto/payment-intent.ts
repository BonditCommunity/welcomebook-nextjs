export interface PaymentReq {
    orderUid: string;
    amount: number;
    currency: string;
    putSourceId: number;
}

export interface PaymentIntentRes {
    clientSecret: string;
}

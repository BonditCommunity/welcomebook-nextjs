export interface StripePaymentReq {
    orderUid: string;
    sessionId?: string;
    totalPrice: number;
    transactionDate?: string;
}

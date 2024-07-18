export interface StripePaymentReq {
    orderUid: string;
    currencyCode: string;
    currencySymbol: string;
    totalPrice: number;
    purchaseId?: string;
    transactionDate?: string;
}

export interface StripePaymentRes {
    id: number;
    paymentUid: string;
    totalPrice: number;
    purchaseId?: string;
    orderHistoryId: number;
}

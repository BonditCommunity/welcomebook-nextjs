export interface StripePaymentReq {
    orderUid: string;
    currencyCode: string;
    currencySymbol: string;
    totalPrice: number;
    purchaseId?: string;
    transactionDate?: string;
}

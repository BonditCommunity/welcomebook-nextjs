export interface StripePaymentRes {
    id: number;
    paymentUid: string;
    totalPrice: number;
    purchaseId?: string;
    orderHistoryId: number;
}

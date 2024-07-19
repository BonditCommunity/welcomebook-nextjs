export interface PaymentReq {
    orderUid: string;
    amount: number;
    currency: string;
    putSourceId: number;
}

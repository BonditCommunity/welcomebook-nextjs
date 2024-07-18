import { OrderStatus, PaymentMethodType } from '../entity/@enums';

export interface PreOrderPaymentReq {
    paymentMethod: PaymentMethodType;
    currency: string;
    currencySymbol: string;
    totalPrice: number;
}

export interface PreOrderRes {
    orderUid: string;
    status: OrderStatus;
}

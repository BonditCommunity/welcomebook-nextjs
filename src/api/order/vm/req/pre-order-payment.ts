import { PaymentMethodType } from '../enum/payment-method-type';

export interface PreOrderPaymentReq {
    paymentMethod: PaymentMethodType;
    currency: string;
    currencySymbol: string;
    totalPrice: number;
}

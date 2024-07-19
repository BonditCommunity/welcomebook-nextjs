import { OrderStatus } from '../enum/order-status';

export interface PreOrderRes {
    orderUid: string;
    status: OrderStatus;
}

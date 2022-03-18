import { Publisher, OrderCancelledEvent, Subjects } from '@wamtickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled; 
}
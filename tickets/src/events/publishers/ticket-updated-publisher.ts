import { Publisher, Subjects, TicketUpdatedEvent } from '@wamtickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}

import { Publisher, Subjects, TicketCreatedEvent } from '@wamtickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}

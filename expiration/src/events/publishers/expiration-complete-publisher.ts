import { Subjects, Publisher, ExpirationCompleteEvent } from '@wamtickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;

  
}
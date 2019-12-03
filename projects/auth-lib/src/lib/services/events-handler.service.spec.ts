/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EventsHandlerService } from './events-handler.service';

describe('Service: EventsHandler', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventsHandlerService]
    });
  });

  it('should ...', inject([EventsHandlerService], (service: EventsHandlerService) => {
    expect(service).toBeTruthy();
  }));
});

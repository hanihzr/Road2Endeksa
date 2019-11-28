import { Component } from '@angular/core';
import { EventsHandlerService } from 'dist/auth-lib';
import { Location } from '@angular/common';

@Component({
  selector: 'ndska-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  triggeredEventsMessange: string = null;

  triggeredEventColor: string = null;

  constructor(eventsHandlerService: EventsHandlerService, location: Location) {
    eventsHandlerService.successHappened.subscribe(successMessage => {
      if (successMessage) {
        this.triggeredEventsMessange = successMessage;
        this.triggeredEventColor = '#27ae60';
      }
    });

    eventsHandlerService.infoHappened.subscribe(infoMessage => {
      if (infoMessage) {
        this.triggeredEventsMessange = infoMessage;
        this.triggeredEventColor = '#2980b9';
      }
    });

    eventsHandlerService.warningHappened.subscribe(warnMessage => {
      if (warnMessage) {
        this.triggeredEventsMessange = warnMessage;
        this.triggeredEventColor = '#e67e22';
      }
    });

    eventsHandlerService.errorHappened.subscribe(errorMessage => {
      if (errorMessage) {
        this.triggeredEventsMessange = errorMessage;
        this.triggeredEventColor = '#c0392b';
      }
    });

    eventsHandlerService.goBackRequest.subscribe(result => {
      if (result) {
        location.back();
      }
    });
  }
}

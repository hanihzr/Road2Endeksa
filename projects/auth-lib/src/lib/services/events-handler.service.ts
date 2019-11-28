import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class EventsHandlerService {


  public errorHappened: BehaviorSubject<string> = new BehaviorSubject(null);

  public successHappened: BehaviorSubject<string> = new BehaviorSubject(null);

  public warningHappened: BehaviorSubject<string> = new BehaviorSubject(null);

  public infoHappened: BehaviorSubject<string> = new BehaviorSubject(null);

  constructor() { }

}

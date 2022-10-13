import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeauthService {

  isConnected: boolean = false;

  stateSubject: Subject<boolean> = new Subject<boolean>();

  constructor () { }

  connect () {
    this.isConnected = true;
    this.notifySubscriber();
  }

  disconnect () {
    this.isConnected = false;
    this.notifySubscriber();
  }

  notifySubscriber () {
    this.stateSubject.next(this.isConnected);
  }
}

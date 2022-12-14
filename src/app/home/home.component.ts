import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FakeauthService } from '../demos/services/fakeauth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  state!: boolean;
  serviceSub!: Subscription;

  constructor (
    private _AuthService: FakeauthService
  ) { }

  ngOnInit (): void {
    this.state = this._AuthService.isConnected;
    this.serviceSub = this._AuthService.stateSubject.subscribe({
      next: (state: boolean) => this.state = state
    })
  }

  ngOnDestroy (): void {
    this.serviceSub.unsubscribe();
  }

  login () {
    this._AuthService.connect();
    this.state = this._AuthService.isConnected;
  }

  logout () {
    this._AuthService.disconnect();
    this.state = this._AuthService.isConnected;
  }

}

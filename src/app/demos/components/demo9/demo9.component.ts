import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FakeauthService } from '../../services/fakeauth.service';

@Component({
  selector: 'app-demo9',
  templateUrl: './demo9.component.html',
  styleUrls: ['./demo9.component.css']
})
export class Demo9Component implements OnInit, OnDestroy {

  isConnected!: boolean;
  serviceSub!: Subscription;

  constructor (
    private _AuthService: FakeauthService
  ) { }

  ngOnInit (): void {
    this.isConnected = this._AuthService.isConnected;
    this.serviceSub = this._AuthService.stateSubject.subscribe({
      next: (state: boolean) => this.isConnected = state
    })
  }

  ngOnDestroy (): void {
    this.serviceSub.unsubscribe();
  }

  login () {
    this._AuthService.connect();
    this.isConnected = this._AuthService.isConnected;
  }

  logout () {
    this._AuthService.disconnect();
    this.isConnected = this._AuthService.isConnected;
  }

}

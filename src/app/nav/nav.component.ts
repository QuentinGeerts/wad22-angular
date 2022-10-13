import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FakeauthService } from '../demos/services/fakeauth.service';
import { Link } from './Link';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {

  liens!: Link[];
  isAuth!: boolean;
  serviceSub!: Subscription;

  constructor (
    private _AuthService: FakeauthService
  ) { }

  ngOnInit (): void {
    this.liens = [
      { title: 'Accueil', url: 'home' },
      { title: 'A propos', url: 'about' },
      {
        title: 'Démonstrations', url: 'demos', children: [
          { title: 'One-Way Binding', url: 'demos/demo1' },
          { title: 'Two-Way Binding', url: 'demos/demo2' },
          { title: 'Event Binding', url: 'demos/demo3' },
          { title: 'Attribute Binding', url: 'demos/demo4' },
          { title: 'Les Pipes', url: 'demos/demo5' },
          { title: 'Component Directives', url: 'demos/demo6' },
          { title: 'Structural Directives', url: 'demos/demo7' },
          { title: '@Input / @Output', url: 'demos/demo8' },
          { title: 'Services et injections', url: 'demos/demo9' },
        ]
      },
      {
        title: 'Exercices', url: 'exos', children: [
          { title: 'Chronomètre', url: 'exos/exo1' },
          { title: 'Shopping List', url: 'exos/exo2' },
        ]
      },
    ];

    this.isAuth = this._AuthService.isConnected;
    this.serviceSub = this._AuthService.stateSubject.subscribe({
      next: (state: boolean) => this.isAuth = state
    })
  }

  ngOnDestroy (): void {
    this.serviceSub.unsubscribe();
  }

  toggleVisible (index: number) {
    this.liens[index].isVisible = !this.liens[index].isVisible;
  }

  login () {
    this._AuthService.connect();
    this.isAuth = this._AuthService.isConnected;
  }

  logout () {
    this._AuthService.disconnect();
    this.isAuth = this._AuthService.isConnected;
  }

}

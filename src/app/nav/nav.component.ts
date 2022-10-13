import { Component, OnInit } from '@angular/core';
import { Link } from './Link';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  liens!: Link[];

  constructor () { }

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
        ]
      },
      {
        title: 'Exercices', url:'exos', children: [
          { title: 'Chronomètre', url: 'exos/exo1' },
        ]
      },
    ];
  }

  toggleVisible (index: number) {
    this.liens[index].isVisible = !this.liens[index].isVisible;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.css']
})
export class Demo3Component implements OnInit {

  variable!: string;

  constructor () { }

  ngOnInit (): void {

    this.variable = "Hello";

  }

  maMethode (texte: string): void {
    this.variable = texte;
  }

}

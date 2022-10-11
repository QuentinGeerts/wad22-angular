import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.css']
})
export class Demo3Component implements OnInit {

  variable!: string;
  texte!: string;

  constructor () { }

  ngOnInit (): void {

    this.variable = "Hello";
    this.texte = "Hello";

  }

  maMethode (texte: string): void {
    this.variable = texte;
  }

  changeValue (event: Event): void {
    let content = "Voici mon contenu"; // Variable locale
    // console.log((event.target as HTMLInputElement).value);
    this.texte = (event.target as HTMLInputElement).value;
  }

}

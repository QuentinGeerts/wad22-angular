import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo2',
  templateUrl: './exo2.component.html',
  styleUrls: ['./exo2.component.css']
})
export class Exo2Component implements OnInit {

  liste!: string[];
  article!: string;

  constructor () { }

  ngOnInit (): void {
    this.liste = ['souris', 'clavier'];
  }

  addToCart () {
    this.liste.push(this.article);
    this.article = "";
  }

  removeToCart (index: number) : void {
    this.liste.splice(index, 1)
  }

}

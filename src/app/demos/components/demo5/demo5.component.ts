import { Component, OnInit } from '@angular/core';
import { Personne } from './Personne';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrls: ['./demo5.component.css']
})
export class Demo5Component implements OnInit {

  maVar1!: string;
  maVar2!: number;
  maVar3!: Date;

  maVar4!: number;

  maVar5!: Personne;

  maVar6!: number;
  maVar7!: number;

  constructor () { }

  ngOnInit (): void {
    this.maVar1 = "Salut tout le monde !";
    this.maVar2 = 10.455;
    this.maVar3 = new Date();

    this.maVar4 = .06635556;

    this.maVar5 = {
      lastname: 'Geerts',
      firstname: 'Quentin',
      birthdate: new Date(1996, 3, 3),
    };

    this.maVar6 = 23.5;
    this.maVar7 = 74.3;
  }

}

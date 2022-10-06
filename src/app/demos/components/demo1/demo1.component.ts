import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {

  maVariable1: string | undefined;
  maVariable2!: string; // definite assignment assertion
  maVariable3: string = "Bonjour";
  maVariable4: number = 0;
  declare maVariable5: boolean; // ambient declaration

  maVariable6: null = null;
  maVariable7: undefined;
  maVariable8: any;
  maVariable9: any[] = [12, "a", () => { }, true];

  constructor () { }

  ngOnInit (): void {

    this.maVariable1 = "Coucou";
    this.maVariable2 = "Hello";

    this.maVariable5 = true;

    this.maVariable8 = () => "Hello";
  }
}

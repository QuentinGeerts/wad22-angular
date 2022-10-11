import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {

  inputValue: string = "Valeur par défaut";
  numberValue!: number;
  bool!: boolean;

  constructor () { }

  ngOnInit (): void {
    this.numberValue = 42;
    this.bool = false;
  }

}

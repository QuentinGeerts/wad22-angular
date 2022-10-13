import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrls: ['./demo7.component.css']
})
export class Demo7Component implements OnInit {

  isToggled!: boolean;
  liste!: string[];
  students!: any[];

  inputValue!: string;

  constructor () { }

  ngOnInit (): void {
    this.isToggled = true;
    this.liste = ["pomme", "poire", "mangue", "cerise", "ananas", "pêche"];

    this.students = [
      { lastname: "Geerts", firstname: "Quentin" },
      { lastname: "Geerts", firstname: "Quentin" },
      { lastname: "Geerts", firstname: "Quentin" },
      { lastname: "Geerts", firstname: "Quentin" },
    ]

    this.inputValue = "";
  }

  toggle () {
    this.isToggled = !this.isToggled;
  }

}

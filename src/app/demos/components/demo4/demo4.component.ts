import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.css']
})
export class Demo4Component implements OnInit {

  myNumber!: number;
  bool!: boolean;

  imgSrc!: string;
  imgAlt!: string;

  constructor () { }

  ngOnInit (): void {
    this.myNumber = 0;
    this.bool = true;

    this.imgAlt = "Description de mon image";
    this.imgSrc = "http://www.interface3.be/sites/interface3.be/files/logo.png";
  }

}

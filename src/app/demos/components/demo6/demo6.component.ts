import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html',
  styleUrls: ['./demo6.component.css']
})
export class Demo6Component implements OnInit {

  currentStyle!: any;

  italic!: boolean;
  bold!: boolean;
  size!: boolean;

  constructor () { }

  ngOnInit (): void {
    this.italic = false;
    this.bold = false;
    this.size = false;

    this.setCurrentStyle();
  }

  setCurrentStyle () {
    this.currentStyle = {
      'font-style': this.italic ? 'italic' : 'normal',
      'font-weight': this.bold ? 'bold' : 'normal',
      'font-size': this.size ? '24px' : '12px'
    };
  }

  switchItalic () {
    this.italic = !this.italic;
    this.setCurrentStyle();
  }

  switchBold () {
    this.bold = !this.bold;
    this.setCurrentStyle();
  }

  switchSize () {
    this.size = !this.size;
    this.setCurrentStyle();
  }


}

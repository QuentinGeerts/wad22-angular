import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo1',
  templateUrl: './exo1.component.html',
  styleUrls: ['./exo1.component.css']
})
export class Exo1Component implements OnInit {

  temps!: number;
  timer!: any;

  constructor () { }

  ngOnInit (): void {
    this.temps = 0;
  }

  start () {
    console.log("Start");
    this.timer = setInterval(() => {
      this.temps++;
    }, 1000);
  }

  pause () {
    console.log("Pause");
    clearInterval(this.timer);
    this.timer = null;
  }

  reset () {
    console.log("Reset");
    this.temps = 0;
    this.pause();
  }


}

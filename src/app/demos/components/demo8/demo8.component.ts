import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo8',
  templateUrl: './demo8.component.html',
  styleUrls: ['./demo8.component.css']
})
export class Demo8Component implements OnInit {

  messageFromParent!: string;
  messageFromChildren!: string;

  constructor () { }

  ngOnInit (): void {
    this.messageFromParent = "Message provenant du parent.";
  }

  reactToChildren (s: string) {
    this.messageFromChildren = s;
  }

}

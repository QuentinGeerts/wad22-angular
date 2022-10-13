import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent implements OnInit {

  @Input()
  title!: string;

  @Input()
  messageFromParent!: string;

  @Output()
  event!: EventEmitter<string>;

  constructor () {
    this.event = new EventEmitter<string>();
  }

  ngOnInit (): void {
  }

  maMethode (s: string) {
    this.event.emit(s);
  }

}

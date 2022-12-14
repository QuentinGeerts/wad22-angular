import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  @Input()
  panier!: string[];

  @Output()
  delete!: EventEmitter<number>;

  constructor () {
    this.delete = new EventEmitter<number>();
  }

  ngOnInit (): void {
  }

  deleteItem (index: number): void {
    this.delete.emit(index);
  }

}

import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor (
    private _element: ElementRef
  ) { }

  @HostListener('mouseenter')
  onMouseEnter () {
    this.highlight('red');
  }

  @HostListener('mouseleave')
  onMouseLeave () {
    this.highlight(null);
  }

  @HostListener('click')
  onClick () {
    this.highlight('blue');
  }

  highlight (color: string | null) {
    this._element.nativeElement.style.backgroundColor = color;
  }

}

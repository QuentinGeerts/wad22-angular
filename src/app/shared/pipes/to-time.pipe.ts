import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toTime'
})
export class ToTimePipe implements PipeTransform {

  transform(value: number): string {

    let secondes = value % 60;
    let minutes = Math.floor(value / 60);

    let s = `${secondes > 10 ? '' : '0'}${secondes} seconde${secondes > 1 ? 's' : ''}`
    let m = `${minutes > 10 ? '' : '0'}${minutes} minute${minutes > 1 ? 's' : ''}`

    return `${m} ${s}`;
  }

}

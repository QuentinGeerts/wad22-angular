import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toFahrenheit'
})
export class ToFahrenheitPipe implements PipeTransform {

  transform(value: number): number {
    return (value * 9 / 5) + 32;
  }

}

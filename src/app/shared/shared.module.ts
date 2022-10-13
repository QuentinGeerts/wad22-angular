import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFahrenheitPipe } from './to-fahrenheit.pipe';
import { FourofourComponent } from './fourofour/fourofour.component';
import { TemperaturePipe } from './pipes/temperature.pipe';
import { ToTimePipe } from './pipes/to-time.pipe';
import { HighlightDirective } from './directives/highlight.directive';



@NgModule({
  declarations: [
    FourofourComponent,
    ToFahrenheitPipe,
    TemperaturePipe,
    ToTimePipe,
    HighlightDirective,
  ],
  imports: [
    CommonModule
  ],

  exports: [
    ToFahrenheitPipe,
    TemperaturePipe,
    ToTimePipe,
    HighlightDirective
  ]
})
export class SharedModule { }

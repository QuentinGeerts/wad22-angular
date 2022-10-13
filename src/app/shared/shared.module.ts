import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFahrenheitPipe } from './to-fahrenheit.pipe';
import { FourofourComponent } from './fourofour/fourofour.component';
import { TemperaturePipe } from './pipes/temperature.pipe';
import { ToTimePipe } from './pipes/to-time.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FourofourComponent,
    ToFahrenheitPipe,
    TemperaturePipe,
    ToTimePipe,
    HighlightDirective,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],

  exports: [
    ToFahrenheitPipe,
    TemperaturePipe,
    ToTimePipe,
    HighlightDirective,
    FormsModule
  ]
})
export class SharedModule { }

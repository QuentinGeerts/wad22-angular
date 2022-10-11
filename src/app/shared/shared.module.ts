import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFahrenheitPipe } from './to-fahrenheit.pipe';
import { FourofourComponent } from './fourofour/fourofour.component';
import { TemperaturePipe } from './pipes/temperature.pipe';
import { ToTimePipe } from './pipes/to-time.pipe';



@NgModule({
  declarations: [
    FourofourComponent,
    ToFahrenheitPipe,
    TemperaturePipe,
    ToTimePipe,
  ],
  imports: [
    CommonModule
  ],

  exports: [
    ToFahrenheitPipe,
    TemperaturePipe,
    ToTimePipe,
  ]
})
export class SharedModule { }

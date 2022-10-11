import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFahrenheitPipe } from './to-fahrenheit.pipe';
import { FourofourComponent } from './fourofour/fourofour.component';
import { TemperaturePipe } from './pipes/temperature.pipe';



@NgModule({
  declarations: [
    FourofourComponent,
    ToFahrenheitPipe,
    TemperaturePipe,
  ],
  imports: [
    CommonModule
  ],

  exports: [
    ToFahrenheitPipe,
    TemperaturePipe,
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemosRoutingModule } from './demos-routing.module';
import { DemosComponent } from './demos.component';
import { Demo1Component } from './components/demo1/demo1.component';
import { Demo2Component } from './components/demo2/demo2.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DemosComponent,
    Demo1Component,
    Demo2Component
  ],
  imports: [
    CommonModule,
    DemosRoutingModule,
    FormsModule
  ]
})
export class DemosModule { }

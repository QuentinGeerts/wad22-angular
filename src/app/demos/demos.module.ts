import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemosRoutingModule } from './demos-routing.module';
import { DemosComponent } from './demos.component';
import { Demo1Component } from './components/demo1/demo1.component';
import { Demo2Component } from './components/demo2/demo2.component';
import { FormsModule } from '@angular/forms';
import { Demo3Component } from './components/demo3/demo3.component';
import { Demo4Component } from './components/demo4/demo4.component';
import { Demo5Component } from './components/demo5/demo5.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DemosComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    Demo4Component,
    Demo5Component
  ],
  imports: [
    CommonModule,
    DemosRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class DemosModule { }

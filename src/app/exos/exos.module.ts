import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExosRoutingModule } from './exos-routing.module';
import { ExosComponent } from './exos.component';
import { Exo1Component } from './components/exo1/exo1.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ExosComponent,
    Exo1Component
  ],
  imports: [
    CommonModule,
    ExosRoutingModule,
    SharedModule
  ]
})
export class ExosModule { }

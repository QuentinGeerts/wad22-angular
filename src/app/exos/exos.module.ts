import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExosRoutingModule } from './exos-routing.module';
import { ExosComponent } from './exos.component';
import { Exo1Component } from './components/exo1/exo1.component';
import { SharedModule } from '../shared/shared.module';
import { Exo2Component } from './components/exo2/exo2.component';
import { ListeComponent } from './components/exo2/liste/liste.component';


@NgModule({
  declarations: [
    ExosComponent,
    Exo1Component,
    Exo2Component,
    ListeComponent
  ],
  imports: [
    CommonModule,
    ExosRoutingModule,
    SharedModule
  ]
})
export class ExosModule { }

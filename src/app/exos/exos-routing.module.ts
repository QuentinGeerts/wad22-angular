import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exo1Component } from './components/exo1/exo1.component';
import { Exo2Component } from './components/exo2/exo2.component';
import { ExosComponent } from './exos.component';

const routes: Routes = [
  {
    path: '', component: ExosComponent, children: [
      { path: 'exo1', component: Exo1Component },
      { path: 'exo2', component: Exo2Component },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExosRoutingModule { }

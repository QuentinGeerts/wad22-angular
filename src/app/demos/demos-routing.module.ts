import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo1Component } from './components/demo1/demo1.component';
import { DemosComponent } from './demos.component';

const routes: Routes = [
  {
    path: '', component: DemosComponent, children: [
      { path: 'demo1', component: Demo1Component }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemosRoutingModule { }

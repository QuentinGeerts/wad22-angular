import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo1Component } from './components/demo1/demo1.component';
import { Demo2Component } from './components/demo2/demo2.component';
import { Demo3Component } from './components/demo3/demo3.component';
import { DemosComponent } from './demos.component';

const routes: Routes = [
  {
    path: '', component: DemosComponent, children: [
      { path: 'demo1', component: Demo1Component },
      { path: 'demo2', component: Demo2Component },
      { path: 'demo3', component: Demo3Component },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemosRoutingModule { }

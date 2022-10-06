import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FourofourComponent } from './shared/fourofour/fourofour.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'demos', loadChildren: () => import('./demos/demos.module').then(m => m.DemosModule) },
  { path: 'exos', loadChildren: () => import('./exos/exos.module').then(m => m.ExosModule) },

  { path: '**', component: FourofourComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpaHostComponent } from './spa-host/spa-host.component';


const routes: Routes = [{
  path: 'child1',
  children: [{
    path: '**',
    component: SpaHostComponent,
    data: { app: 'child1' }
  }]
}, {
  path: 'child2',
  children: [{
    path: '**',
    component: SpaHostComponent,
    data: { app: 'child2' }
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

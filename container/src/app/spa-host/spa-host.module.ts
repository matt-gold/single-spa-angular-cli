import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpaUnmountGuard } from './spa-unmount.guard';
import { SpaHostComponent } from './spa-host.component';

const routes: Routes = [
  {
    path: '',
    canDeactivate: [SpaUnmountGuard],
    component: SpaHostComponent,
  },
];

@NgModule({
  declarations: [SpaHostComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class SpaHostModule {}

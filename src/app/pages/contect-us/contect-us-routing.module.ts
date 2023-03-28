import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContectUsPage } from './contect-us.page';

const routes: Routes = [
  {
    path: '',
    component: ContectUsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContectUsPageRoutingModule {}

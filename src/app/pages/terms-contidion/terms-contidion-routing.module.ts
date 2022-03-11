import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermsContidionPage } from './terms-contidion.page';

const routes: Routes = [
  {
    path: '',
    component: TermsContidionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermsContidionPageRoutingModule {}

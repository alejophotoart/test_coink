import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeNumberPage } from './code-number.page';

const routes: Routes = [
  {
    path: '',
    component: CodeNumberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeNumberPageRoutingModule {}

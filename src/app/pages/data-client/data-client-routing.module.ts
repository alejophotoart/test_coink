import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataClientPage } from './data-client.page';

const routes: Routes = [
  {
    path: '',
    component: DataClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataClientPageRoutingModule {}

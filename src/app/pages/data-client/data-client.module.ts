import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataClientPageRoutingModule } from './data-client-routing.module';

import { DataClientPage } from './data-client.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataClientPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DataClientPage]
})
export class DataClientPageModule {}

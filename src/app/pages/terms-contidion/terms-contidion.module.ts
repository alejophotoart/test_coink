import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermsContidionPageRoutingModule } from './terms-contidion-routing.module';

import { TermsContidionPage } from './terms-contidion.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermsContidionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TermsContidionPage]
})
export class TermsContidionPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeNumberPageRoutingModule } from './code-number-routing.module';

import { CodeNumberPage } from './code-number.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PhoneNumberPageModule } from '../phone-number/phone-number.module';
import { PhoneNumberPage } from '../phone-number/phone-number.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodeNumberPageRoutingModule,
    ComponentsModule,
    PhoneNumberPageModule,
  ],
  declarations: [CodeNumberPage]
})
export class CodeNumberPageModule {}

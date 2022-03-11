import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    StatusBarComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StatusBarComponent,
    HeaderComponent,
  ]
})
export class ComponentsModule { }

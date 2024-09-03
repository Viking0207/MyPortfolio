import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { MaterialComponent } from './material/material.component';



@NgModule({
  declarations: [
    BodyComponent,
    FooterComponent,
    MaterialComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BodyComponent,
    FooterComponent,
    MaterialComponent
  ]
})
export class FirstPageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { MaterialComponent } from './material/material.component';
import { FirstPageComponent } from './first-page.component';



@NgModule({
  declarations: [
    BodyComponent,
    FooterComponent,
    MaterialComponent,
    FirstPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BodyComponent,
    FooterComponent,
    MaterialComponent,
    FirstPageComponent
  ]
})
export class FirstPageModule { }

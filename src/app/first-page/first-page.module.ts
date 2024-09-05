import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { FirstPageComponent } from './first-page.component';



@NgModule({
  declarations: [
    BodyComponent,
    FooterComponent,
    FirstPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BodyComponent,
    FooterComponent,
    FirstPageComponent
  ]
})
export class FirstPageModule { }

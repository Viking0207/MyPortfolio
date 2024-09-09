import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './about.component'
import { Body2Component } from './body2/body2.component';
import { Footer2Component } from './footer2/footer2.component';



@NgModule({
  declarations: [
    Body2Component,
    Footer2Component,
    [AboutComponent],
],
  imports: [
    CommonModule,
    RouterModule
  ],
exports: [
    Body2Component,
    Footer2Component,
    AboutComponent
]
})
export class AboutModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstPageComponent } from './first-page/first-page.component';
import { BodyComponent } from './first-page/body/body.component';
import { FooterComponent } from './first-page/footer/footer.component';

import { AboutComponent } from './About/about.component';
import { Body2Component } from './About/body2/body2.component';
import { Footer2Component } from './About/footer2/footer2.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: FirstPageComponent, children: [
    {path: 'bodyFP', component: BodyComponent},
    {path: 'footFP', component: FooterComponent}
  ]},
  {path: 'about', component: AboutComponent, children: [
    {path: 'body2', component: Body2Component},
    {path: 'foot2', component: Footer2Component}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

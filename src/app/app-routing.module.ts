import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstPageComponent } from './first-page/first-page.component';
import { BodyComponent } from './first-page/body/body.component';

const routes: Routes = [
  {path: '', redirectTo: '/firstPg', pathMatch: 'full'},
  {path: 'firstPg', component: FirstPageComponent, children: [
    {path: 'bodyFP', component: BodyComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

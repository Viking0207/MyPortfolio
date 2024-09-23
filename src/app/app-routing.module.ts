import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstPageComponent } from './first-page/first-page.component';

import { AboutComponent } from './About/about.component';
import { HobbyComponent } from './About/about-content/hobby/hobby.component';
import { VisionMisionComponent } from './About/about-content/vision-mision/vision-mision.component';
import { QuotesComponent } from './About/about-content/quotes/quotes.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: FirstPageComponent},

  {path: 'about', component: AboutComponent, children: [
    {path: 'hobby', component: HobbyComponent},
    {path: 'vision', component: VisionMisionComponent},
    {path: 'quotes', component: QuotesComponent},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

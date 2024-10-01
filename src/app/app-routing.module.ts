import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstPageComponent } from './first-page/first-page.component';

import { AboutComponent } from './About/about.component';
import { IntroComponent } from './About/about-content/intro/intro.component';
import { HobbyComponent } from './About/about-content/hobby/hobby.component';
import { VisionMisionComponent } from './About/about-content/vision-mision/vision-mision.component';
import { QuotesComponent } from './About/about-content/quotes/quotes.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: FirstPageComponent},

  {path: 'about', component: AboutComponent, children: [
    {path: 'intro', component: IntroComponent, data: { animation: 'IntroPG' }},
    {path: 'hobby', component: HobbyComponent, data: { animation: 'HobbyPG' }},
    {path: 'vision', component: VisionMisionComponent, data: { animation: 'VisionPG' }},
    {path: 'quotes', component: QuotesComponent, data: { animation: 'QuotesPG' }},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

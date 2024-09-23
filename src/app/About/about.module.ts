import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

import { AboutComponent } from './about.component';
import { Body2Component } from './body2/body2.component';
import { Footer2Component } from './footer2/footer2.component';

import { HobbyComponent } from './about-content/hobby/hobby.component';
import { VisionMisionComponent } from './about-content/vision-mision/vision-mision.component';
import { QuotesComponent } from './about-content/quotes/quotes.component';
import { BodyQuotesComponent } from './about-content/quotes/body-quotes/body-quotes.component';


@NgModule({
  declarations: [
    Body2Component,
    Footer2Component,
    [
      AboutComponent,
      HobbyComponent,
      VisionMisionComponent,
      
      QuotesComponent,
      BodyQuotesComponent,
    ],
  ],
  imports: [CommonModule, RouterModule, MatTabsModule],
  exports: [
    Body2Component,
    Footer2Component,
    AboutComponent,
    HobbyComponent,
    VisionMisionComponent,
    QuotesComponent,
  ],
})
export class AboutModule {}

import { NgModule } from '@angular/core'; 
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

import { FirstPageModule } from './first-page/first-page.module';
import { AboutModule } from './About/about.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ContactComponent } from './contact/contact.component';

import { ContactModule } from './contact/contact.module';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    FirstPageModule,
    AboutModule,
    ContactModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

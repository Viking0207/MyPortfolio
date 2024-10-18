import { NgModule } from '@angular/core'; 
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

import { FirstPageModule } from './first-page/first-page.module';
import { AboutModule } from './About/about.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { ContactModule } from './contact/contact.module';
import { ContactMeComponent } from './navigation/contact-me/contact-me.component';
import { BlogModule } from './Blog/blog.module';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContactMeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    FormsModule,
    FirstPageModule,
    AboutModule,
    ContactModule,
    BlogModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

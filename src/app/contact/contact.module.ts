import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ContactComponent } from './contact.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { InstagramComponent } from './instagram/instagram.component';
import { TweetComponent } from './tweet/tweet.component';
import { ConEmailComponent } from './con-email/con-email.component';


@NgModule({
  declarations: [
    ContactComponent,
    WhatsappComponent,
    InstagramComponent,
    TweetComponent,
    ConEmailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  exports: [
    ContactComponent,
    WhatsappComponent,
    InstagramComponent,
    TweetComponent,
    ConEmailComponent
  ],
})
export class ContactModule { }

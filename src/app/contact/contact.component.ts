import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  animations: [
  ],
})
export class ContactComponent implements OnInit  {

  ngOnInit(): void {
    console.log('ngOnInit is called');
    AOS.init({
    });
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent {

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/home'])
  }

  submitAccept(event: Event) {
    event.preventDefault();
    if (confirm("Apakah kamu yakin?")) {
      //Ok
      alert("Baiklah, terimakasih!!")
      this.router.navigate(['/home'])
    }
  }

}

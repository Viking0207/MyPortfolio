import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css' 
})
export class ContactMeComponent {
  submitted = false;

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/home']);
  }

  submitAccept(contactForm: any) {
    this.submitted = true; 

    // Cek apakah form valid
    if (contactForm.valid) {
      if (confirm("Apakah kamu yakin?")) {
        
        alert("Baiklah, terimakasih!!");
        this.router.navigate(['/home']); 
      }
    } else {
      console.log("Form tidak valid!"); 
    }
  }
}

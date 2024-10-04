import { Component } from '@angular/core';

import { contactTabAnimation } from './contact-tabAnimation';
import { contactContentAnimation } from './contact-contentAnimation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  animations: [
    contactContentAnimation
  ],
})
export class ContactComponent {

  tabs = ['Whatsapp', 'Instagram', 'Tweet', 'Email'];
  selectedIndex = 0;

  updateTabs(selectedIndex: number) {
    this.selectedIndex = selectedIndex;
    console.log(`${selectedIndex} telah sukses`);
    
  }

  getClasses(index: number) {
    let classes = ['not-selected'];
    
    if (index === this.selectedIndex) {
      classes = ['selected'];
    } else if (index < this.selectedIndex) {
      classes.push('top');
    } else {
      classes.push('bottom');
    }

    // Aturan khusus untuk menyembunyikan tab
    if (this.selectedIndex === 0 && index > 1) {
      classes.push('hidden');
    } else if (this.selectedIndex === 1 && index === 3) {
      classes.push('hidden');
    } else if (this.selectedIndex === 2 && index === 0) {
      classes.push('hidden');
    } else if (this.selectedIndex === 3 && index < 2) {
      classes.push('hidden');
    }

    return classes.join(' ');
  }

}

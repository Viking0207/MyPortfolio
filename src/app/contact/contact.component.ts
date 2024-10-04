import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  animations: [
    trigger('tabAnimation', [
      state(
        'selected',
        style({ transform: 'scale(1.2) rotateY(360deg)', zIndex: 10 })
      ),
      state('not-selected', style({ transform: 'scale(0.8)', opacity: 0.6 })),
      state('top', style({ transform: 'translateY(-30px) scale(0.8)' })),
      state('bottom', style({ transform: 'translateY(30px) scale(0.8)' })),
      state('hidden', style({ display: 'none' })),
      transition('* => selected', [animate('0.8s ease')]),
      transition('* => not-selected', [animate('0.8s ease')]),
      transition('* => top', [animate('0.8s ease')]),
      transition('* => bottom', [animate('0.8s ease')]),
      transition('* => hidden', [animate('0.8s ease')]),
    ]),
  ],
})
export class ContactComponent {

  tabs = ['Whatsapp', 'Instagram', 'Tweet', 'Email'];
  selectedIndex = 0;

  updateTabs(selectedIndex: number) {
    this.selectedIndex = selectedIndex;
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

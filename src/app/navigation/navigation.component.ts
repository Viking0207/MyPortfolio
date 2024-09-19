import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  openSection: string | null = null;
  
  toggleSection(section: string) {
    if (this.openSection === section) {
      this.openSection = null;
      console.log(`${section} section has fail`);
    }
    else {
      this.openSection = section
      console.log(`${section} section has success`);
    }
  }

  @HostListener('document:click', ['$event'])
  closeDetailsEvent(e: Event) {
    const targetElement = e.target as HTMLElement;
    const isClickInside = targetElement.closest('details')

    if (!isClickInside) {
      this.openSection = null;
    }
  }

}

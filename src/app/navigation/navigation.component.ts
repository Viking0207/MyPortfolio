import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  openSection: string | null = null;

  toggleSection(section: string) {
    this.openSection = this.openSection === section ? null : section;
    
    console.log(`Clicked section: ${section}`);
    console.log(`Open section after toggle: ${this.openSection}`);
  }

}

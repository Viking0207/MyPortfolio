import { Component, OnInit } from '@angular/core';

import { contactTabAnimation } from './contact-tabAnimation';
// import { contactContentAnimation } from './contact-contentAnimation';
import { contactContentAnimation } from './contact-content';

import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  animations: [
    contactTabAnimation,
    contactContentAnimation
  ],
})
export class ContactComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {}
  
  tabs = ['Whatsapp', 'Instagram', 'Tweet', 'Email'];
  selectedIndex = 0;
  
  
  ngOnInit(): void {
    
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const url = this.router.url;
      if (url.includes('/about/intro')) {
        this.selectedIndex = 0;
      } else if (url.includes('/about/hobby')) {
        this.selectedIndex = 1;
      } else if (url.includes('/about/vision')) {
        this.selectedIndex = 2;
      } else if (url.includes('/about/quotes')) {
        this.selectedIndex = 3;  
      }
      
      localStorage.setItem('selectedTabIndex', this.selectedIndex.toString());
      
    });

    const storedIndex = localStorage.getItem('selectedTabIndex');
    if (storedIndex !== null) {
      this.selectedIndex = +this.selectedIndex;
    }
  }

  updateTabs(selectedIndex: number) {
    this.selectedIndex = selectedIndex;
    console.log(`${selectedIndex} telah sukses`);
    
  }

  onTabChange(index: number): void {
    if (index === 0) {
      this.router.navigate(['contact/whatsapp']);
    } else if (index === 1) {
      this.router.navigate(['contact/instagram']);
    } else if (index === 2) {
      this.router.navigate(['/contact/tweet']);
    } else if (index === 3) {
      this.router.navigate(['/contact/email']);
    }
    
    localStorage.setItem('selectedTabIndex', index.toString());
    
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
  
  prepareRoute(outlet: any) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { slideInAnimation } from './route-animations';
import { filter } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [],
  animations: [
    slideInAnimation
  ]
})
export class AboutComponent implements OnInit {

  selectedIndex: number = 0;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {

    const isNewSession = !sessionStorage.getItem('sessionStarted');
    
    if (isNewSession) {
      localStorage.setItem('selectedTabIndex', '0');
      sessionStorage.setItem('sessionStarted', 'true'); 
      this.selectedIndex = 0;
      this.router.navigate(['/about/intro']);
    }
    else {
      const savedIndex = localStorage.getItem('selectedTabIndex');
      this.selectedIndex = savedIndex ? +savedIndex : 0;      
    }

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
  }

  onTabChange(index: number): void {
    if (index === 0) {
      this.router.navigate(['/about/intro']);
    } else if (index === 1) {
      this.router.navigate(['/about/hobby']);
    } else if (index === 2) {
      this.router.navigate(['/about/vision']);
    } else if (index === 3) {
      this.router.navigate(['/about/quotes']);
    }
    
    localStorage.setItem('selectedTabIndex', index.toString());

  }

  prepareRoute(outlet: any) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}

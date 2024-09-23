import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [],
  animations: [
    trigger('routeAnimations', [
      transition('* => *', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('1s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class AboutComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}


  onTabChange(event: any) {
    const tabIndex = event.index;
    let tabRoute = '';

    console.log(`Tab index: ${tabIndex}, Navigating to: ${tabRoute}`);

    switch (tabIndex) {
      case 0:
        tabRoute = 'hobby';
        break;
      case 1:
        tabRoute = 'vision';
        break;
      case 2:
        tabRoute = 'quotes';
        break;
      case 3:
        tabRoute = 'hobby';
        break;
    }

    this.router.navigate([tabRoute], { relativeTo: this.route }).then(() => {});

  }
}

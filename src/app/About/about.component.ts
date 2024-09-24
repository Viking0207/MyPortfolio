import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, style, animate, transition, query } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [],
  animations: [
    trigger('routeAnimations', [
      transition(':increment', [
        query(
          ':enter, :leave',
          style({ position: 'absolute', width: '100%' }),
          { optional: true }
        ),
        query(
          ':enter',
          [style({ transform: 'translateX(100%)', opacity: 0 })],
          { optional: true }
        ),
        query(
          ':leave',
          [
            style({ transform: 'translateX(0)', opacity: 1 }),
            animate(
              '0.5s ease-out',
              style({ transform: 'translateX(-100%)', opacity: 0 })
            ),
          ],
          { optional: true }
        ),
        query(
          ':enter',
          [
            animate(
              '0.5s ease-out',
              style({ transform: 'translateX(0)', opacity: 1 })
            ),
          ],
          { optional: true }
        ),
      ]),
      transition(':decrement', [
        query(
          ':enter, :leave',
          style({ position: 'absolute', width: '100%' }),
          { optional: true }
        ),
        query(
          ':enter',
          [style({ transform: 'translateX(-100%)', opacity: 0 })],
          { optional: true }
        ),
        query(
          ':leave',
          [
            style({ transform: 'translateX(0)', opacity: 1 }),
            animate(
              '0.5s ease-out',
              style({ transform: 'translateX(100%)', opacity: 0 })
            ),
          ],
          { optional: true }
        ),
        query(
          ':enter',
          [
            animate(
              '0.5s ease-out',
              style({ transform: 'translateX(0)', opacity: 1 })
            ),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class AboutComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  currentTabIndex = 0;

  constructor(private router: Router, private route: ActivatedRoute) {}

  onTabChange(event: any) {
    const newTabIndex = event.index;
    const tabRoutes = ['hobby', 'vision', 'quotes'];
    const direction = newTabIndex > this.currentTabIndex ? 'right' : 'left';

    this.currentTabIndex = newTabIndex;
    const tabRoute = tabRoutes[newTabIndex];

    this.router.navigate([tabRoute], { relativeTo: this.route }).then(() => {
      console.log(`Navigasi ke ${tabRoute} berhasil!`);
      this.scrollContainer.nativeElement.scrollTo({ left: direction === 'right' ? this.scrollContainer.nativeElement.scrollWidth : 0, behavior: 'smooth' });
    });
  }
}

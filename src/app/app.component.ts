import { Component } from '@angular/core';
import { RouteService } from './service/route.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private routeService: RouteService) {}

  showNavigation(): boolean {
    return !this.routeService.isContactPage();
  }

}

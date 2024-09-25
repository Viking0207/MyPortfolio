import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-body2',
  templateUrl: './body2.component.html',
  styleUrl: './body2.component.css'
})
export class Body2Component {

  @Input() selectedIndex: number = 0;
  @Output() tabChanged: EventEmitter<number> = new EventEmitter<number>();

  onTabChange(event: number) {
    this.tabChanged.emit(event);
  }
}

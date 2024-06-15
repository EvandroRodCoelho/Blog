import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() filterChange = new EventEmitter<string>();
  value = '';

  onFilter(newValue: string): void {
    console.log(newValue)
    this.filterChange.emit(newValue);
  }
}

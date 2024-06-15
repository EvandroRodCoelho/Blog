import { Component } from '@angular/core';
import { dataApp } from '../data/data';
import { event } from 'cypress/types/jquery';
import { log } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  data = dataApp

  filteredData = [...this.data];
  onFilter(searchTerm: string): void {
    this.filteredData = this.data.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  }


}

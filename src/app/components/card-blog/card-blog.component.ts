import { Component } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-card-blog',
  templateUrl: './card-blog.component.html',
  styleUrl: './card-blog.component.scss'
})
export class CardBlogComponent {
  isLiked = false;

  toggleLike() {
    this.isLiked = !this.isLiked;
  }
}

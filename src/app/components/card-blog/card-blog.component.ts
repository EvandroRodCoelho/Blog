import { Component, Input } from '@angular/core';
import { timeout } from 'rxjs';
import { IPost } from '../../interfaces/IPost';


@Component({
  selector: 'app-card-blog',
  templateUrl: './card-blog.component.html',
  styleUrl: './card-blog.component.scss'
})
export class CardBlogComponent {
  @Input() data: IPost = {} as IPost;

  isLiked = this.data.isLiked;


  toggleLike() {
    this.data.isLiked = !this.data.isLiked;
    console.log(this.data.isLiked)
  }
}

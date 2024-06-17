import { Component, Input, OnInit } from '@angular/core';
import { timeout } from 'rxjs';
import { IPost } from '../../interfaces/IPost';
import { any } from 'cypress/types/bluebird';


@Component({
  selector: 'app-card-blog',
  templateUrl: './card-blog.component.html',
  styleUrl: './card-blog.component.scss'
})
export class CardBlogComponent implements OnInit {
  isLiked = false;
  ngOnInit(): void {
    let hasPostInLocalStorage = localStorage
      .getItem(`liked_${this.data.id}`) == '1'

    this.isLiked = hasPostInLocalStorage ? true : false;
  }




  @Input() data: IPost = {} as IPost;




  toggleLike(postId: number) {
    this.isLiked = !this.isLiked;
    console.log(localStorage.getItem(`liked_${postId}`));

    if (localStorage.getItem(`liked_${postId}`) == null) {
      localStorage.setItem(`liked_${postId}`, this.isLiked ? '1' : '0');
    } else {
      localStorage.setItem(`liked_${postId}`, this.isLiked ? '1' : '0');
    }
  }

  getLikedState(postId: number) {
    const likedState = localStorage.getItem(`liked_${postId}`);
    return likedState === '1'; // true if liked, false if disliked
  }
}

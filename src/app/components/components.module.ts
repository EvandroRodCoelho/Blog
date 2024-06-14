import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardBlogComponent } from './card-blog/card-blog.component';



@NgModule({
  declarations: [HeaderComponent, CardBlogComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent, CardBlogComponent
  ]
})
export class ComponentsModule { }

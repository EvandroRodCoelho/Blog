import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardBlogComponent } from './card-blog/card-blog.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HeaderComponent, CardBlogComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HeaderComponent, CardBlogComponent
  ]
})
export class ComponentsModule { }

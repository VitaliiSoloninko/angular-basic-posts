import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IPost } from '../../models/IPost';
import { PostItemComponent } from './post-item/post-item.component';

@Component({
  selector: 'app-posts',
  imports: [PostItemComponent, CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent {
  posts: IPost[] = [
    { id: 1, title: 'JS 1', body: 'Body 1' },
    { id: 2, title: 'JS 2', body: 'Body 2' },
    { id: 3, title: 'JS 3', body: 'Body 3' },
  ];
}

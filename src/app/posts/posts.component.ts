import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IPost } from '../../models/IPost';
import { PostItemComponent } from './post-item/post-item.component';
import { PostListComponent } from './post-list/post-list.component';

@Component({
  selector: 'app-posts',
  imports: [PostItemComponent, CommonModule, PostListComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent {
  posts: IPost[] = [
    { id: 1, title: 'JS 1', body: 'Body 1' },
    { id: 2, title: 'JS 2', body: 'Body 2' },
    { id: 3, title: 'JS 3', body: 'Body 3' },
  ];

  posts2: IPost[] = [
    { id: 1, title: 'Node 1', body: 'Body 1' },
    { id: 2, title: 'None 2', body: 'Body 2' },
    { id: 3, title: 'Node 3', body: 'Body 3' },
  ];

  title: string = 'title ts';
  body: string = 'body ts';
}

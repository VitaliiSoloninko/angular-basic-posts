import { Component } from '@angular/core';
import { PostItemComponent } from './post-item/post-item.component';

@Component({
  selector: 'app-posts',
  imports: [PostItemComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent {}

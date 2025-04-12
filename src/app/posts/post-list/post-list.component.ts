import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IPost } from '../../../models/IPost';
import { PostItemComponent } from '../post-item/post-item.component';

@Component({
  selector: 'app-post-list',
  imports: [CommonModule, PostItemComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  @Input() posts: IPost[] = [];
}

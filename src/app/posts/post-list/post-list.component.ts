import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IPost } from '../../../models/IPost';
import { PostItemComponent } from '../post-item/post-item.component';
import { PostTitleComponent } from '../post-title/post-title.component';

@Component({
  selector: 'app-post-list',
  imports: [CommonModule, PostItemComponent, PostTitleComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  @Input() posts: IPost[] = [];
}

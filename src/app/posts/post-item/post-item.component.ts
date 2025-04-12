import { Component, Input } from '@angular/core';
import { IPost } from '../../../models/IPost';

@Component({
  selector: 'app-post-item',
  imports: [],
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.css',
})
export class PostItemComponent {
  @Input() post: IPost = {} as IPost;
}

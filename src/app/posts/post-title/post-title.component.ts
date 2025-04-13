import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-title',
  imports: [],
  templateUrl: './post-title.component.html',
  styleUrl: './post-title.component.css',
})
export class PostTitleComponent {
  @Input() title: string = '';
}

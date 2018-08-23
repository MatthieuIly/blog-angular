import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() posts: Array;
  // @Input() title: string;
  // @Input() content: string;
  // @Input() loveIts: integer;
  // @Input() created_at: date;

  constructor() {
  }

  ngOnInit() {
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../post";

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

    @Input() posts: Post[];
    // @Input() title: string;
    // @Input() content: string;
    // @Input() loveIts: integer;
    // @Input() created_at: date;

    constructor() {
    }

    ngOnInit() {
    }

}

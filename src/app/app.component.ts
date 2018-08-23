import {Component} from '@angular/core';
import {Post} from "./post";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public posts;

    constructor() {
        this.posts = new Array();
        let newPost = new Post("Mon premier post", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum euismod aliquam. ' +\n" +
            "            'Pellentesque ultrices tellus ut tempus ultricies. Donec consectetur enim vel ante vulputate, ut ' +\n" +
            "            'sagittis lectus ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per' +\n" +
            "            'inceptos himenaeos. Nulla vestibulum diam in dui commodo, quis mollis sapien commodo.");
        this.posts.push(newPost);

        let newPost = new Post("Mon premier post", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum euismod aliquam. ' +\n" +
            "            'Pellentesque ultrices tellus ut tempus ultricies. Donec consectetur enim vel ante vulputate, ut ' +\n" +
            "            'sagittis lectus ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per' +\n" +
            "            'inceptos himenaeos. Nulla vestibulum diam in dui commodo, quis mollis sapien commodo.");
        this.posts.push(newPost);

        let newPost = new Post("Encore un post", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum euismod aliquam. ' +\n" +
            "            'Pellentesque ultrices tellus ut tempus ultricies. Donec consectetur enim vel ante vulputate, ut ' +\n" +
            "            'sagittis lectus ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per' +\n" +
            "            'inceptos himenaeos. Nulla vestibulum diam in dui commodo, quis mollis sapien commodo.");
        this.posts.push(newPost);
    }
}

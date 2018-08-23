export class Post {
    title: string;
    content: string;
    loveIts: number;
    created_at: Date;

    constructor(public title: string,
                public content: string)
    {
        this.title = title;

        this.content = content;

        this.loveIts = 0;

        this.created_at = new Date();
   }
}

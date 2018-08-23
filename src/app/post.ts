export class Post {
    title: string;
    content: string;
    loveIts: number;
    created_at: Date;

    constructor(public titre: string,
                public contenu: string)
    {
        this.title = titre;

        this.content = contenu;

        this.loveIts = 0;

        this.created_at = new Date();
   }
}

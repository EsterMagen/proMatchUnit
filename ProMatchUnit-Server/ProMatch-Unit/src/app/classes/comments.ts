export class Comments {
    id_client:number;
    id_item:number;
    comment:string;


    constructor(id_client:number,id_item:number,comment:string)
    {
        this.id_client=id_client;
        this.id_item=id_item;
        this.comment=comment;
    }
}

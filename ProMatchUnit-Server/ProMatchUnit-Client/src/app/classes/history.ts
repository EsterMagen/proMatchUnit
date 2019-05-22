export class History {
    id_item:number;
    id_category:number;
    id_client:number;
    status:boolean;

    constructor(id_item:number,id_category:number,id_client:number,status:boolean)
    {
        this.id_item=id_item;
        this.id_category=id_category;
        this.id_client=id_client;
        this.status=status;
    }
}

export class Orders {
    id_item:number;
    id_category:number;
    id_client:number;
    date_receive:Date;
    date_delivery:Date;
    reference:string;

    constructor(id_item:number,id_category:number,id_client:number,date_receive:Date,date_delivery:Date,reference:string)
    {
        this.id_item=id_item;
        this.id_category=id_category;
        this.id_client=id_client;
        this.date_receive=date_receive;
        this.date_delivery=date_delivery;
        this.reference=reference;
    }
}

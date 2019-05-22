export class Custom {
    id_client:number;
    id_category:number;
    city:string;
    minPrice:number;
    maxPrice:number;
    num_rooms:number;
    num_people:number;
    floor:number;
    mr:number;


   public constructor(id_client:number,id_category:number,city:string,minPrice:number,maxPrice:number,num_rooms ?:number,num_people ?:number,floor ?:number,mr ?:number)
    {
        this.id_client=id_client;
        this.id_category=id_category;
        this.city=city;
        this.minPrice=minPrice;
        this.maxPrice=maxPrice;
        this.num_rooms=num_rooms;
        this.num_people=num_people;
        this.floor=floor;
        this.mr=mr;

    }
   
    
 
}

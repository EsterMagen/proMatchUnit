export class Units {
    id:number;
    id_renter:number;
    city:string;
    address:string;
    mr:number;
    num_rooms:number;
    main_img:string;
    extra_img1:string;
    extra_img2:string;
    extra_img3:string;
    extra_img4:string;
    extra_img5:string;
    extra_img6:string;
    extra_img7:string;
    price:number;
    remarks:string;

    constructor(id:number,id_renter:number,city:string,address:string,mr:number,num_rooms:number,main_img:string,price:number,extra_img1?:string,extra_img2?:string,extra_img3?:string,extra_img4?:string,extra_img5?:string,extra_img6?:string,extra_img7?:string,remarks?:string)
    {
        this.id=id;
        this.id_renter=id_renter;
        this.city=city;
        this.address=address;
        this.mr=mr;
        this.num_rooms=num_rooms;
        this.main_img=main_img;
        this.extra_img1=extra_img1;
        this.extra_img2=extra_img2;
        this.extra_img3=extra_img3;
        this.extra_img4=extra_img4;
        this.extra_img5=extra_img5;
        this.extra_img6=extra_img6;
        this.extra_img7=extra_img7;
        this.price=price;
        this.remarks=remarks;

    }
     

}


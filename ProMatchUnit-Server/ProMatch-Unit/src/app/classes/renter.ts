export class Renter {
    id:number;
    name:string;
    password:string;
    email:string;
    account_num:string;
    snif_num:string;
    bank_num:string;
    tel:string;

    constructor(id:number,name:string,password:string,email:string,account_num:string,snif_num:string,bank_num:string,tel:string)
    {
        this.id=id;
        this.name=name;
        this.password=password;
        this.email=email;
        this.account_num=account_num;
        this.snif_num=snif_num;
        this.bank_num=bank_num;
        this.tel=tel;
    }
}

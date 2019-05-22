import { Component, OnInit } from '@angular/core';
import { Apartments } from 'src/app/classes/apartments';
import { ApartmentServiceService } from 'src/app/services/apartment-service.service';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.scss']
})
export class ApartmentsComponent implements OnInit {

  apartmentList:Apartments[];
  constructor(private apartmentSer:ApartmentServiceService) {
    
    this.apartmentSer.GetAllApartments().subscribe(list=>this.apartmentList=list);


  }

  ngOnInit() {
     
  }
  

}

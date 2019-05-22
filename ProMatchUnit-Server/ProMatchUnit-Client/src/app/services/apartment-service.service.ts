import { Injectable } from '@angular/core';
import { Apartments } from '../classes/apartments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApartmentServiceService {

  constructor(private httpClient:HttpClient) { }

  GetAllApartments():Observable<Apartments[]>
  {
   return this.httpClient.get<Apartments[]>("http://localhost:57076/api/apartments");
  }
}

import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Bill} from '../models/bill.model';

@Injectable()
export class BillService {
  constructor(private http: Http) {}

  getBill(): Observable<Bill> {
    return this.http.get('http://localhost:3000/bill')
      .map((response: Response) => response.json());

    }
   getCurrency(): Observable<any> {
    return this.http.get(' https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
      .map((response: Response) => response.json());
   }

}

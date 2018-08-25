import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Bill} from '../models/bill.model';
import {BaseApi} from '../../../shead/core/base-api';


@Injectable()
export class BillService extends BaseApi {
  constructor(public http: Http) {
    super(http);
  }

  getBill(): Observable<Bill> {
    return this.get('bill');
    }
   getCurrency(): Observable<any> {
    return this.http.get(' https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
      .map((response: Response) => response.json());
   }

}

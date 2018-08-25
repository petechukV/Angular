import {Component, OnDestroy, OnInit} from '@angular/core';
import {BillService} from '../shared/services/bill.services';
import {Observable} from 'rxjs/Observable';
import {Bill} from '../shared/models/bill.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'prj-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss']
})
export class BillPageComponent implements OnInit, OnDestroy {
  sub1: Subscription;
  sub2: Subscription;
  currency: any;
  bill: Bill;
  isLoad = false;

  constructor(private billService: BillService) { }

  ngOnInit() {
    this.sub1 = Observable.combineLatest(
      this.billService.getBill(),
      this.billService.getCurrency()
    ).subscribe((data: [Bill, any]) => {
      this.bill = data[0];
      this.currency = data[1];
      this.isLoad = true;
    });
  }
    onRefresh() {
    this.isLoad = false;
    this.sub2 = this.billService.getCurrency()
      .delay(1000)
      .subscribe((currency: any) => {
      this.currency = currency;
      this.isLoad = true;
      });
    }
  ngOnDestroy() {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {Bill} from '../../shared/models/bill.model';

@Component({
  selector: 'prj-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss']
})
export class BillCardComponent implements OnInit {

  @Input() bill: Bill;
  @Input() currency: any;
  dolar: number;
  euro: number;
  rubl: number;
  bitcoin: number;
  constructor() { }

  ngOnInit() {
   // const { saler } = this.currency;
    this.dolar = this.currency[0].sale * this.bill.value;
    this.euro = this.currency[1].sale * this.bill.value;
    this.rubl = this.currency[2].sale * this.bill.value;
    this.bitcoin = this.currency[3].sale * this.bill.value;
    console.log(this.dolar);
    console.log(this.currency);
  }

}

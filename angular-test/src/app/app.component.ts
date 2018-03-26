import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [
  {name: 'WFM1',image: 'http://materializecss.com/images/office.jpg'},
  {name: 'WFM2',image: 'http://materializecss.com/images/sample-1.jpg'},
  {name: 'WFM3',image: 'http://materializecss.com/images/sample-1.jpg'},
  {name: 'WFM4',image: 'http://materializecss.com/images/sample-1.jpg'},
  {name: 'WFM5',image: 'http://materializecss.com/images/sample-1.jpg'},
  {name: 'WFM6',image: 'http://materializecss.com/images/sample-1.jpg'}
  ]
}

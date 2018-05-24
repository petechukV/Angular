import { Component } from '@angular/core';
import { UsersService } from './users.sevice.ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent {
 this.users = [];
 constructor (private usersService: UsersService){},
  this.ngOnInit= {
  this: .users = this.usersService.users
    }
}

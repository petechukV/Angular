import { Component, OnInit } from '@angular/core';
import {User} from '../../../../shead/models/user.model';
import {AuthService} from '../../../../shead/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'prj-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  date: Date = new Date();
  user: User;
  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('user'));
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

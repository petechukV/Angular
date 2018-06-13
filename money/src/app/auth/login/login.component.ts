///<reference path="../../shead/models/mesage.model.ts"/>
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../shead/services/users.service';
import {User} from '../../shead/models/user.model';
import {Message} from '../../shead/models/mesage.model';
import {AuthService} from '../../shead/services/auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'prj-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message: Message;
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    this.message = new Message('danger', '');
    this.route.queryParams
      .subscribe((params: Params) => {
      if (params['nowCanLogin']) {
        this.showMessage({
          text: 'Now you can login',
           type: 'success'
        });
      }
      });

    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  private showMessage(message: Message) {
    this.message = message;
    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }
  onSubmit() {
    const formData  = this.form.value;

    this.usersService.getUserByEmail(formData.email)
      .subscribe((user: User) => {
     if (user) {
        if (user.password === formData.password) {
          this.message.text = ' ';
          window.localStorage.setItem('user', JSON.stringify((user)));
          this.authService.login();
          this.router.navigate(['/system','bill']);
        } else {
          this.showMessage({
           text: 'password error',
           type: 'danger'
          });
        }
     } else  {
       this.showMessage({
         text: 'user do not exist',
         type: 'danger'
       });
     }
    } );
  console.log(this.form);
  }

}

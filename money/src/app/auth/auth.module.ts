import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {AuthComponent} from './auth.component';
import {AuthRoutingModule} from './auth-routing.module';
import {SheadModule} from '../shead/shead.module';

@NgModule({
  declarations: [
     LoginComponent,
     RegistrationComponent,
     AuthComponent
],
     imports: [
       CommonModule,
      AuthRoutingModule,
     SheadModule]
})
export class AuthModule {}


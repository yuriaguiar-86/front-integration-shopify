import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PublicLayoutComponent } from '../../core/layout/public-layout/public-layout-component';
import { ForgetPasswordComponent } from './forget-password/forget-password-component';
import { LoginComponent } from './login/login-component';

@NgModule({
  declarations: [
    PublicLayoutComponent,
    LoginComponent,
    ForgetPasswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PublicModule { }

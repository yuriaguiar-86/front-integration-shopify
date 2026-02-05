import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PublicLayoutComponent } from '../../core/layout/public-layout/public-layout-component';
import { ComponentsModule } from '../../shared/components/components-module';
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
    RouterModule,
    ComponentsModule
]
})
export class PublicModule { }

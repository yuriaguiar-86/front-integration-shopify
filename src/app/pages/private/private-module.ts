import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PrivateLayoutComponent } from '../../core/layout/private-layout/private-layout-component';
import { HomeComponent } from './home/home-component';
import { OperationModule } from './operation/operation-module';
import { ListProductComponent } from './product/list-product/list-product-component';

@NgModule({
  declarations: [
    PrivateLayoutComponent,
    HomeComponent,
    ListProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    OperationModule
  ]
})
export class PrivateModule { }

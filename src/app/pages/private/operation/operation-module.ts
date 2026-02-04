import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ListProductComponent } from '../product/list-product/list-product-component';
import { FormOperationComponent } from './form-operation/form-operation-component';
import { ListOperationComponent } from './list-operation/list-operation-component';
import { OperationRoutingModule } from './operation-routing-module';
import { ViewOperationComponent } from './view-operation/view-operation-component';

@NgModule({
  declarations: [
    ViewOperationComponent,
    ListOperationComponent,
    FormOperationComponent,
    ListProductComponent
  ],
  imports: [
    CommonModule,
    OperationRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ViewOperationComponent,
    ListOperationComponent,
    FormOperationComponent,
    ListProductComponent
  ],
})
export class OperationModule { }

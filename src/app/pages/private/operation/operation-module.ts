import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ComponentsModule } from '../../../shared/components/components-module';
import { FormOperationComponent } from './form-operation/form-operation-component';
import { ListOperationComponent } from './list-operation/list-operation-component';
import { OperationRoutingModule } from './operation-routing-module';
import { ViewOperationComponent } from './view-operation/view-operation-component';

@NgModule({
  declarations: [
    ViewOperationComponent,
    ListOperationComponent,
    FormOperationComponent
  ],
  imports: [
    CommonModule,
    OperationRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
})
export class OperationModule { }

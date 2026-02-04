import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormOperationComponent } from './form-operation/form-operation-component';
import { ListOperationComponent } from './list-operation/list-operation-component';
import { ViewOperationComponent } from './view-operation/view-operation-component';

const routes: Routes = [
  { path: '', component: ListOperationComponent },
  { path: 'visualizar-operacao/:id', component: ViewOperationComponent },
  { path: 'adicionar-operacao', component: FormOperationComponent },
  { path: 'editar-operacao/:id', component: FormOperationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/private/home/home-component';
import { ViewOperationComponent } from './pages/private/operation/view-operation/view-operation-component';
import { ListOperationComponent } from './pages/private/operation/list-operation/list-operation-component';
import { FormOperationComponent } from './pages/private/operation/form-operation/form-operation-component';
import { ListProductComponent } from './pages/private/product/list-product/list-product-component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'produtos', component: ListProductComponent },

  { path: 'operacoes', component: ListOperationComponent },
  { path: 'visualizar-operacao/:id', component: ViewOperationComponent },
  { path: 'adicionar-operacao', component: FormOperationComponent },
  { path: 'editar-operacao/:id', component: FormOperationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

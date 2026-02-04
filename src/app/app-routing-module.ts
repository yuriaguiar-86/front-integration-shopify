import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/private/home/home-component';
import { ListProductComponent } from './pages/private/product/list-product/list-product-component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'operacoes',
    loadChildren: () => import('./pages/private/operation/operation-module').then(m => m.OperationModule)
  },

  { path: 'produtos', component: ListProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

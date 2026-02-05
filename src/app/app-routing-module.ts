import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrivateLayoutComponent } from './core/layout/private-layout/private-layout-component';
import { PublicLayoutComponent } from './core/layout/public-layout/public-layout-component';
import { HomeComponent } from './pages/private/home/home-component';
import { ListProductComponent } from './pages/private/product/list-product/list-product-component';
import { ForgetPasswordComponent } from './pages/public/forget-password/forget-password-component';
import { LoginComponent } from './pages/public/login/login-component';

const routes: Routes = [
  // ROUTES PUBLIC
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'esqueci-senha', component: ForgetPasswordComponent },
    ]
  },

  // ROUTES PRIVATE
  {
    path: 'connectop',
    component: PrivateLayoutComponent,
    canActivate: [],
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'operacoes',
        loadChildren: () => import('./pages/private/operation/operation-module').then(m => m.OperationModule)
      },
      { path: 'produtos', component: ListProductComponent },
    ]
  },

  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

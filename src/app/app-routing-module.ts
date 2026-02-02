import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOperation } from './pages/private/operation/list-operation/list-operation';
import { FormOperation } from './pages/private/operation/form-operation/form-operation';

const routes: Routes = [
  { path: '', component: ListOperation },
  { path: 'add', component: FormOperation },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

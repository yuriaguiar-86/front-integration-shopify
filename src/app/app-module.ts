import { provideHttpClient, withFetch } from '@angular/common/http';
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { App } from './app';
import { AppRoutingModule } from './app-routing-module';
import { HomeComponent } from './pages/private/home/home-component';
import { FormOperationComponent } from './pages/private/operation/form-operation/form-operation-component';
import { ListOperationComponent } from './pages/private/operation/list-operation/list-operation-component';
import { ViewOperationComponent } from './pages/private/operation/view-operation/view-operation-component';
import { ListProductComponent } from './pages/private/product/list-product/list-product-component';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    ViewOperationComponent,
    ListOperationComponent,
    FormOperationComponent,
    ListProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
  ],
  bootstrap: [App]
})
export class AppModule { }

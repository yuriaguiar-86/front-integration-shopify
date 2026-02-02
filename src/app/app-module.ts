import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ListOperation } from './pages/private/operation/list-operation/list-operation';
import { Home } from './pages/private/home/home';
import { FormOperation } from './pages/private/operation/form-operation/form-operation';

@NgModule({
  declarations: [
    App,
    ListOperation,
    Home,
    FormOperation,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
  ],
  bootstrap: [App]
})
export class AppModule { }

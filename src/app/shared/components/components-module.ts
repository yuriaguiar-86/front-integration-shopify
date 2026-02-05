import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterPage } from './footer-page/footer-page';
import { Sidebar } from './layout/sidebar/sidebar';
import { Toolbar } from './layout/toolbar/toolbar';
import { TitlesHeader } from './titles-header/titles-header';

@NgModule({
  declarations: [
    TitlesHeader,
    FooterPage,
    Toolbar,
    Sidebar
  ],
  imports: [
    RouterModule
  ],
  exports: [
    TitlesHeader,
    FooterPage,
    Toolbar,
    Sidebar
  ]
})
export class ComponentsModule { }

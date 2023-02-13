import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';

import {HomePageRoutingModule} from './home-routing.module';

import {HomePage} from './home.page';
import {CategoriesModule} from "./categories/categories.module";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HomePageRoutingModule,
    CategoriesModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';

import {HomePageRoutingModule} from './home-routing.module';

import {HomePage} from './home.page';
import {HeaderComponent} from "../../components/header/header.component";
import {CategoriesModule} from "./categories/categories.module";
import {NavBarComponent} from "../../components/nav-bar/nav-bar.component";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HomePageRoutingModule,
    CategoriesModule
  ],
  declarations: [HomePage, HeaderComponent, NavBarComponent]
})
export class HomePageModule {
}

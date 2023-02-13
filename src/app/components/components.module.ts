import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {IonicModule} from "@ionic/angular";

@NgModule({
  declarations: [HeaderComponent, NavBarComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [HeaderComponent]
})
export class ComponentsModule {
}

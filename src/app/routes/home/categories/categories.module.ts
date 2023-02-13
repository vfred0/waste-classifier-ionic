import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {CategoriesComponent} from "./categories.component";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    CategoriesComponent
  ],
  declarations: [CategoriesComponent]
})
export class CategoriesModule {
}

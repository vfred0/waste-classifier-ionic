import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';

import {ScanPageRoutingModule} from './scan-routing.module';

import {ScanPage} from './scan.page';
import {ComponentsModule} from "../../components/components.module";
import {WebcamModule} from "ngx-webcam";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ScanPageRoutingModule,
    ComponentsModule,
    WebcamModule
  ],
  declarations: [ScanPage]
})
export class ScanPageModule {
}

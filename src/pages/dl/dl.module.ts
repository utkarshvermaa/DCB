import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DlPage } from './dl';

@NgModule({
  declarations: [
    DlPage,
  ],
  imports: [
    IonicPageModule.forChild(DlPage),
  ],
})
export class DlPageModule {}

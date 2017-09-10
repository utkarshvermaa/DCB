import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyYodleePage } from './my-yodlee';

@NgModule({
  declarations: [
    MyYodleePage,
  ],
  imports: [
    IonicPageModule.forChild(MyYodleePage),
  ],
})
export class MyYodleePageModule {}

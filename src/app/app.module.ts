import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ScanPage } from '../pages/scan/scan';
import { ScanResultPage } from '../pages/scan-result/scan-result';
import { Api } from '../providers/api';
import { User } from '../providers/user';
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";

@NgModule({
  declarations: [
    MyApp,
    ScanPage,
    ScanResultPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ScanPage,
    ScanResultPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler },
    Api,
    User,
    StatusBar,
    SplashScreen,
    BarcodeScanner
  ]
})
export class AppModule { }

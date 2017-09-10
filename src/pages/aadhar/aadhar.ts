import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';


/**
 * Generated class for the AadharPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aadhar',
  templateUrl: 'aadhar.html',
})
export class AadharPage {

  options: BarcodeScannerOptions;
  aadharData: null;
  scannedAadhar = null;


  constructor(private barcodeScanner: BarcodeScanner, public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AadharPage');
  }

  async scanAadhar(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedAadhar = barcodeData.text;
    })
  }

  scanCode(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedAadhar = barcodeData.text;
    })
  }

}

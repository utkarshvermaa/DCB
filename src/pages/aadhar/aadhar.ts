import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { AlertController } from 'ionic-angular';


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
  createdData: null;


  constructor(private barcodeScanner: BarcodeScanner, public navCtrl: NavController, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AadharPage');
  }

  async scanAadhar(){
    this.presentAlert();
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedAadhar = barcodeData.text;
    })
  }

  scanCode(){
    this.presentAlert();

    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedAadhar = barcodeData.text;
    })
    

  }

  createCode(){
    this.createCode = this.aadharData;

  }

  presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'Scan Successful!',
    subTitle: 'Name: Nikhil Kumar Mishra <br> UID: 8689 4990 8204 <br> DOB: 03-04-1997',
    buttons: ['Dismiss']
  });
  alert.present();
}


}

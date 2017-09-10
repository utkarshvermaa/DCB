import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the MyYodleePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-yodlee',
  templateUrl: 'my-yodlee.html',
})
export class MyYodleePage {
  accountData: string;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyYodleePage');
  }

  returnAc(){
    this.accountData = "A/c Holder Name: Vibhor Gupta, Bank Name: State Bank of India, A/c Number: 35294645160 ";
    this.presentAlert();
  }

   presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'Successfully Registered!',
    subTitle: 'Your unique D-registry hash is  fijuf0iwqeur9wquer09quw0r87021uwq0re8qru0qw7e ',
    buttons: ['OK']
  });
  alert.present();
}

}

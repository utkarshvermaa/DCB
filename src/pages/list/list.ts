import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['barcode', 'card', 'car'];

    this.items = [];

    this.items.push({
      title: 'Aadhar Card' ,
      note: 'Use Aadhar' ,
      icon: this.icons[0]
    });

    this.items.push({
      title: 'PAN Card' ,
      note: 'Use PAN' ,
      icon: this.icons[1]
    });

    this.items.push({
      title: 'Driving License' ,
      note: 'Use DL ' ,
      icon: this.icons[2]
    });

    // for (let i = 1; i < 4; i++) {
    //   this.items.push({
    //     title: 'Item ' + i,
    //     note: '' + i,
    //     icon: this.icons[i-1]
    //   });
    // }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}

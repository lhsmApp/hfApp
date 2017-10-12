import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Notice} from '../../model/notice';

/**
 * Generated class for the NoticeInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notice-info',
  templateUrl: 'notice-info.html',
})
export class NoticeInfoPage {
  itemShow:Notice;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itemShow = this.navParams.get("itemTranfer");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticeInfoPage');
  }

}

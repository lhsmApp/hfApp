import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';
import {DEFAULT_INVOICE} from "../../providers/Constants";

/**
 * Generated class for the AttachmentViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-attachment-view',
  templateUrl: 'attachment-view.html',
})
export class AttachmentViewPage {

  invoicePath: string=DEFAULT_INVOICE;
  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttachmentViewPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

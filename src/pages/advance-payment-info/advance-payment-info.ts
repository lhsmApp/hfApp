import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdvancePaymentInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-advance-payment-info',
  templateUrl: 'advance-payment-info.html',
})
export class AdvancePaymentInfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdvancePaymentInfoPage');
  }

  //发票
  invoice(){
  	this.navCtrl.push("InvoiceListPage");
  }

  //工程量清单
  billOfGcl(){
	this.navCtrl.push("BillGclPage");
  }

}

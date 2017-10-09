import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TransferFundsInfo} from '../../model/transfer-funds-info.d';

/**
 * Generated class for the TransferFundsApprovalItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transfer-funds-approval-item',
  templateUrl: 'transfer-funds-approval-item.html',
})
export class TransferFundsApprovalItemPage {
  oper:string;
  itemTranfer:TransferFundsInfo;
  itemShow:TransferFundsInfo;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.oper = this.navParams.get("oper");
  	this.itemTranfer = this.navParams.get("itemTranfer");
    this.getShowItem();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransferFundsApprovalItemPage');
  }

  getShowItem(){
    //this.itemTranfer.codeAcceptApply
    //this.itemShow
  }
  
  //资产明细
  toAssetDetail(){
    this.navCtrl.push("AssetDetailsListInfoPage", {'itemTranfer': this.itemShow});
  }

  check(){

  }

}

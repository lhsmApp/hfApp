import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AcceptApplyInfo} from '../../model/accept-apply-info.d';

/**
 * Generated class for the CheckApprovalItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-check-approval-item',
  templateUrl: 'check-approval-item.html',
})
export class CheckApprovalItemPage {
  oper:string;
  itemTranfer:AcceptApplyInfo;
  itemShow:AcceptApplyInfo;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.oper = this.navParams.get("oper");
  	this.itemTranfer = this.navParams.get("itemTranfer");
    this.getShowItem();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckApprovalItemPage');
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

import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TransferFundsDetail} from '../../model/transfer-funds-detail';

/**
 * Generated class for the TransferFundsInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transfer-funds-info',
  templateUrl: 'transfer-funds-info.html',
})
export class TransferFundsInfoPage {
  title:string;
  oper:string;
  translateCode:string;
  itemShow:TransferFundsDetail;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private formBuilder: FormBuilder) {
    this.title = this.navParams.get("title");
  	this.oper = this.navParams.get("oper");
  	this.translateCode = this.navParams.get("CodeTranfer");
    this.getShowItem();

    //,'oper':'审批'
  }

  getShowItem(){
    this.itemShow = new TransferFundsDetail();
    this.itemShow.translateCode = this.translateCode;
  }
  
  //资产明细
  toAssetDetail(){
    this.navCtrl.push("AssetDetailsListInfoPage", {'itemTranfer': this.itemShow});
  }

  check(){

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransferFundsInfoPage');
  }

}

import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TransferFundsDetail} from '../../model/transfer-funds-detail';

import {Oper,Oper_Look,Oper_Approval} from '../../providers/TransferFeildName';
import {Title} from '../../providers/TransferFeildName';
import {BillNumberCode} from '../../providers/TransferFeildName';

import {Page_AssetDetailsListInfoPage} from '../../providers/TransferFeildName';
import {TypeGetAsset,TypeGetAsset_TransferFunds} from '../../providers/TransferFeildName';

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
    this.title = this.navParams.get(Title);
  	this.oper = this.navParams.get(Oper);
  	this.translateCode = this.navParams.get(BillNumberCode);

    this.getShowItem();

    //this.oper === Oper_Approval
  }

  getShowItem(){
    this.itemShow = new TransferFundsDetail();
    this.itemShow.translateCode = this.translateCode;
  }
  
  //资产明细
  toAssetDetail(){
    this.navCtrl.push(Page_AssetDetailsListInfoPage, {BillNumberCode: this.translateCode, BillContractCode:'', TypeGetAsset:TypeGetAsset_TransferFunds});
  }

  check(){

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransferFundsInfoPage');
  }

}

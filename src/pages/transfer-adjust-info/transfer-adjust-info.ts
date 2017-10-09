import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TransferAdjustInfo} from '../../model/transfer-adjust-info.d';

/**
 * Generated class for the TransferAdjustInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transfer-adjust-info',
  templateUrl: 'transfer-adjust-info.html',
})
export class TransferAdjustInfoPage {
  title:string;
  oper:string;
  itemTranfer:TransferAdjustInfo;
  itemShow:TransferAdjustInfo;
  applyFrom:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private formBuilder: FormBuilder) {
    this.title = this.navParams.get("title");
  	this.oper = this.navParams.get("oper");
  	this.itemShow = this.navParams.get("itemTranfer");
    this.getShowItem();

    //,'oper':'审批'

    this.applyFrom = this.formBuilder.group({
      codeTransferFunds: [this.itemShow.codeTransferFunds],
      applyTimeTransferFunds: [this.itemShow.applyTimeTransferFunds],
      smTransferFunds: [this.itemShow.smTransferFunds],
      stateTransferFunds: [this.itemShow.stateTransferFunds],
      typeTransferFunds: [this.itemShow.typeTransferFunds],
      projPartCodeTransferFunds: [this.itemShow.projPartCodeTransferFunds],
      projPartNameTransferFunds: [this.itemShow.projPartNameTransferFunds],
      perTimeTransferFunds: [this.itemShow.perTimeTransferFunds],
      jeTransferFunds: [this.itemShow.jeTransferFunds],
      applyTransferFunds: [this.itemShow.applyTransferFunds]
    });
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransferAdjustInfoPage');
  }

}

import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TransferAdjustMain} from '../../model/transfer-adjust-main';
import {TransferAdjustDetail} from '../../model/transfer-adjust-detail';

import {Oper,Oper_Look,Oper_Approval} from '../../providers/TransferFeildName';
import {Title} from '../../providers/TransferFeildName';
import {BillNumberCode} from '../../providers/TransferFeildName';

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
  isShow:boolean;
  title:string;
  oper:string;
  itemTranfer:TransferAdjustMain;
  itemShow:TransferAdjustDetail;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private formBuilder: FormBuilder) {
    this.isShow = false;
    this.title = this.navParams.get("title");
  	this.oper = this.navParams.get("oper");
    if(this.oper === Oper_Approval){
        this.isShow = true;
    }
  	this.itemTranfer = this.navParams.get("itemTranfer");
    this.getShowItem();

    //,'oper':'审批'
  }

  getShowItem(){
    //this.itemTranfer.codeAcceptApply
    this.itemShow = new TransferAdjustDetail();
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

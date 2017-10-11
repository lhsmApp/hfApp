import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AcceptApplyDetail} from '../../model/accept-apply-detail';

import {Oper,Oper_Look,Oper_Approval} from '../../providers/TransferFeildName';
import {Title} from '../../providers/TransferFeildName';
import {BillNumberCode} from '../../providers/TransferFeildName';

import {Page_AssetDetailsListInfoPage} from '../../providers/TransferFeildName';
import {TypeGetAsset,TypeGetAsset_AcceptApply} from '../../providers/TransferFeildName';

/**
 * Generated class for the AcceptApplyInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accept-apply-info',
  templateUrl: 'accept-apply-info.html',
})
export class AcceptApplyInfoPage {
  isShow:boolean;
  title:string;
  oper:string;
  billNumber:string;

  itemShow:AcceptApplyDetail;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.isShow = false;
    this.title = this.navParams.get(Title);
    this.oper = this.navParams.get(Oper);
    if(this.oper === Oper_Approval){
        this.isShow = true;
    }
  	this.billNumber = this.navParams.get(BillNumberCode);
    this.getShowItem();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcceptApplyInfoPage');
  }

  getShowItem(){
    //this.billNumber
    this.itemShow = new AcceptApplyDetail();
    this.itemShow.billNumber = this.billNumber;
  }
  
  //资产明细
  toAssetDetail(){
    this.navCtrl.push(Page_AssetDetailsListInfoPage, {BillNumberCode: this.billNumber, BillContractCode:this.itemShow.contractCode, TypeGetAsset:TypeGetAsset_AcceptApply});
  }

  check(){

  }

}

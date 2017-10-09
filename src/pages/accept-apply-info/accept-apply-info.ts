import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AcceptApplyInfo} from '../../model/accept-apply-info.d';

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
  title:string;
  oper:string;
  itemTranfer:AcceptApplyInfo;
  applyFrom:any;
  itemShow:AcceptApplyInfo;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private formBuilder: FormBuilder) {
    this.title = this.navParams.get("title");
    this.oper = this.navParams.get("oper");
  	this.itemShow = this.navParams.get("itemTranfer");
    this.getShowItem();

    //,'oper':'审批'

    this.applyFrom = this.formBuilder.group({
      codeAcceptApply: [this.itemShow.codeAcceptApply],
      contractCodeAcceptApply: [this.itemShow.contractCodeAcceptApply],
      contractNameAcceptApply: [this.itemShow.contractNameAcceptApply],
      projTypeAcceptApply: [this.itemShow.projTypeAcceptApply],
      projPartNameAcceptApply: [this.itemShow.projPartNameAcceptApply],
      applyDepartAcceptApply: [this.itemShow.applyDepartAcceptApply],
      applyTimeAcceptApply: [this.itemShow.applyTimeAcceptApply],
      applyAcceptApply: [this.itemShow.applyAcceptApply]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcceptApplyInfoPage');
  }

  getShowItem(){
    //this.itemTranfer.codeAcceptApply
    //this.itemShow
    //this.itemShow = this.itemTranfer；
  }
  
  //资产明细
  toAssetDetail(){
    this.navCtrl.push("AssetDetailsListInfoPage", {'itemTranfer': this.itemShow});
  }

  check(){

  }

}
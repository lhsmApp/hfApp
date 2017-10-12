import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
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
  isShow:boolean;
  title:string;
  oper:string;
  translateCode:string;

  itemShow:TransferFundsDetail;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              public alertCtrl: AlertController) {
    this.isShow = false;
    this.title = this.navParams.get(Title);
  	this.oper = this.navParams.get(Oper);
    if(this.oper === Oper_Approval){
        this.isShow = true;
    }
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
    let prompt = this.alertCtrl.create({
      title: '审批',
      message: "请输入审批意见",
      inputs: [
        {
          name: 'title',
          placeholder: '请输入审批意见'
        },
      ],
      
    });

    prompt.addButton({
        text: '取消',
        cssClass:'alertButtionCancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      });
    prompt.addButton({
        text: '不通过',
        cssClass:'alertButtionNo',
        handler: data => {
          console.log(data);
        }
      });
    prompt.addButton({
      text: '通过',
      cssClass:'alertButtionYes',
      handler: data => {
      }
    });
    prompt.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransferFundsInfoPage');
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AcceptAssetInfo} from '../../model/accept-asset-info.d';
import {AssetInfo} from '../../model/asset-detail-info.d';

/**
 * Generated class for the AssetDetailsAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 const listGet:AssetInfo[]=[
     {isCheck: false, codeAsset: '0001', nameAsset: 'nsdfds', xhAsset: 'xdsc', oldValueAsset: '100.00'},
     {isCheck: false, codeAsset: '0002', nameAsset: 'ncds', xhAsset: 'xjt', oldValueAsset: '100.00'},
     {isCheck: false, codeAsset: '0003', nameAsset: 'nffs', xhAsset: 'xxs', oldValueAsset: '100.00'},
 ];

@IonicPage()
@Component({
  selector: 'page-asset-details-add',
  templateUrl: 'asset-details-add.html',
})
export class AssetDetailsAddPage {
	list:AssetInfo[];
  transferItem:AcceptAssetInfo;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.list=listGet;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssetDetailsAddPage');
  }

  add(){
  	
  }

  toDetail(item: AssetInfo){
    this.transferItem = {codeAsset: item.codeAsset, nameAsset: item.nameAsset, xhAsset: item.xhAsset, oldValueAsset: item.oldValueAsset, orderAsset: '', typeAsset: '',categoryAsset: '',depaetAsset: '',groupAsset: '',carAsset: '',unitAsset: '',venderAsset: '',numberAsset: '',productDateAsset: '',useDateAsset: '',useDirectionAsset: '',contractCodeAsset: '',getModelAsset: '',repairEndDateAsset: '',perUseLifeAsset: '',stateAsset: '',storePlaceAsset: '',custodianAsset: '',technicalDepartAsset: '',netWorthAsset: '',depreciationAsset: '',impairmentProvisionAsset: ''};
    this.transferItem.codeAsset = item.codeAsset;
    this.transferItem.nameAsset = item.nameAsset;//资产名称
    this.transferItem.xhAsset = item.xhAsset;//规格型号
    this.transferItem.oldValueAsset = item.oldValueAsset;//原值
  	this.navCtrl.push("AssetDetailsItemPage", {"itemTranfer": this.transferItem,'oper':'添加'});
  }

}

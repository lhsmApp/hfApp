import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AcceptAssetMain} from '../../model/accept-asset-main';

import {BillNumberCode} from '../../providers/TransferFeildName';
import {BillContractCode} from '../../providers/TransferFeildName';
import {TypeGetAsset,TypeGetAsset_AcceptApply,TypeGetAsset_TransferFunds,TypeGetAsset_TransferAdjust} from '../../providers/TransferFeildName';

import {Page_AssetDetailsInfoPage} from '../../providers/TransferFeildName';
//import {BillNumberCode} from '../../providers/TransferFeildName';
//import {BillContractCode} from '../../providers/TransferFeildName';
import {BillKeyCode} from '../../providers/TransferFeildName';

/**
 * Generated class for the AssetDetailsListInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 const listGet:AcceptAssetMain[]=[
     {assetsCode: '0001', assetsName: 'nsdfds', departCode: 'xdsc', keyCode: '100'},
     {assetsCode: '0002', assetsName: 'ncds', departCode: 'xjt', keyCode: '100'},
     {assetsCode: '0003', assetsName: 'nffs', departCode: 'xxs', keyCode: '100'},
 ];

@IonicPage()
@Component({
  selector: 'page-asset-details-list-info',
  templateUrl: 'asset-details-list-info.html',
})
export class AssetDetailsListInfoPage {
  billNumber:string;
  contractCode:string;
  acceptanceFlag:string;

	list:AcceptAssetMain[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.billNumber = this.navParams.get(BillNumberCode);
    this.contractCode = this.navParams.get(BillContractCode);
    this.acceptanceFlag = this.navParams.get(TypeGetAsset);

    this.getList();
  }

  //获取列表信息
  getList() {
    /*this.topicService.getTopics(this.params).subscribe(
      data => this.topics = data.data
      );*/
    this.list = listGet;
  }
  
  toDetail(item: AcceptAssetMain){
  	this.navCtrl.push(Page_AssetDetailsInfoPage, {BillNumberCode: this.billNumber, BillContractCode:this.contractCode, BillKeyCode: item.keyCode});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssetDetailsListInfoPage');
  }

}

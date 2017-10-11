import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AcceptAssetMain} from '../../model/accept-asset-main';

import {BillNumberCode} from '../../providers/TransferFeildName';
import {BillContractCode} from '../../providers/TransferFeildName';
import {TypeGetAsset,TypeGetAsset_AcceptApply,TypeGetAsset_TransferFunds,TypeGetAsset_TransferAdjust} from '../../providers/TransferFeildName';

import {Page_AssetDetailsInfoPage,Page_AssetDetailsAddPage,Page_AssetDetailsItemPage} from '../../providers/TransferFeildName';
import {Oper,Oper_Look,Oper_Add,Oper_Edit} from '../../providers/TransferFeildName';
//import {BillNumberCode} from '../../providers/TransferFeildName';
//import {BillContractCode} from '../../providers/TransferFeildName';
import {BillKeyCode} from '../../providers/TransferFeildName';
import {ItemTranfer} from '../../providers/TransferFeildName';

/**
 * Generated class for the AssetDetailsListPage page.
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
  selector: 'page-asset-details-list',
  templateUrl: 'asset-details-list.html',
})
export class AssetDetailsListPage {
  billNumber:string;
  contractCode:string;
  acceptanceFlag:string;

	list:AcceptAssetMain[];

  constructor(public navCtrl: NavController, 
  	          public navParams: NavParams) {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssetDetailsListPage');
  }

  add(){
  	this.navCtrl.push(Page_AssetDetailsAddPage, {BillNumberCode: this.billNumber, BillContractCode:this.contractCode,});
  }
  edit(item: AcceptAssetMain){
    this.navCtrl.push(Page_AssetDetailsItemPage, {BillNumberCode: this.billNumber, BillContractCode:this.contractCode, BillKeyCode: item.keyCode,ItemTranfer:[],Oper:Oper_Edit});
  }
  toDetail(item: AcceptAssetMain){
  	this.navCtrl.push(Page_AssetDetailsInfoPage, {BillNumberCode: this.billNumber, BillContractCode:this.contractCode, BillKeyCode: item.keyCode});
  }
  delete(item: AcceptAssetMain){
    
  }
}

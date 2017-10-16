import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AcceptAssetMain} from '../../model/accept-asset-main';
import {ContractService} from '../../services/contractService';
import {ResultBase} from "../../model/result-base";

import {BillNumberCode} from '../../providers/TransferFeildName';
import {BillContractCode} from '../../providers/TransferFeildName';
import {TypeGetAsset,TypeGetAsset_AcceptApply,TypeGetAsset_TransferFunds,TypeGetAsset_TransferAdjust} from '../../providers/TransferFeildName';

import {Page_AssetDetailsInfoPage,Page_AssetDetailsItemPage} from '../../providers/TransferFeildName';
import {Oper,Oper_Look,Oper_Add,Oper_Edit} from '../../providers/TransferFeildName';
//import {BillNumberCode} from '../../providers/TransferFeildName';
//import {BillContractCode} from '../../providers/TransferFeildName';
import {BillKeyCode} from '../../providers/TransferFeildName';
import {ItemTranfer} from '../../providers/TransferFeildName';
//import {TypeGetAsset,TypeGetAsset_AcceptApply} from '../../providers/TransferFeildName';

/**
 * Generated class for the AssetDetailsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 const listGet:AcceptAssetMain[]=[
     {assetsCode: '0001', assetsName: '资产名称', departCode: '单位', keyCode: '100'},
     {assetsCode: '0002', assetsName: '资产名称', departCode: '单位', keyCode: '100'},
     {assetsCode: '0003', assetsName: '资产名称', departCode: '单位', keyCode: '100'},
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
  	          public navParams: NavParams,
              public contractService:ContractService) {
    this.list = [];
    this.billNumber = this.navParams.get(BillNumberCode);
    this.contractCode = this.navParams.get(BillContractCode);
    this.acceptanceFlag = this.navParams.get(TypeGetAsset);

    this.getList();
  }

  //获取列表信息
  getList() {
    this.list = [];
    /*//是否已验收0为未验收1为验收 0未验收 1已复核 2已验收未复核（如果是验收单据查询，则需要查询未验收的0，如果是转资单据查询，则需要传验收1，如果是合同查询则不用传参）
    this.contractService.getAssetDetailList(this.contractCode, this.billNumber, this.acceptanceFlag).subscribe(
      object => {
        let resultBase:ResultBase=object[0] as ResultBase;
        if(resultBase.result=='true'){
          //this.list = object[1] as AcceptAssetMain[];
        }
      }, () => {
    
      });*/
    this.list = listGet;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssetDetailsListPage');
  }

  //add(){
  //	this.navCtrl.push(Page_AssetDetailsAddPage, {BillNumberCode: this.billNumber, BillContractCode:this.contractCode, TypeGetAsset:TypeGetAsset_AcceptApply});
  //}
  edit(item: AcceptAssetMain){
    this.navCtrl.push(Page_AssetDetailsItemPage, {BillNumberCode: this.billNumber, BillContractCode:this.contractCode, BillKeyCode: item.keyCode,ItemTranfer:[],Oper:Oper_Edit});
  }
  //toDetail(item: AcceptAssetMain){
  //	this.navCtrl.push(Page_AssetDetailsInfoPage, {BillNumberCode: this.billNumber, BillContractCode:this.contractCode, BillKeyCode: item.keyCode});
  //}
  //delete(item: AcceptAssetMain){
  //  
  //}
}

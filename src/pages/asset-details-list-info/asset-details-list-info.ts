import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {AcceptAssetMain} from '../../model/accept-asset-main';
import {ContractService} from '../../services/contractService';
import {ResultBase} from "../../model/result-base";
import {Storage} from "@ionic/storage";
import {IN_DEPART} from "../../enums/storage-type";
import {DicInDepart} from '../../model/dic-in-depart';
import {DictUtil} from '../../providers/dict-util';
import {DEFAULT_INVOICE_EMPTY} from "../../providers/Constants";

import {BillNumberCode} from '../../providers/TransferFeildName';
import {BillContractCode} from '../../providers/TransferFeildName';
import {TypeView,TypeView_AcceptApply,TypeView_TransferFunds} from '../../providers/TransferFeildName';

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

 /*const listGet:AcceptAssetMain[]=[
     {assetsCode: '0001', assetsName: '资产名称', departCode: '单位', keyCode: '100'},
     {assetsCode: '0002', assetsName: '资产名称', departCode: '单位', keyCode: '100'},
     {assetsCode: '0003', assetsName: '资产名称', departCode: '单位', keyCode: '100'},
 ];*/

@IonicPage()
@Component({
  selector: 'page-asset-details-list-info',
  templateUrl: 'asset-details-list-info.html',
})
export class AssetDetailsListInfoPage {
  billNumber:string;
  contractCode:string;
  TypeView:string;

  listAll:AcceptAssetMain[];
	list:AcceptAssetMain[];
  listDept: DicInDepart[];
  emptyPath=DEFAULT_INVOICE_EMPTY;
  isEmpty:boolean=false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl: AlertController,
              private storage: Storage,
              private dictUtil:DictUtil,
              public contractService:ContractService) {
    //this.listAll = [];
    //this.list = [];
    this.billNumber = this.navParams.get(BillNumberCode);
    this.contractCode = this.navParams.get(BillContractCode);
    this.TypeView = this.navParams.get(TypeView);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssetDetailsListInfoPage');
    //this.listAll = [];
    //this.list = [];
    this.storage.get(IN_DEPART).then((inDepart: DicInDepart[]) => {
      this.listDept=inDepart;
    });

    this.getList();
  }

  //获取列表信息
  getList() {
    this.isEmpty=false;
    //this.listAll = [];
    //this.list = [];
    ////是否已验收0为未验收1为验收 0未验收 1已复核 2已验收未复核（如果是验收单据查询，则需要查询未验收的0，如果是转资单据查询，则需要传验收1，如果是合同查询则不用传参）
    //contractCode:string, translateCode:string, acceptanceFlag:string
    let translateCode = "";
    let acceptanceFlag = "";
    if(this.TypeView === TypeView_TransferFunds){
      translateCode = this.billNumber;
    }
    if(this.TypeView === TypeView_AcceptApply){
      //acceptanceFlag = '0';
    }
    this.contractService.getAssetDetailList(this.contractCode, translateCode, acceptanceFlag).subscribe(
      object => {
        let resultBase:ResultBase=object[0] as ResultBase;
        if(resultBase.result=='true'){
          this.listAll = object[1] as AcceptAssetMain[];
          if(this.listAll){
            for(let item of this.listAll){
              item.departName  = this.dictUtil.getInDepartName(this.listDept,item.departCode);
            }
          }
          this.list = this.listAll;
          if(!(this.listAll!=null&&this.listAll.length>0)){
            this.isEmpty=true;
          }
        } else {
            let alert = this.alertCtrl.create({
              title: '提示',
              subTitle: resultBase.message,
              buttons: ['确定']
            });
            alert.present();
        }
      }, () => {
    
      });/**/
    /*this.listAll = listGet;
    this.list = listGet;*/
  }

  //模糊查询
  getItems(ev: any) {
    // Reset items back to all of the items
    //this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.list = this.listAll.filter((item) => {
        return (item.assetsCode.toLowerCase().indexOf(val.toLowerCase()) > -1 
          || item.assetsName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.list = this.listAll;
    }
  }

  //上拉刷新
  doRefresh(refresher) {
    this.getList();
    refresher.complete();
  }

  //下拉加载
  doInfinite(infiniteScroll) {
    /*this.params.page++;
    setTimeout(() => {
      this.topicService.getTopics(this.params).subscribe(
        data => {
          if (data) {
            this.topics.push(...data.data);
            infiniteScroll.complete();
          }
          else {
            infiniteScroll.enable(false);
          }
        }
        );
    }, 500);*/
  }
  
  toDetail(item: AcceptAssetMain){
  	this.navCtrl.push(Page_AssetDetailsInfoPage, {BillNumberCode: this.billNumber, BillContractCode:this.contractCode, BillKeyCode: item.keyCode});
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AcceptAssetDetail} from '../../model/accept-asset-detail';
import {ContractService} from '../../services/contractService';
import {ResultBase} from "../../model/result-base";

import {BillNumberCode} from '../../providers/TransferFeildName';
import {BillContractCode} from '../../providers/TransferFeildName';
import {BillKeyCode} from '../../providers/TransferFeildName';

/**
 * Generated class for the AssetDetailsInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 const item: AcceptAssetDetail = {xh: '24',
    assetsType: '资产类型',
    assetsCodeType: '资产类别',
    assetsCode: '资产编码',
    assetsName: '资产名称',
    departCode: '单位',
    entityCode: '所属资产组',
    assetsStandard: '规格型号',
    licenceNumber: '车牌井号',
    unitCode: '计量单位',
    makeFactory: '制造厂家',
    factoryNumber: '出厂编号',
    productDate: '出厂日期',
    operateDate: '投产日期',
    usedAspect: '使用方向',
    contractCode: '合同编号',
    applyCode: '取得方式',
    guaDate: '保修截止日期',
    depreciateYear: 3,
    usedState: '使用状况',
    storePlace: '存放地点',
    userPerson: '保管人',
    specialLine: '技术鉴定部门',
    originalValue: 34,
    nowValue: 54,
    addDepreciate: 4,
    devalueValue: 34,
    keyCode: '资产键码'};

@IonicPage()
@Component({
  selector: 'page-asset-details-info',
  templateUrl: 'asset-details-info.html',
})
export class AssetDetailsInfoPage {
  billNumber:string;
  contractCode:string;
  keyCode:string;

  list: AcceptAssetDetail[];
  itemShow:AcceptAssetDetail;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public contractService:ContractService) {
    this.itemShow = new AcceptAssetDetail();
    this.billNumber = this.navParams.get(BillNumberCode);
    this.contractCode = this.navParams.get(BillContractCode);
    this.keyCode = this.navParams.get(BillKeyCode);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssetDetailsInfoPage');
    this.itemShow = new AcceptAssetDetail();
    this.getShowItem();
  }

  getShowItem(){
    this.itemShow = new AcceptAssetDetail();
    /*//是否已验收0为未验收1为验收 0未验收 1已复核 2已验收未复核（如果是验收单据查询，则需要查询未验收的0，如果是转资单据查询，则需要传验收1，如果是合同查询则不用传参）
    this.contractService.getAssetDetailItem(this.contractCode, this.keyCode).subscribe(
      object => {
        let resultBase:ResultBase=object[0] as ResultBase;
        if(resultBase.result=='true'){
          this.list = object[1] as AcceptAssetDetail[];
          if(this.list && this.list.length > 0){
              this.itemShow = this.list[0];
          }
        }
      }, () => {
    
      });*/
    this.itemShow = item;
  }

}

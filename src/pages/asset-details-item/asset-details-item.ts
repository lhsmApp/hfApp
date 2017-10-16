import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AcceptAssetDetail} from '../../model/accept-asset-detail';
import {DicDepart} from '../../model/dic-depart';
import {ContractService} from '../../services/contractService';
import {ResultBase} from "../../model/result-base";

import {Oper,Oper_Add,Oper_Edit} from '../../providers/TransferFeildName';
import {BillNumberCode} from '../../providers/TransferFeildName';
import {BillContractCode} from '../../providers/TransferFeildName';
import {BillKeyCode} from '../../providers/TransferFeildName';
import {ItemTranfer} from '../../providers/TransferFeildName';

/**
 * Generated class for the AssetDetailsItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

  const listDeptGet: DicDepart[]=[
      {departCode:'1',departName:'单位1',parentCode:'',shortName:'',markHolding:'',departLevel:1,markTail:1,dutyCenterName:'',costCenterName:'',},
      {departCode:'2',departName:'单位2',parentCode:'',shortName:'',markHolding:'',departLevel:1,markTail:1,dutyCenterName:'',costCenterName:'',},
      {departCode:'3',departName:'单位3',parentCode:'',shortName:'',markHolding:'',departLevel:1,markTail:1,dutyCenterName:'',costCenterName:'',},
      {departCode:'4',departName:'单位4',parentCode:'',shortName:'',markHolding:'',departLevel:1,markTail:1,dutyCenterName:'',costCenterName:'',},
  ]

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
  selector: 'page-asset-details-item',
  templateUrl: 'asset-details-item.html',
})
export class AssetDetailsItemPage {
  oper:string;
  billNumber:string;
  contractCode:string;
  keyCode:string;
  itemTranfer:AcceptAssetDetail;

  itemShow:AcceptAssetDetail;
  assetFrom:any;

  constructor(public navCtrl: NavController, 
  	          public navParams: NavParams,
  	          public formBuilder: FormBuilder,
              public contractService:ContractService) {
    this.itemShow = new AcceptAssetDetail();
    this.oper = this.navParams.get(Oper);
    this.billNumber = this.navParams.get(BillNumberCode);
    this.contractCode = this.navParams.get(BillContractCode);
    this.keyCode = this.navParams.get(BillKeyCode);
    this.itemTranfer = this.navParams.get(ItemTranfer);
    
    this.getShowItem();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssetDetailsItemPage');
  }

  getShowItem(){
    this.itemShow = new AcceptAssetDetail();

    if(this.oper === Oper_Add){
        //this.itemShow = this.itemTranfer;
    } else {

    }
    
    this.assetFrom = this.formBuilder.group({
      assetsCode: [this.itemShow.assetsCode, [Validators.required]],
      assetsName: [this.itemShow.assetsName],
      assetsStandard: [this.itemShow.assetsStandard],
      originalValue: [this.itemShow.originalValue],
      xh: [this.itemShow.xh],
      assetsType: [this.itemShow.assetsType],
      assetsCodeType: [this.itemShow.assetsCodeType],
      departCode: [this.itemShow.departCode],
      entityCode: [this.itemShow.entityCode],
      licenceNumber: [this.itemShow.licenceNumber],
      unitCode: [this.itemShow.unitCode],
      makeFactory: [this.itemShow.makeFactory],
      factoryNumber: [this.itemShow.factoryNumber],
      productDate: [this.itemShow.productDate],
      operateDate: [this.itemShow.operateDate],
      usedAspect: [this.itemShow.usedAspect],
      contractCode: [this.itemShow.contractCode],
      applyCode: [this.itemShow.applyCode],
      guaDate: [this.itemShow.guaDate],
      depreciateYear: [this.itemShow.depreciateYear],
      usedState: [this.itemShow.usedState],
      storePlace: [this.itemShow.storePlace],
      userPerson: [this.itemShow.userPerson],
      specialLine: [this.itemShow.specialLine],
      nowValue: [this.itemShow.nowValue],
      addDepreciate: [this.itemShow.addDepreciate],
      devalueValue: [this.itemShow.devalueValue],
    });
  }

  //保存
  save(){
    //Object.assign(this.userInfo, this.userForm.value);
    //this.storage.set('UserInfo', this.userInfo);
    //this.nativeService.showToast('保存成功');
    //this.viewCtrl.dismiss(this.userInfo);
  }

}

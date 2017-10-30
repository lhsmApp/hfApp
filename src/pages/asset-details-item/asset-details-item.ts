import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {AcceptAssetDetail} from '../../model/accept-asset-detail';
import {Depart} from '../../model/depart';
import {ContractService} from '../../services/contractService';
import {AcceptService} from '../../services/acceptService';
import {ResultBase} from "../../model/result-base";
import {IN_DEPART} from "../../enums/storage-type";
import {DicInDepart} from '../../model/dic-in-depart';
import {DictUtil} from '../../providers/dict-util';
import {Storage} from "@ionic/storage";
import {DicComplex} from '../../model/dic-complex';
import {DicBasicEntity} from '../../model/dic-basic-entity';
import {SPECIAL_LINE} from "../../enums/storage-type";
import {DEPOSITARY} from "../../enums/storage-type";
import {USED_STATE} from "../../enums/storage-type";
import {APPLY_CODE} from "../../enums/storage-type";
import {USED_ASPECT} from "../../enums/storage-type";
import {BASIC_ENTITY} from "../../enums/storage-type";
import {UNIT} from "../../enums/storage-type";

import {Oper,Oper_Add,Oper_Edit} from '../../providers/TransferFeildName';
import {BillNumberCode} from '../../providers/TransferFeildName';
import {BillContractCode} from '../../providers/TransferFeildName';
import {BillKeyCode} from '../../providers/TransferFeildName';
import {ItemTranfer} from '../../providers/TransferFeildName';//从添加界面传回

/**
 * Generated class for the AssetDetailsItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

  /*const listDeptGet: Depart[]=[
      {departCode:'1',departName:'单位1'},
      {departCode:'2',departName:'单位2'},
      {departCode:'133930001',departName:'单位3'},
      {departCode:'4',departName:'单位4'},
  ]*/

 /*const item: AcceptAssetDetail = {xh: '24',
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
    keyCode: '资产键码'};*/

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
  itemTranfer:AcceptAssetDetail;//从添加界面传回

  list: AcceptAssetDetail[];
  itemShow:AcceptAssetDetail;
  assetFrom:any;

  //assetsType: string;//资产类型"
    dicAssetsCodeType: string;//资产类别"
  DicDepartCode: DicInDepart[];//所属单位"
  dicEntityCode: DicBasicEntity[];//所属资产组"
  dicUnitCode: DicComplex[];//计量单位"
  dicUsedAspect: DicComplex[];//使用方向"
  dicApplyCode: DicComplex[];//取得方式"
  dicUsedState: DicComplex[];//使用状况"
  dicStorePlace: DicComplex[];//存放地点""
    dicUserPerson: string;//保管人"
  dicSpecialLine: DicComplex[];//技术鉴定部门"

//2.其中出厂日期早于投产日期，投产日期早于增加日期；

  constructor(public navCtrl: NavController, 
  	          public navParams: NavParams,
  	          public formBuilder: FormBuilder,
              public alertCtrl: AlertController,
              private storage: Storage,
              private dictUtil:DictUtil,
              public contractService:ContractService, 
              public acceptService:AcceptService) {
    this.itemShow = new AcceptAssetDetail();
    this.oper = this.navParams.get(Oper);
    this.billNumber = this.navParams.get(BillNumberCode);
    this.contractCode = this.navParams.get(BillContractCode);
    this.keyCode = this.navParams.get(BillKeyCode);
    this.itemTranfer = this.navParams.get(ItemTranfer);//从添加界面传回
    
    this.assetFrom = this.formBuilder.group({
      assetsCode: [, [Validators.required]],
      assetsName: [, []],
      assetsStandard: [, []],
      originalValue: [, []],
      xh: [, []],
      assetsType: [, []],
      assetsCodeType: [, []],
      departCode: [, []],
      entityCode: [, []],
      licenceNumber: [, []],
      unitCode: [, []],
      makeFactory: [, []],
      factoryNumber: [, []],
      productDate: [, []],
      operateDate: [, []],
      usedAspect: [, []],
      contractCode: [, [Validators.required]],
      applyCode: [, []],
      guaDate: [, []],
      depreciateYear: [, []],
      usedState: [, []],
      storePlace: [, []],
      userPerson: [, []],
      specialLine: [, []],
      nowValue: [, []],
      addDepreciate: [, []],
      devalueValue: [, []],
      keyCode: [, []],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssetDetailsItemPage');
    this.itemShow = new AcceptAssetDetail();
    this.storage.get(IN_DEPART).then((inDepart: DicInDepart[]) => {
      this.DicDepartCode=inDepart;
    });
    this.storage.get(BASIC_ENTITY).then((dicList: DicBasicEntity[]) => {
      this.dicEntityCode=dicList;
    });
    this.storage.get(UNIT).then((dicList: DicComplex[]) => {
      this.dicUnitCode=dicList;
    });
    this.storage.get(USED_ASPECT).then((dicList: DicComplex[]) => {
      this.dicUsedAspect=dicList;
    });
    this.storage.get(APPLY_CODE).then((dicList: DicComplex[]) => {
      this.dicApplyCode=dicList;
    });
    this.storage.get(USED_STATE).then((dicList: DicComplex[]) => {
      this.dicUsedState=dicList;
    });
    this.storage.get(DEPOSITARY).then((dicList: DicComplex[]) => {
      this.dicStorePlace=dicList;
    });

    this.storage.get(SPECIAL_LINE).then((dicList: DicComplex[]) => {
      this.dicSpecialLine=dicList;
    });
    this.getShowItem();
  }

  getShowItem(){
    this.itemShow = new AcceptAssetDetail();

    if(this.oper === Oper_Add){
        
    } else if(this.oper === Oper_Edit){
      this.contractService.getAssetDetailItem(this.contractCode, this.keyCode).subscribe(
        object => {
          let resultBase:ResultBase=object[0] as ResultBase;
          if(resultBase.result=='true'){
            this.list = object[1] as AcceptAssetDetail[];
            if(this.list && this.list.length > 0){
              this.itemShow = this.list[0];
              this.FromPatchValue();
            }
          } else {
            let alert = this.alertCtrl.create({
              title: '提示!',
              subTitle: resultBase.message,
              buttons: ['确定']
            });
            alert.present();
        }
        }, () => {
        
        });/**/
      /*this.itemShow = item;
      this.FromPatchValue();*/
    } else{
      this.FromPatchValue();
    }
  }

  FromPatchValue(){
    this.assetFrom.patchValue({
      assetsCode: this.itemShow.assetsCode,
      assetsName: this.itemShow.assetsName,
      assetsStandard: this.itemShow.assetsStandard,
      originalValue: this.itemShow.originalValue,
      xh: this.itemShow.xh,
      assetsType: this.itemShow.assetsType,
      assetsCodeType: this.itemShow.assetsCodeType,
      departCode: this.itemShow.departCode,
      entityCode: this.itemShow.entityCode,
      licenceNumber: this.itemShow.licenceNumber,
      unitCode: this.itemShow.unitCode,
      makeFactory: this.itemShow.makeFactory,
      factoryNumber: this.itemShow.factoryNumber,
      productDate: this.itemShow.productDate,
      operateDate: this.itemShow.operateDate,
      usedAspect: this.itemShow.usedAspect,
      contractCode: this.itemShow.contractCode,
      applyCode: this.itemShow.applyCode,
      guaDate: this.itemShow.guaDate,
      depreciateYear: this.itemShow.depreciateYear,
      usedState: this.itemShow.usedState,
      storePlace: this.itemShow.storePlace,
      userPerson: this.itemShow.userPerson,
      specialLine: this.itemShow.specialLine,
      nowValue: this.itemShow.nowValue,
      addDepreciate: this.itemShow.addDepreciate,
      devalueValue: this.itemShow.devalueValue,
      keyCode: this.itemShow.keyCode,
    });
  }

  //保存
  save(){
    let transferInfo=new Array<AcceptAssetDetail>();
    let detail=this.assetFrom.value as AcceptAssetDetail;
    
    transferInfo.push(detail);

    this.acceptService.saveAcceptApplyDetail(this.billNumber, this.contractCode, JSON.stringify(transferInfo))
      .subscribe(object => {
        let resultBase:ResultBase=object[0] as ResultBase;
        if(resultBase.result=='true'){
          this.oper = Oper_Edit;
          console.log(object[1][0]);
          this.itemShow = object[1][0] as AcceptAssetDetail;
          this.keyCode = this.itemShow.keyCode;
          this.FromPatchValue();
        } else {
            let alert = this.alertCtrl.create({
              title: '提示!',
              subTitle: resultBase.message,
              buttons: ['确定']
            });
            alert.present();
        }
      }, () => {
        
      });
  }

}

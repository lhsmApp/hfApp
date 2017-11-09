import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {AcceptAssetDetail} from '../../model/accept-asset-detail';
import {ContractService} from '../../services/contractService';
import {ResultBase} from "../../model/result-base";
import {IN_DEPART} from "../../enums/storage-type";
import {UNIT} from "../../enums/storage-type";
import {SPECIAL_LINE} from "../../enums/storage-type";
import {DEPOSITARY} from "../../enums/storage-type";
//import {} from "../../enums/storage-type";
import {USED_STATE} from "../../enums/storage-type";
import {APPLY_CODE} from "../../enums/storage-type";
import {BASIC_ENTITY} from "../../enums/storage-type";
import {USED_ASPECT} from "../../enums/storage-type";
import {DicInDepart} from '../../model/dic-in-depart';
import {DictUtil} from '../../providers/dict-util';
import {Storage} from "@ionic/storage";
import {DicComplex} from '../../model/dic-complex';
import {DicBasicEntity} from '../../model/dic-basic-entity';

import {BillNumberCode} from '../../providers/TransferFeildName';
import {BillContractCode} from '../../providers/TransferFeildName';
import {BillKeyCode} from '../../providers/TransferFeildName';

/**
 * Generated class for the AssetDetailsInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
  selector: 'page-asset-details-info',
  templateUrl: 'asset-details-info.html',
})
export class AssetDetailsInfoPage {
  billNumber:string;
  contractCode:string;
  keyCode:string;

  list: AcceptAssetDetail[];
  itemShow:AcceptAssetDetail;
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

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl: AlertController,
              private storage: Storage,
              private dictUtil:DictUtil,
              public contractService:ContractService) {
    this.itemShow = new AcceptAssetDetail();
    this.billNumber = this.navParams.get(BillNumberCode);
    this.contractCode = this.navParams.get(BillContractCode);
    this.keyCode = this.navParams.get(BillKeyCode);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssetDetailsInfoPage');
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
    this.contractService.getAssetDetailItem(this.contractCode, this.keyCode).subscribe(
      object => {
        let resultBase:ResultBase=object[0] as ResultBase;
        if(resultBase.result=='true'){
          this.list = object[1] as AcceptAssetDetail[];
          if(this.list && this.list.length > 0){
              this.itemShow = this.list[0];
              this.itemShow.assetsTypeName = this.dictUtil.getAssetsTypeName(this.itemShow.assetsType);//资产类型"
              //this.itemShow.assetsCodeTypeName = this.dictUtil.(this.,);//资产类别"
              this.itemShow.departCodeName = this.dictUtil.getInDepartName(this.DicDepartCode,this.itemShow.departCode);//所属单位"
              this.itemShow.entityCodeName = this.dictUtil.getBasicEntityName(this.dicEntityCode,this.itemShow.entityCode);//所属资产组"
              this.itemShow.unitCodeName = this.dictUtil.getUnitName(this.dicUnitCode,this.itemShow.unitCode);//计量单位"
              this.itemShow.usedAspectName = this.dictUtil.getUsedAspectName(this.dicUsedAspect,this.itemShow.usedAspect);//使用方向"
              this.itemShow.applyCodeName = this.dictUtil.getApplyCodeName(this.dicApplyCode,this.itemShow.applyCode);//取得方式"
              this.itemShow.usedStateName = this.dictUtil.getUsedStateName(this.dicUsedState,this.itemShow.usedState);//使用状况"
              this.itemShow.storePlaceName = this.dictUtil.getDepositaryName(this.dicStorePlace,this.itemShow.storePlace);//存放地点""
              //this.itemShow.userPersonName = this.dictUtil.(this.,);//保管人"
              this.itemShow.specialLineName = this.dictUtil.getSpecialLineName(this.dicSpecialLine,this.itemShow.specialLine);//技术鉴定部门"
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
    /*this.itemShow = item;*/
  }

}

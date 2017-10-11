import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AcceptAssetDetail} from '../../model/accept-asset-detail';
import {DicDepart} from '../../model/dic-depart';

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
  	          public formBuilder: FormBuilder) {
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

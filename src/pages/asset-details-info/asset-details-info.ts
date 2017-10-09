import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AcceptAssetInfo} from '../../model/accept-asset-info.d';

/**
 * Generated class for the AssetDetailsInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-asset-details-info',
  templateUrl: 'asset-details-info.html',
})
export class AssetDetailsInfoPage {
  oper:string;
  itemTranfer:AcceptAssetInfo;
  assetFrom:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	          public formBuilder: FormBuilder) {
    this.oper = this.navParams.get("oper");
    this.itemTranfer = this.navParams.get("itemTranfer");
    this.getShowItem();
    
  	this.assetFrom = formBuilder.group({
      codeAsset: [this.itemTranfer.codeAsset],
      nameAsset: [this.itemTranfer.nameAsset],
      xhAsset: [this.itemTranfer.xhAsset],
      oldValueAsset: [this.itemTranfer.oldValueAsset],
      orderAsset: [this.itemTranfer.orderAsset],
      typeAsset: [this.itemTranfer.typeAsset],
      categoryAsset: [this.itemTranfer.categoryAsset],
      depaetAsset: [this.itemTranfer.depaetAsset],
      groupAsset: [this.itemTranfer.groupAsset],
      carAsset: [this.itemTranfer.carAsset],
      unitAsset: [this.itemTranfer.unitAsset],
      venderAsset: [this.itemTranfer.venderAsset],
      numberAsset: [this.itemTranfer.numberAsset],
      productDateAsset: [this.itemTranfer.productDateAsset],
      useDateAsset: [this.itemTranfer.useDateAsset],
      useDirectionAsset: [this.itemTranfer.useDirectionAsset],
      contractCodeAsset: [this.itemTranfer.contractCodeAsset],
      getModelAsset: [this.itemTranfer.getModelAsset],
      repairEndDateAsset: [this.itemTranfer.repairEndDateAsset],
      perUseLifeAsset: [this.itemTranfer.perUseLifeAsset],
      stateAsset: [this.itemTranfer.stateAsset],
      storePlaceAsset: [this.itemTranfer.storePlaceAsset],
      custodianAsset: [this.itemTranfer.custodianAsset],
      technicalDepartAsset: [this.itemTranfer.technicalDepartAsset],
      netWorthAsset: [this.itemTranfer.netWorthAsset],
      depreciationAsset: [this.itemTranfer.depreciationAsset],
      impairmentProvisionAsset: [this.itemTranfer.impairmentProvisionAsset],
  	});
  }

  getShowItem(){
    //this.itemTranfer.codeAcceptApply
    //this.itemShow
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssetDetailsInfoPage');
  }

}

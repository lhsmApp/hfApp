import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AssetInfo} from '../../model/asset-info.d';

/**
 * Generated class for the AssetDetailsItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-asset-details-item',
  templateUrl: 'asset-details-item.html',
})
export class AssetDetailsItemPage {
  itemTranfer:AssetInfo;
  assetFrom:any;
  verifyMessages = {
    'codeAsset': {
      'errorMsg': '',
      'required': '资产编码为必填项',
    },
    'nameAsset': { 'errorMsg': '', 'required': '', },
    'xhAsset': { 'errorMsg': '', 'required': '', },
    'oldValueAsset': { 'errorMsg': '', 'required': '', },
    'orderAsset': { 'errorMsg': '', 'required': '', },
    'typeAsset': { 'errorMsg': '', 'required': '', },
    'categoryAsset': { 'errorMsg': '', 'required': '', },
    'depaetAsset': { 'errorMsg': '', 'required': '', },
    'groupAsset': { 'errorMsg': '', 'required': '', },
    'carAsset': { 'errorMsg': '', 'required': '', },
    'unitAsset': { 'errorMsg': '', 'required': '', },
    'venderAsset': { 'errorMsg': '', 'required': '', },
    'numberAsset': { 'errorMsg': '', 'required': '', },
    'productDateAsset': { 'errorMsg': '', 'required': '', },
    'useDateAsset': { 'errorMsg': '', 'required': '', },
    'useDirectionAsset': { 'errorMsg': '', 'required': '', },
    'contractCodeAsset': { 'errorMsg': '', 'required': '', },
    'getModelAsset': { 'errorMsg': '', 'required': '', },
    'repairEndDateAsset': { 'errorMsg': '', 'required': '', },
    'perUseLifeAsset': { 'errorMsg': '', 'required': '', },
    'stateAsset': { 'errorMsg': '', 'required': '', },
    'storePlaceAsset': { 'errorMsg': '', 'required': '', },
    'custodianAsset': { 'errorMsg': '', 'required': '', },
    'technicalDepartAsset': { 'errorMsg': '', 'required': '', },
    'netWorthAsset': { 'errorMsg': '', 'required': '', },
    'depreciationAsset': { 'errorMsg': '', 'required': '', },
    'impairmentProvisionAsset': { 'errorMsg': '', 'required': '', },
  };

  constructor(public navCtrl: NavController, 
  	          public navParams: NavParams,
  	          public formBuilder: FormBuilder) {
    this.itemTranfer = this.navParams.get("itemTranfer");
  	this.assetFrom = formBuilder.group({
      codeAsset: [this.itemTranfer.codeAsset, [Validators.required]],
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
    this.assetFrom.valueChanges
      .subscribe(data => {
        const verifyMessages = this.verifyMessages;
        for (const field in verifyMessages) {
          verifyMessages[field].errorMsg = '';
          const control = this.assetFrom.get(field);
          if (control && control.dirty && !control.valid) {
            const messages = verifyMessages[field];
            for (const key in control.errors) {
              messages[key] && (verifyMessages[field].errorMsg += messages[key] + ' ');
            }
          }
        }
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssetDetailsItemPage');
  }

  onSubmit() {
    //Object.assign(this.userInfo, this.userForm.value);
    //this.storage.set('UserInfo', this.userInfo);
    //this.nativeService.showToast('保存成功');
    //this.viewCtrl.dismiss(this.userInfo);
  }

}

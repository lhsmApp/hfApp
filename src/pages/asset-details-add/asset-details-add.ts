import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AssetInfo} from '../../model/asset-info.d';

/**
 * Generated class for the AssetDetailsAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 const listGet:AssetInfo[]=[
     {codeAsset: '0001', nameAsset: 'nsdfds', xhAsset: 'xdsc', oldValueAsset: '100.00', orderAsset: '', typeAsset: '',categoryAsset: '',depaetAsset: '',groupAsset: '',carAsset: '',unitAsset: '',venderAsset: '',numberAsset: '',productDateAsset: '',useDateAsset: '',useDirectionAsset: '',contractCodeAsset: '',getModelAsset: '',repairEndDateAsset: '',perUseLifeAsset: '',stateAsset: '',storePlaceAsset: '',custodianAsset: '',technicalDepartAsset: '',netWorthAsset: '',depreciationAsset: '',impairmentProvisionAsset: ''},
     {codeAsset: '0002', nameAsset: 'ncds', xhAsset: 'xjt', oldValueAsset: '100.00', orderAsset: '', typeAsset: '',categoryAsset: '',depaetAsset: '',groupAsset: '',carAsset: '',unitAsset: '',venderAsset: '',numberAsset: '',productDateAsset: '',useDateAsset: '',useDirectionAsset: '',contractCodeAsset: '',getModelAsset: '',repairEndDateAsset: '',perUseLifeAsset: '',stateAsset: '',storePlaceAsset: '',custodianAsset: '',technicalDepartAsset: '',netWorthAsset: '',depreciationAsset: '',impairmentProvisionAsset: ''},
     {codeAsset: '0003', nameAsset: 'nffs', xhAsset: 'xxs', oldValueAsset: '100.00', orderAsset: '', typeAsset: '',categoryAsset: '',depaetAsset: '',groupAsset: '',carAsset: '',unitAsset: '',venderAsset: '',numberAsset: '',productDateAsset: '',useDateAsset: '',useDirectionAsset: '',contractCodeAsset: '',getModelAsset: '',repairEndDateAsset: '',perUseLifeAsset: '',stateAsset: '',storePlaceAsset: '',custodianAsset: '',technicalDepartAsset: '',netWorthAsset: '',depreciationAsset: '',impairmentProvisionAsset: ''},
 ];

@IonicPage()
@Component({
  selector: 'page-asset-details-add',
  templateUrl: 'asset-details-add.html',
})
export class AssetDetailsAddPage {
	list:AssetInfo[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.list=listGet;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssetDetailsAddPage');
  }

  add(){
  	
  }

  toDetail(item: AssetInfo){
  	this.navCtrl.push("AssetDetailsItemPage", {"itemTranfer": item,'oper':'添加'});
  }

}

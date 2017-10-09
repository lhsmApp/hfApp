import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AcceptAssetInfo} from '../../model/accept-asset-info.d';

/**
 * Generated class for the AssetDetailsListInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 const listGet:AcceptAssetInfo[]=[
     {codeAsset: '0001', nameAsset: 'nsdfds', xhAsset: 'xdsc', oldValueAsset: '100.00', orderAsset: '', typeAsset: '',categoryAsset: '',depaetAsset: '',groupAsset: '',carAsset: '',unitAsset: '',venderAsset: '',numberAsset: '',productDateAsset: '',useDateAsset: '',useDirectionAsset: '',contractCodeAsset: '',getModelAsset: '',repairEndDateAsset: '',perUseLifeAsset: '',stateAsset: '',storePlaceAsset: '',custodianAsset: '',technicalDepartAsset: '',netWorthAsset: '',depreciationAsset: '',impairmentProvisionAsset: ''},
     {codeAsset: '0002', nameAsset: 'ncds', xhAsset: 'xjt', oldValueAsset: '100.00', orderAsset: '', typeAsset: '',categoryAsset: '',depaetAsset: '',groupAsset: '',carAsset: '',unitAsset: '',venderAsset: '',numberAsset: '',productDateAsset: '',useDateAsset: '',useDirectionAsset: '',contractCodeAsset: '',getModelAsset: '',repairEndDateAsset: '',perUseLifeAsset: '',stateAsset: '',storePlaceAsset: '',custodianAsset: '',technicalDepartAsset: '',netWorthAsset: '',depreciationAsset: '',impairmentProvisionAsset: ''},
     {codeAsset: '0003', nameAsset: 'nffs', xhAsset: 'xxs', oldValueAsset: '100.00', orderAsset: '', typeAsset: '',categoryAsset: '',depaetAsset: '',groupAsset: '',carAsset: '',unitAsset: '',venderAsset: '',numberAsset: '',productDateAsset: '',useDateAsset: '',useDirectionAsset: '',contractCodeAsset: '',getModelAsset: '',repairEndDateAsset: '',perUseLifeAsset: '',stateAsset: '',storePlaceAsset: '',custodianAsset: '',technicalDepartAsset: '',netWorthAsset: '',depreciationAsset: '',impairmentProvisionAsset: ''},
 ];

@IonicPage()
@Component({
  selector: 'page-asset-details-list-info',
  templateUrl: 'asset-details-list-info.html',
})
export class AssetDetailsListInfoPage {
	list:AcceptAssetInfo[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.list=listGet;
  }
  
  toDetail(item: AcceptAssetInfo){
  	this.navCtrl.push("AssetDetailsInfoPage", {"itemTranfer": item,'oper':'查看'});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssetDetailsListInfoPage');
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AcceptAssetInfo} from '../../model/accept-asset-info.d';
import {AssetInfo} from '../../model/asset-detail-info.d';

/**
 * Generated class for the AssetDetailsAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 const listGet:AssetInfo[]=[
     {isCheck: false, codeAsset: '0001', nameAsset: 'nsdfds', xhAsset: 'xdsc', oldValueAsset: '100.00'},
     {isCheck: false, codeAsset: '0002', nameAsset: 'ncds', xhAsset: 'xjt', oldValueAsset: '100.00'},
     {isCheck: false, codeAsset: '0003', nameAsset: 'nffs', xhAsset: 'xxs', oldValueAsset: '100.00'},
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

import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AcceptAssetDetail} from '../../model/accept-asset-detail';

import {BillNumberCode} from '../../providers/TransferFeildName';
import {BillContractCode} from '../../providers/TransferFeildName';
import {BillKeyCode} from '../../providers/TransferFeildName';

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
  billNumber:string;
  contractCode:string;
  keyCode:string;

  itemShow:AcceptAssetDetail;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	          public formBuilder: FormBuilder) {
    this.billNumber = this.navParams.get(BillNumberCode);
    this.contractCode = this.navParams.get(BillContractCode);
    this.keyCode = this.navParams.get(BillKeyCode);
    this.getShowItem();
  }

  getShowItem(){
    this.itemShow = new AcceptAssetDetail();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssetDetailsInfoPage');
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AcceptAssetDetail} from '../../model/accept-asset-detail';
import {ContractService} from '../../services/contractService';
import {ResultBase} from "../../model/result-base";

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
              public contractService:ContractService) {
    this.itemShow = new AcceptAssetDetail();
    this.billNumber = this.navParams.get(BillNumberCode);
    this.contractCode = this.navParams.get(BillContractCode);
    this.keyCode = this.navParams.get(BillKeyCode);
    this.getShowItem();
  }

  getShowItem(){
    this.itemShow = new AcceptAssetDetail();
    /*//是否已验收0为未验收1为验收 0未验收 1已复核 2已验收未复核（如果是验收单据查询，则需要查询未验收的0，如果是转资单据查询，则需要传验收1，如果是合同查询则不用传参）
    this.contractService.getAssetDetailItem(this.contractCode, this.keyCode).subscribe(
      object => {
        let resultBase:ResultBase=object[0] as ResultBase;
        if(resultBase.result=='true'){
          //this.list = object[1] as AcceptAssetDetail[];
        }
      }, () => {
    
      });*/
    this.itemShow = item;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssetDetailsInfoPage');
  }

}

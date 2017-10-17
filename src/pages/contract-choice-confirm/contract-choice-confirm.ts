import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ContractDetail} from '../../model/contract-detail';
import {ContractService} from '../../services/contractService';
import {ResultBase} from "../../model/result-base";

import {BillContractCode} from '../../providers/TransferFeildName';

/**
 * Generated class for the ContractChoiceConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contract-choice-confirm',
  templateUrl: 'contract-choice-confirm.html',
})
export class ContractChoiceConfirmPage {
  contractCode:string;

  list: ContractDetail[];
  itemShow:ContractDetail;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public contractService:ContractService) {
    this.itemShow = new ContractDetail();
  	this.contractCode = this.navParams.get(BillContractCode);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractChoiceConfirmPage');
    this.itemShow = new ContractDetail();
    this.getShowItem();
  }

  getShowItem(){
    this.itemShow = new ContractDetail();
    ////合同流水号 序号
    //contractCode:string, sequence:string
    this.contractService.getContractDetailItem(this.contractCode, '0').subscribe(
      object => {
        let resultBase:ResultBase=object[0] as ResultBase;
        if(resultBase.result=='true'){
          this.list = object[1] as ContractDetail[];
          if(this.list && this.list.length > 0){
              this.itemShow = this.list[0];
          }
        }
      }, () => {
    
      });
    //this.itemShow = item;
  }

  /*ok(){

  }*/

}

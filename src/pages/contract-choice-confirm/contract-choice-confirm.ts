import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ContractDetail} from '../../model/contract-detail';

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
  itemShow:ContractDetail;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.contractCode = this.navParams.get("CodeTranfer");
    this.getShowItem();
  }

  getShowItem(){
    this.itemShow = new ContractDetail();
    this.itemShow.contractCode = this.contractCode;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractChoiceConfirmPage');
  }

  ok(){

  }

}

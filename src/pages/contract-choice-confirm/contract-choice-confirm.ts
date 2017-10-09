import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ContractInfo} from '../../model/contract-info.d';

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
  itemTranfer:ContractInfo;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.itemTranfer = this.navParams.get("itemTranfer");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractChoiceConfirmPage');
  }

  ok(){

  }

}

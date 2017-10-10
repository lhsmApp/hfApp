import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AcceptApplyDetail} from '../../model/accept-apply-detail';

/**
 * Generated class for the AcceptApplyInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accept-apply-info',
  templateUrl: 'accept-apply-info.html',
})
export class AcceptApplyInfoPage {
  title:string;
  oper:string;
  billNumber:string;
  itemShow:AcceptApplyDetail;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = this.navParams.get("title");
    this.oper = this.navParams.get("oper");
  	this.billNumber = this.navParams.get("CodeTranfer");
    this.getShowItem();

    //,'oper':'审批'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcceptApplyInfoPage');
  }

  getShowItem(){
    //this.CodeTranfer
    this.itemShow = new AcceptApplyDetail();
    this.itemShow.billNumber = this.billNumber;
  }
  
  //资产明细
  toAssetDetail(){
    this.navCtrl.push("AssetDetailsListInfoPage", {'CodeTranfer': this.billNumber});
  }

  check(){

  }

}

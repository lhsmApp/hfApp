import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaymentService} from '../../services/paymentService';
import {ResultBase} from "../../model/result-base";
import { BillOfWorkMain} from '../../model/billof-work-main';
import { BillOfWorkDetail} from '../../model/billof-work-detail';
import { AdvancePaymentMain} from '../../model/advance-payment-main';

/**
 * Generated class for the BillGclDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bill-gcl-detail',
  templateUrl: 'bill-gcl-detail.html',
})
export class BillGclDetailPage {

  billOfWorkMain:BillOfWorkMain;
  billOfWorkDetail:BillOfWorkDetail;
  paymentMain:AdvancePaymentMain;
  contractCode:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private paymentService:PaymentService) {
  	this.billOfWorkMain=this.navParams.get("gclItem");
    this.paymentMain=this.navParams.get("paymentItem");
    this.contractCode=this.navParams.get('contractCode');
  }

  ionViewDidLoad() {
    this.initData();
  }

  //初始化数据
  initData(){
    this.paymentService.getGclDetail(this.contractCode,this.billOfWorkMain.sequence)
      .subscribe(object => {
        let resultBase:ResultBase=object[0] as ResultBase;
        if(resultBase.result=='true'){
          console.log(object[1][0]);
          this.billOfWorkDetail = object[1][0] as BillOfWorkDetail;
        }
      }, () => {
        
      });
  }

}

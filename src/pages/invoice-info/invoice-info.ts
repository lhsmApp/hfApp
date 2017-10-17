import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaymentService} from '../../services/paymentService';
import {ResultBase} from "../../model/result-base";
import { InvoiceMain} from '../../model/invoice-main';
import { InvoiceDetail} from '../../model/invoice-detail';
import { AdvancePaymentMain} from '../../model/advance-payment-main';

/**
 * Generated class for the InvoiceInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invoice-info',
  templateUrl: 'invoice-info.html',
})
export class InvoiceInfoPage {
  invoiceMain:InvoiceMain;
  invoiceDetail:InvoiceDetail;
  paymentMain:AdvancePaymentMain;

  constructor(public navCtrl: NavController, public navParams: NavParams,private paymentService:PaymentService) {
    this.invoiceMain=this.navParams.get("gclItem");
    this.paymentMain=this.navParams.get("paymentItem");
  }

  ionViewDidLoad() {
    this.initData();
  }

  //初始化数据
  initData(){
    this.paymentService.getInvoiceDetail(this.paymentMain.payCode,this.invoiceMain.chalanNumber)
      .subscribe(object => {
        let resultBase:ResultBase=object[0] as ResultBase;
        if(resultBase.result=='true'){
          console.log(object[1][0]);
          this.invoiceDetail = object[1][0] as InvoiceDetail;
        }
      }, () => {
        
      });
  }

  //附件
  attachment(){
  	this.navCtrl.push("AttachmentInfoPage");
  }

}

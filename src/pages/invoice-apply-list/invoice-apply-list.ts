import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InvoiceMain} from '../../model/invoice-main';
import { PaymentService} from '../../services/paymentService';
import {ResultBase} from "../../model/result-base";
import { AdvancePaymentMain} from '../../model/advance-payment-main';

/**
 * Generated class for the InvoiceApplyListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

const  INVOICE_LIST: InvoiceMain []= [  
 { chalanNumber: 'FP2017080001', chalanContent: '付款缺失合同明细', chalanMoney: 2000,chalanDate: '2017-09-30'},
 { chalanNumber: 'FPD2017080002', chalanContent: '进度款需要申请' ,chalanMoney: 3000,chalanDate: '2017-09-30'},
 { chalanNumber: 'FPD2017080003', chalanContent: '进度款需要申请' ,chalanMoney: 40000,chalanDate: '2017-09-30'},
 { chalanNumber: 'FPD2017080004', chalanContent: '进度款需要申请' ,chalanMoney: 50000,chalanDate: '2017-09-30'}
 ];

@IonicPage()
@Component({
  selector: 'page-invoice-apply-list',
  templateUrl: 'invoice-apply-list.html',
})
export class InvoiceApplyListPage {

  invoiceList:InvoiceMain[];
  paymentMain:AdvancePaymentMain;

  constructor(public navCtrl: NavController, public navParams: NavParams,private paymentService:PaymentService) {
  	//this.invoiceList=INVOICE_LIST;
    this.paymentMain=this.navParams.get("paymentItem");
  }

  ionViewDidLoad() {
    this.getList();
  }

  //获取发票列表信息
  getList() {
    if(this.paymentMain){
      this.paymentService.getInvoiceMainList(this.paymentMain.payCode,'')
        .subscribe(object => {
          let resultBase:ResultBase=object[0] as ResultBase;
          if(resultBase.result=='true'){
            this.invoiceList = object[1] as InvoiceMain[];
          }
        }, () => {
          
        });
      }
  }


  //打开详情页
  openPage(item: InvoiceMain) {
  	//this.appCtrl.getRootNav().push(HomeDetailPage, { id: id });
  	this.navCtrl.push("InvoiceInfoPage",{"invoiceItem":item,'paymentItem':this.paymentMain});
  }

  //上拉刷新
  doRefresh(refresher) {
  	this.getList();
  	refresher.complete();
  }

  //增加
  add(){
  	this.navCtrl.push("InvoiceApplyPage");
  }

  //编辑
  edit(item: InvoiceMain){
	this.navCtrl.push("InvoiceApplyPage",{"invoiceItem":item,'paymentItem':this.paymentMain});
  }

  //删除
  delete(invoiceCode:string){

  }

}

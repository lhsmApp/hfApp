import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InvoiceMain} from '../../model/invoice-main';
import { PaymentService} from '../../services/paymentService';
import {ResultBase} from "../../model/result-base";
import { AdvancePaymentMain} from '../../model/advance-payment-main';

/**
 * Generated class for the InvoiceListPage page.
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
  selector: 'page-invoice-list',
  templateUrl: 'invoice-list.html',
})
export class InvoiceListPage {

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
    this.paymentService.getInvoiceMainList(this.paymentMain.payCode,'')
      .subscribe(object => {
        let resultBase:ResultBase=object[0] as ResultBase;
        if(resultBase.result=='true'){
          this.invoiceList = object[1] as InvoiceMain[];
        }
      }, () => {
        
      });
  }


  //打开详情页
  openPage(item: InvoiceMain) {
  	//this.appCtrl.getRootNav().push(HomeDetailPage, { id: id });
    this.navCtrl.push("InvoiceInfoPage",{"invoiceItem":item,'paymentItem':this.paymentMain});
  }

  //上拉刷新
  doRefresh(refresher) {
  	/*this.params.page = 1;
  	setTimeout(() => {
  		this.topicService.getTopics(this.params).subscribe(
  			data => {
  				this.advancePaymentList = data.data;
  				refresher.complete();
  			}
  			);
  	}, 2000);*/

  	this.invoiceList = INVOICE_LIST;
  	refresher.complete();
  }

  //下拉加载
  doInfinite(infiniteScroll) {
  	/*this.params.page++;
  	setTimeout(() => {
  		this.topicService.getTopics(this.params).subscribe(
  			data => {
  				if (data) {
  					this.topics.push(...data.data);
  					infiniteScroll.complete();
  				}
  				else {
  					infiniteScroll.enable(false);
  				}
  			}
  			);
  	}, 500);*/
  }

}

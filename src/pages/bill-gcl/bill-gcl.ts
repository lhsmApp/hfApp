import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BillOfWorkMain} from '../../model/billof-work-main';
import { PaymentService} from '../../services/paymentService';
import {ResultBase} from "../../model/result-base";
import { AdvancePaymentMain} from '../../model/advance-payment-main';

/**
 * Generated class for the BillGclPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

const  WORK_LIST: BillOfWorkMain []= [  
 { payCode: 'FKD2017080001', sequence: '001', listNumber: 'QD001',listName: '牙膏'},
 { payCode: 'FKD2017080002', sequence: '002' ,listNumber: 'QD002',listName: '铁锹'},
 { payCode: 'FKD2017080003', sequence: '003' ,listNumber: 'QD003',listName: '自行车'},
 { payCode: 'FKD2017080004', sequence: '004' ,listNumber: 'QD004',listName: '扳手'}
 ];

/**
 * 工程量清单列表
 * Created by jiachao on 2017-09-29.
 */
@IonicPage()
@Component({
  selector: 'page-bill-gcl',
  templateUrl: 'bill-gcl.html',
})
export class BillGclPage {

  workList:BillOfWorkMain[];
  paymentMain:AdvancePaymentMain;
  contractCode:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private paymentService:PaymentService) {
	  //this.workList=WORK_LIST;
    this.paymentMain=this.navParams.get("paymentItem");
    this.contractCode=this.navParams.get('contractCode');
  }

  ionViewDidLoad() {
    this.getList();
  }

  //获取工程量列表信息
  getList() {
    this.paymentService.getGclMainList(this.contractCode,'fk',this.paymentMain.payCode,'0')
      .subscribe(object => {
        let resultBase:ResultBase=object[0] as ResultBase;
        if(resultBase.result=='true'){
          this.workList = object[1] as BillOfWorkMain[];
        }
      }, () => {
        
      });
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

  	this.workList = WORK_LIST;
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

  //查看明细
  openPage(item: BillOfWorkMain){
    //this.navCtrl.push("BillGclDetailPage",{id:id});
    this.navCtrl.push("InvoiceInfoPage",{"gclItem":item,'paymentItem':this.paymentMain,'contractCode':this.contractCode});
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InvoiceMain} from '../../model/invoice-main';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.invoiceList=INVOICE_LIST;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvoiceApplyListPage');
  }

  //获取发票列表信息
  getList() {
   /*this.topicService.getTopics(this.params).subscribe(
   data => this.topics = data.data
   );*/
  }


  //打开详情页
  openPage(id: string) {
  	//this.appCtrl.getRootNav().push(HomeDetailPage, { id: id });
  	this.navCtrl.push("InvoiceInfoPage",{id:id});
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

  //增加
  add(){
  	this.navCtrl.push("InvoiceApplyPage");
  }

  //编辑
  edit(payCode:string){
	this.navCtrl.push("InvoiceApplyPage");
  }

  //删除
  delete(payCode:string){

  }

}

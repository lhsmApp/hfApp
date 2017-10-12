import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BillOfWorkMain} from '../../model/billof-work-main';

/**
 * Generated class for the BillGclSelectPage page.
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
 * 工程量清单列表多选选择
 * Created by jiachao on 2017-09-29.
 */
@IonicPage()
@Component({
  selector: 'page-bill-gcl-select',
  templateUrl: 'bill-gcl-select.html',
})
export class BillGclSelectPage {

  workList:BillOfWorkMain[];
  callback:any;
  payCode:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  this.workList=WORK_LIST;
    this.callback    = this.navParams.get('callback');
    this.payCode=this.navParams.get('payCode');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad BillGclPage');
  }

  //获取工程量列表信息
  getList() {
	  /*this.topicService.getTopics(this.params).subscribe(
	   data => this.topics = data.data
	   );*/
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

  //确定选择
  confirm(){
    this.callback(this.workList).then(()=>{ this.navCtrl.pop() });
  	//this.navCtrl.pop();
  }

  //查看明细
  viewDetail(){
  	this.navCtrl.push("BillGclDetailPage");
  }

}

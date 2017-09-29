import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdvancePaymentMain} from '../../model/advance-payment-main';


/**
 * Generated class for the AdvancePaymentQueryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 const  ADVANTAGE_LIST: AdvancePaymentMain []= [  
 { payCode: 'FKD2017080001', payDigest: '付款缺失合同明细', reviewStatus: '1',requireUser: 'jiachao'},
 { payCode: 'FKD2017080002', payDigest: '进度款需要申请' ,reviewStatus: '2',requireUser: 'zhangsan'},
 { payCode: 'FKD2017080003', payDigest: '进度款需要申请' ,reviewStatus: '3',requireUser: 'zhangsan'},
 { payCode: 'FKD2017080004', payDigest: '进度款需要申请' ,reviewStatus: '4',requireUser: 'zhangsan'}
 ];


 @IonicPage()
 @Component({
 	selector: 'page-advance-payment-query',
 	templateUrl: 'advance-payment-query.html',
 })
 export class AdvancePaymentQueryPage {

 	advancePaymentList:AdvancePaymentMain[];

 	constructor(public navCtrl: NavController, public navParams: NavParams) {
 		this.advancePaymentList=ADVANTAGE_LIST;
 	}

 	//页面初始化
 	ionViewDidLoad() {
 		console.log('ionViewDidLoad AdvancePaymentQueryPage');

 	}

 	//获取付款单列表信息
 	getList() {
    /*this.topicService.getTopics(this.params).subscribe(
      data => this.topics = data.data
      );*/
    }


  //打开详情页
  openPage(id: string) {
  	//this.appCtrl.getRootNav().push(HomeDetailPage, { id: id });
  	this.navCtrl.push("AdvancePaymentInfoPage",{id:id});
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

  	this.advancePaymentList = ADVANTAGE_LIST;
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

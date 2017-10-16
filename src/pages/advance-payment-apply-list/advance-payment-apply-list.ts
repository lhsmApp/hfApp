import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdvancePaymentMain} from '../../model/advance-payment-main';
import { PaymentService} from '../../services/paymentService';
import {ResultBase} from "../../model/result-base";

/**
 * Generated class for the AdvancePaymentApplyListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 const  ADVANTAGE_LIST: AdvancePaymentMain []= [  
 { payCode: 'FKD2017080001', payDigest: '付款缺失合同明细', reviewStatus: '1',requireUser: 'jiachao'},
 { payCode: 'FKD2017080004', payDigest: '进度款需要申请' ,reviewStatus: '4',requireUser: 'zhangsan'}
 ];

@IonicPage()
@Component({
  selector: 'page-advance-payment-apply-list',
  templateUrl: 'advance-payment-apply-list.html',
})
export class AdvancePaymentApplyListPage {

  advancePaymentList:AdvancePaymentMain[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private paymentService:PaymentService) {
  	//this.advancePaymentList=ADVANTAGE_LIST;
  }
  
  //初始化View
  ionViewDidLoad() {
    this.getList();
  }

  //获取付款单列表信息
  getList(){
      this.paymentService.getPaymentMainList()
      .subscribe(object => {
        let resultBase:ResultBase=object[0] as ResultBase;
        if(resultBase.result=='true'){
          this.advancePaymentList = object[1] as AdvancePaymentMain[];
        }
      }, () => {
        
      });
  }


  //打开详情页
  openPage(item: AdvancePaymentMain) {
  	//this.appCtrl.getRootNav().push(HomeDetailPage, { id: id });
  	this.navCtrl.push("AdvancePaymentInfoPage",{"paymentItem":item});
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

  //模糊查询
  getItems(ev: any) {
    // Reset items back to all of the items
    //this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.advancePaymentList = this.advancePaymentList.filter((item) => {
        return (item.payCode.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  //增加
  add(){
  	this.navCtrl.push("AdvancePaymentApplyPage");
  }

  //编辑
  edit(item: AdvancePaymentMain){
	this.navCtrl.push("AdvancePaymentApplyPage",{"paymentItem":item});
  }

  //删除
  delete(payCode:string){

  }

}

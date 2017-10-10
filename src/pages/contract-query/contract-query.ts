import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContractMain} from '../../model/contract-main';

/**
 * Generated class for the ContractQueryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

const  CONTRACT_LIST: ContractMain []= [  
 { contractCode: 'HT2017080001', contractName: '付款缺失合同明细', requireUser: 'zhangsan',checkResult: '1'},
 { contractCode: 'HTD2017080002', contractName: '进度款需要申请' ,requireUser: 'zhangsan',checkResult: '1'},
 { contractCode: 'HTD2017080003', contractName: '进度款需要申请' ,requireUser: 'zhangsan',checkResult: '1'},
 { contractCode: 'HTD2017080004', contractName: '进度款需要申请' ,requireUser: 'zhangsan',checkResult: '1'}
 ];

@IonicPage()
@Component({
  selector: 'page-contract-query',
  templateUrl: 'contract-query.html',
})
export class ContractQueryPage {

  contractList:ContractMain[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.contractList=CONTRACT_LIST;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractQueryPage');
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
  	this.navCtrl.push("ContractInfoPage",{id:id});
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

  	this.contractList = CONTRACT_LIST;
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

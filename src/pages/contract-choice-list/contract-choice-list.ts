import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import {ContractMain} from '../../model/contract-main';

import {Page_ContractChoiceConfirmPage} from '../../providers/TransferFeildName';
import {BillContractCode} from '../../providers/TransferFeildName';

/**
 * Generated class for the ContractChoiceListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

  const listGet:ContractMain[] = [
        { contractCode: 'HT201800001', contractName: '合同名称', requireUser: '申请人', checkResult: '1'},
        { contractCode: 'HT201800002', contractName: '合同名称', requireUser: '申请人', checkResult: '2'},
        { contractCode: 'HT201800003', contractName: '合同名称', requireUser: '申请人', checkResult: '3'},
        { contractCode: 'HT201800004', contractName: '合同名称', requireUser: '申请人', checkResult: '2'},
    ];

@IonicPage()
@Component({
  selector: 'page-contract-choice-list',
  templateUrl: 'contract-choice-list.html',
})
export class ContractChoiceListPage {
    list:ContractMain[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl: ViewController) {
    this.getList();
  }

  //获取列表信息
  getList() {
    /*this.topicService.getTopics(this.params).subscribe(
      data => this.topics = data.data
      );*/
    this.list = listGet;
  }

  //模糊查询
  getItems(ev: any) {
    // Reset items back to all of the items
    //this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.list = this.list.filter((item) => {
        return (item.contractCode.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractChoiceListPage');
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

    this.list = listGet;
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

    toDetail(contractCode: string) {
        this.navCtrl.push(Page_ContractChoiceConfirmPage, {BillContractCode: contractCode});
    }

  //选择合同
  selectContract(selectItem){
    this.viewCtrl.dismiss(selectItem);
    //this.navCtrl.pop();
  }
}

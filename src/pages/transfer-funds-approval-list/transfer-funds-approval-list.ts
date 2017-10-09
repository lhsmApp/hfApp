import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TransferFundsInfo} from '../../model/transfer-funds-info.d';

/**
 * Generated class for the TransferFundsApprovalListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

  const listGet:TransferFundsInfo[] = [
        { codeTransferFunds: 'ZZ0001', applyTimeTransferFunds: '2017-09-01', smTransferFunds: 'XXXXXX', stateTransferFunds: '', typeTransferFunds: '', projPartCodeTransferFunds: '', projPartNameTransferFunds: '', perTimeTransferFunds: '', jeTransferFunds: '', applyTransferFunds: ''},
        { codeTransferFunds: 'ZZ0002', applyTimeTransferFunds: '2017-09-01', smTransferFunds: 'XXXXX', stateTransferFunds: '', typeTransferFunds: '', projPartCodeTransferFunds: '', projPartNameTransferFunds: '', perTimeTransferFunds: '', jeTransferFunds: '', applyTransferFunds: ''},
        { codeTransferFunds: 'ZZ0003', applyTimeTransferFunds: '2017-09-01', smTransferFunds: 'XXXXXX', stateTransferFunds: '', typeTransferFunds: '', projPartCodeTransferFunds: '', projPartNameTransferFunds: '', perTimeTransferFunds: '', jeTransferFunds: '', applyTransferFunds: ''},
        { codeTransferFunds: 'ZZ0004', applyTimeTransferFunds: '2017-09-01', smTransferFunds: 'XXXXXX', stateTransferFunds: '', typeTransferFunds: '', projPartCodeTransferFunds: '', projPartNameTransferFunds: '', perTimeTransferFunds: '', jeTransferFunds: '', applyTransferFunds: ''},
    ];

@IonicPage()
@Component({
  selector: 'page-transfer-funds-approval-list',
  templateUrl: 'transfer-funds-approval-list.html',
})
export class TransferFundsApprovalListPage {
    list:TransferFundsInfo[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
        return (item.codeTransferFunds.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransferFundsApprovalListPage');
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

    toDetail(item: TransferFundsInfo) {
        this.navCtrl.push("TransferFundsApprovalItemPage", {'itemTranfer': item,'oper':'查看'});
    }


}

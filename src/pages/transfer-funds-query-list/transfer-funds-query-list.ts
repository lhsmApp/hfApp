import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TransferFundsInfo} from '../../model/transfer-funds-info.d';

/**
 * Generated class for the TransferFundsQueryListPage page.
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
  selector: 'page-transfer-funds-query-list',
  templateUrl: 'transfer-funds-query-list.html',
})
export class TransferFundsQueryListPage {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransferFundsQueryListPage');
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
        this.navCtrl.push("TransferFundsInfoPage", {'itemTranfer': item,'oper':'查看','title':'转资查询'});
    }

}

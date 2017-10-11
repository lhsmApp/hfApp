import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TransferFundsMain} from '../../model/transfer-funds-main';

import {Page_TransferFundsInfoPage} from '../../providers/TransferFeildName';
import {Oper,Oper_Look} from '../../providers/TransferFeildName';
import {Title} from '../../providers/TransferFeildName';
import {BillNumberCode} from '../../providers/TransferFeildName';

/**
 * Generated class for the TransferFundsQueryListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

  const listGet:TransferFundsMain[] = [
        { translateCode: 'ZZ0001', costTotal: 2017, elementName: 'XXXXXX', reviewStatus: '1'},
        { translateCode: 'ZZ0002', costTotal: 209, elementName: 'XXXXX', reviewStatus: '2'},
        { translateCode: 'ZZ0003', costTotal: 1701, elementName: 'XXXXXX', reviewStatus: '2'},
        { translateCode: 'ZZ0004', costTotal: 7091, elementName: 'XXXXXX', reviewStatus: '3'},
    ];

@IonicPage()
@Component({
  selector: 'page-transfer-funds-query-list',
  templateUrl: 'transfer-funds-query-list.html',
})
export class TransferFundsQueryListPage {
    list:TransferFundsMain[];

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

    toDetail(translateCode: string) {
        this.navCtrl.push(Page_TransferFundsInfoPage, {Oper:Oper_Look,Title:'转资查询',BillNumberCode: translateCode});
    }

}

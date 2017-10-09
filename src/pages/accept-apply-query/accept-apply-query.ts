import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AcceptApplyInfo} from '../../model/accept-apply-info.d';

/**
 * Generated class for the AcceptApplyQueryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

  const listGet:AcceptApplyInfo[] = [
        { codeAcceptApply: 'XMDY0001', stateAcceptApply: '新增', contractCodeAcceptApply: '', contractNameAcceptApply: '名称1', projTypeAcceptApply: '', projPartNameAcceptApply: '', applyDepartAcceptApply: '', applyTimeAcceptApply: '2017-09-01', applyAcceptApply: ''},
        { codeAcceptApply: 'XMDY0002', stateAcceptApply: '退回', contractCodeAcceptApply: '', contractNameAcceptApply: '名称2', projTypeAcceptApply: '', projPartNameAcceptApply: '', applyDepartAcceptApply: '', applyTimeAcceptApply: '2017-09-01', applyAcceptApply: ''},
        { codeAcceptApply: 'XMDY0003', stateAcceptApply: '退回', contractCodeAcceptApply: '', contractNameAcceptApply: '名称3', projTypeAcceptApply: '', projPartNameAcceptApply: '', applyDepartAcceptApply: '', applyTimeAcceptApply: '2017-09-01', applyAcceptApply: ''},
        { codeAcceptApply: 'XMDY0004', stateAcceptApply: '退回', contractCodeAcceptApply: '', contractNameAcceptApply: '名称4', projTypeAcceptApply: '', projPartNameAcceptApply: '', applyDepartAcceptApply: '', applyTimeAcceptApply: '2017-09-01', applyAcceptApply: ''},
    ];

@IonicPage()
@Component({
  selector: 'page-accept-apply-query',
  templateUrl: 'accept-apply-query.html',
})
export class AcceptApplyQueryPage {
    list:AcceptApplyInfo[];

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
    console.log('ionViewDidLoad AcceptApplyQueryPage');
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

    toDetail(item: AcceptApplyInfo) {
        this.navCtrl.push("AcceptApplyInfoPage", {'itemTranfer': item,'oper':'查看'});
    }

}

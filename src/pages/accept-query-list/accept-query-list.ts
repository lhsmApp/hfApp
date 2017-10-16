import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AcceptApplyMain} from '../../model/accept-apply-main';
import {AcceptService} from '../../services/acceptService';
import {ResultBase} from "../../model/result-base";

import {Page_AcceptApplyInfoPage} from '../../providers/TransferFeildName';
import {Oper,Oper_Look} from '../../providers/TransferFeildName';
import {Title} from '../../providers/TransferFeildName';
import {BillNumberCode} from '../../providers/TransferFeildName';

/**
 * Generated class for the AcceptQueryListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

  const listGet:AcceptApplyMain[] = [
        { billNumber: 'XMDY0001', reviewStatus: '0', requireDate: '2017-09-25', requireUser: '申请人'},
        { billNumber: 'XMDY0002', reviewStatus: '99', requireDate: '2017-09-25', requireUser: '申请人'},
        { billNumber: 'XMDY0003', reviewStatus: '1', requireDate: '2017-09-25', requireUser: '申请人'},
        { billNumber: 'XMDY0004', reviewStatus: '2', requireDate: '2017-09-25', requireUser: '申请人'},
    ];

@IonicPage()
@Component({
  selector: 'page-accept-query-list',
  templateUrl: 'accept-query-list.html',
})
export class AcceptQueryListPage {
    list:AcceptApplyMain[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public acceptService:AcceptService) {
    this.getList();
  }

  //获取列表信息
  getList() {
    //1.申请 2.查询 3.审批
    //0新增（新增）、99待审批（待审批）、1 审批成功（已审批）、2审批失败 （退回）
    //this.acceptService.getAcceptMainList('2', '', '', '', '').subscribe(
    //  object => {
    //    let resultBase:ResultBase=object[0] as ResultBase;
    //    if(resultBase.result=='true'){
    //      //this.list = object[1] as AcceptApplyMain[];
    //    }
    //  }, () => {
    //
    //  });
    this.list = listGet;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcceptQueryListPage');
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

    toDetail(billNumber: string) {
        this.navCtrl.push(Page_AcceptApplyInfoPage, {BillNumberCode: billNumber,Oper:Oper_Look,Title:'验收查询'});
    }

}

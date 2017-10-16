import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TransferFundsMain} from '../../model/transfer-funds-main';
import {AcceptService} from '../../services/acceptService';
import {ResultBase} from "../../model/result-base";

import {Page_TransferFundsInfoPage} from '../../providers/TransferFeildName';
import {Oper,Oper_Approval} from '../../providers/TransferFeildName';
import {Title} from '../../providers/TransferFeildName';
import {BillNumberCode} from '../../providers/TransferFeildName';

/**
 * Generated class for the TransferFundsApprovalListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

  const listGet:TransferFundsMain[] = [
        { translateCode: 'ZZ0001', costTotal: 2017, elementName: '合同名称', reviewStatus: '1'},
        { translateCode: 'ZZ0002', costTotal: 209, elementName: '合同名称', reviewStatus: '2'},
        { translateCode: 'ZZ0003', costTotal: 1701, elementName: '合同名称', reviewStatus: '2'},
        { translateCode: 'ZZ0004', costTotal: 7091, elementName: '合同名称', reviewStatus: '3'},
    ];

@IonicPage()
@Component({
  selector: 'page-transfer-funds-approval-list',
  templateUrl: 'transfer-funds-approval-list.html',
})
export class TransferFundsApprovalListPage {
    list:TransferFundsMain[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public translateVoucherService:AcceptService) {
    this.getList();
  }

  //获取列表信息
  getList() {
    //1.申请 2.查询 3.审批
    //" 单据状态" //转资后端字段解释(括号中代表客户端对应字段)、0未提交(新增)、1未审批(待审批) 、2已驳回(退回)、3审批中(待审批)、4已审批(已审批)、若客户端传空的时候则后端查询全部
    this.translateVoucherService.getTranslateVoucherMainList('3','','','','').subscribe(
      object => {
        let resultBase:ResultBase=object[0] as ResultBase;
        if(resultBase.result=='true'){
          //this.list = object[1] as TransferAdjustMain[];
        }
      }, () => {
  
      });
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
        return (item.translateCode.toLowerCase().indexOf(val.toLowerCase()) > -1);
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

    toDetail(translateCode: string) {
        this.navCtrl.push(Page_TransferFundsInfoPage, {Oper:Oper_Approval,Title:'转资审批',BillNumberCode: translateCode});
    }


}

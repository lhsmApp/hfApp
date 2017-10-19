import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TransferFundsMain} from '../../model/transfer-funds-main';
import {AcceptService} from '../../services/acceptService';
import {ResultBase} from "../../model/result-base";

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

  /*const listGet:TransferFundsMain[] = [
        { translateCode: 'ZZ0001', costTotal: 2017, elementName: '合同名称', reviewStatus: '1'},
        { translateCode: 'ZZ0002', costTotal: 209, elementName: '合同名称', reviewStatus: '2'},
        { translateCode: 'ZZ0003', costTotal: 1701, elementName: '合同名称', reviewStatus: '2'},
        { translateCode: 'ZZ0004', costTotal: 7091, elementName: '合同名称', reviewStatus: '3'},
    ];*/

@IonicPage()
@Component({
  selector: 'page-transfer-funds-query-list',
  templateUrl: 'transfer-funds-query-list.html',
})
export class TransferFundsQueryListPage {
  listAll:TransferFundsMain[] = [];
    list:TransferFundsMain[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public translateVoucherService:AcceptService) {
    this.listAll = [];
    this.list = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransferFundsQueryListPage');
    this.listAll = [];
    this.list = [];
    this.getList();
  }

  //获取列表信息
  getList() {
    this.listAll = [];
    this.list = [];
    //1.申请 2.查询 3.审批
    //" 单据状态" //转资后端字段解释(括号中代表客户端对应字段)、0未提交(新增)、1未审批(待审批) 、2已驳回(退回)、3审批中(待审批)、4已审批(已审批)、若客户端传空的时候则后端查询全部
    //type:string, feeFlag:string, translateCode:string, startDate:string, endDate:string, reviewStatus:string
    this.translateVoucherService.getTranslateVoucherMainList('2','','','','','').subscribe(
      object => {
        let resultBase:ResultBase=object[0] as ResultBase;
        if(resultBase.result=='true'){
          this.listAll = object[1] as TransferFundsMain[];
          this.list = object[1] as TransferFundsMain[];
        }
      }, () => {
  
      });/**/
    /*this.listAll = listGet;
    this.list = listGet;*/
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

    this.list = this.listAll;
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

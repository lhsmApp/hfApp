import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ScheduleManageInfo} from '../../model/schedule-manage-info.d'

import {Page_ScheduleApplyInfoPage,Page_ScheduleApplyItemPage} from '../../providers/TransferFeildName';
import {Oper,Oper_Edit,Oper_Add} from '../../providers/TransferFeildName';
import {Title} from '../../providers/TransferFeildName';
import {ItemTranfer} from '../../providers/TransferFeildName';

/**
 * Generated class for the ScheduleApplyListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 const listGet:ScheduleManageInfo[]=[
     {codeScheduleManage: 'XMDY00001', nameScheduleManage: '名称1', typeScheduleManage: '性质1', progressOverviewScheduleManage: '', completePercentageScheduleManage: '', designCompletedDateScheduleManage: '', drawCompletedDateScheduleManage: '', planCompletionDateScheduleManage: '', actualStartDateScheduleManage: '', planStartDateScheduleManage: '', practicalCompletionDateScheduleManage: '', finalAcceptanceDateScheduleManage: '', preTransferDateScheduleManage: '', auditReportDateScheduleManage: '', applyDateScheduleManage: '', applyUserScheduleManage: ''},
     {codeScheduleManage: 'XMDY00002', nameScheduleManage: '名称2', typeScheduleManage: '性质2', progressOverviewScheduleManage: '', completePercentageScheduleManage: '', designCompletedDateScheduleManage: '', drawCompletedDateScheduleManage: '', planCompletionDateScheduleManage: '', actualStartDateScheduleManage: '', planStartDateScheduleManage: '', practicalCompletionDateScheduleManage: '', finalAcceptanceDateScheduleManage: '', preTransferDateScheduleManage: '', auditReportDateScheduleManage: '', applyDateScheduleManage: '', applyUserScheduleManage: ''},
     {codeScheduleManage: 'XMDY00003', nameScheduleManage: '名称3', typeScheduleManage: '性质3', progressOverviewScheduleManage: '', completePercentageScheduleManage: '', designCompletedDateScheduleManage: '', drawCompletedDateScheduleManage: '', planCompletionDateScheduleManage: '', actualStartDateScheduleManage: '', planStartDateScheduleManage: '', practicalCompletionDateScheduleManage: '', finalAcceptanceDateScheduleManage: '', preTransferDateScheduleManage: '', auditReportDateScheduleManage: '', applyDateScheduleManage: '', applyUserScheduleManage: ''},
 ];

@IonicPage()
@Component({
  selector: 'page-schedule-apply-list',
  templateUrl: 'schedule-apply-list.html',
})
export class ScheduleApplyListPage {
	list:ScheduleManageInfo[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
  	this.list = listGet;
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

    toDetail(item: ScheduleManageInfo) {
        this.navCtrl.push(Page_ScheduleApplyInfoPage, {ItemTranfer: item,Oper:Oper_Edit, Title: '进度管理'});
    }

    add(){
        this.navCtrl.push(Page_ScheduleApplyItemPage, {ItemTranfer: [],Oper:Oper_Add});
    }
    edit(item: ScheduleManageInfo){
        this.navCtrl.push(Page_ScheduleApplyItemPage, {ItemTranfer: item,Oper:Oper_Edit});
    }
    delete(item: ScheduleManageInfo){
        
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScheduleApplyListPage');
  }

}

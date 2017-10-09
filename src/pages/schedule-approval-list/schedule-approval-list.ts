import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ScheduleManageInfo} from '../../model/schedule-manage-info.d'

/**
 * Generated class for the ScheduleApprovalListPage page.
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
  selector: 'page-schedule-approval-list',
  templateUrl: 'schedule-approval-list.html',
})
export class ScheduleApprovalListPage {
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
        this.navCtrl.push("ScheduleApplyInfoPage", {'itemTranfer': item,'oper':'审批', 'title': '进度管理'});
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScheduleApprovalListPage');
  }

}

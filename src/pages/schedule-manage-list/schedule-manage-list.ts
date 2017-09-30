import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  } from 'ionic-angular';
import {ScheduleManageInfo} from '../../model/schedule-manage-info.d'

/**
 * Generated class for the ScheduleManageListPage page.
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
  selector: 'page-schedule-manage-list',
  templateUrl: 'schedule-manage-list.html',
})
export class ScheduleManageListPage {
	list:ScheduleManageInfo[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
  	this.list = listGet;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScheduleManageListPage');
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
        this.navCtrl.push("ScheduleManageItemPage", {'itemTranfer': item,'oper':'编辑'});
    }

    add(){
        this.navCtrl.push("ScheduleManageItemPage", {'itemTranfer': [],'oper':'添加'});
    }
    delete(item: ScheduleManageInfo){
        
    }
}

import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ScheduleManageInfo} from '../../model/schedule-manage-info.d';

/**
 * Generated class for the ScheduleApplyInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedule-apply-info',
  templateUrl: 'schedule-apply-info.html',
})
export class ScheduleApplyInfoPage {
  title:string;
    oper:string;
	  itemTranfer:ScheduleManageInfo;
    applyFrom:any;
  itemShow:ScheduleManageInfo;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public formBuilder: FormBuilder) {
    this.title = this.navParams.get("title");
  	this.oper = this.navParams.get("oper");
  	this.itemTranfer = this.navParams.get("itemTranfer");
    this.getShowItem();

    this.applyFrom = this.formBuilder.group({
        progressOverviewScheduleManage: [this.itemTranfer.progressOverviewScheduleManage], 
        completePercentageScheduleManage: [this.itemTranfer.completePercentageScheduleManage], 
        designCompletedDateScheduleManage: [this.itemTranfer.designCompletedDateScheduleManage], 
        drawCompletedDateScheduleManage: [this.itemTranfer.drawCompletedDateScheduleManage], 
        planCompletionDateScheduleManage: [this.itemTranfer.planCompletionDateScheduleManage], 
        actualStartDateScheduleManage: [this.itemTranfer.actualStartDateScheduleManage], 
        planStartDateScheduleManage: [this.itemTranfer.planStartDateScheduleManage], 
        practicalCompletionDateScheduleManage: [this.itemTranfer.practicalCompletionDateScheduleManage], 
        finalAcceptanceDateScheduleManage: [this.itemTranfer.finalAcceptanceDateScheduleManage], 
        preTransferDateScheduleManage: [this.itemTranfer.preTransferDateScheduleManage], 
        auditReportDateScheduleManage: [this.itemTranfer.auditReportDateScheduleManage], 
        applyDateScheduleManage: [this.itemTranfer.applyDateScheduleManage], 
        applyUserScheduleManage: [this.itemTranfer.applyUserScheduleManage]
    });
  }

  getShowItem(){
    //this.itemTranfer.codeAcceptApply
    //this.itemShow
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScheduleApplyInfoPage');
  }

  check(){

  }

}

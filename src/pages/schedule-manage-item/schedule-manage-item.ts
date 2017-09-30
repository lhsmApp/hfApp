import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ScheduleManageInfo} from '../../model/schedule-manage-info.d';

/**
 * Generated class for the ScheduleManageItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedule-manage-item',
  templateUrl: 'schedule-manage-item.html',
})
export class ScheduleManageItemPage {
    oper:string;
	itemTranfer:ScheduleManageInfo;
    applyFrom:any;
  verifyMessages = {
    'progressOverviewScheduleManage': {
      'errorMsg': '',
      'required': '进展概述为必填项',
    },
    'completePercentageScheduleManage': {
      'errorMsg': '',
      'required': '完工百分比为必填项',
    },
    'designCompletedDateScheduleManage': {
      'errorMsg': '',
      'required': '设计完成时间为必填项',
    },
    'drawCompletedDateScheduleManage': {
      'errorMsg': '',
      'required': '施工图完成时间为必填项',
    },
    'planCompletionDateScheduleManage': {
      'errorMsg': '',
      'required': '计划完工时间为必填项',
    },
    'actualStartDateScheduleManage': {
      'errorMsg': '',
      'required': '实际开工时间为必填项',
    },
    'planStartDateScheduleManage': {
      'errorMsg': '',
      'required': '计划开工时间为必填项',
    },
    'practicalCompletionDateScheduleManage': {
      'errorMsg': '',
      'required': '实际完工时间为必填项',
    },
    'finalAcceptanceDateScheduleManage': {
      'errorMsg': '',
      'required': '竣工验收时间为必填项',
    },
    'preTransferDateScheduleManage': {
      'errorMsg': '',
      'required': '预达转资时间为必填项',
    },
    'auditReportDateScheduleManage': {
      'errorMsg': '',
      'required': '审计报告日期为必填项',
    },
    'applyDateScheduleManage': {
      'errorMsg': '',
      'required': '填报日期为必填项',
    },
    'applyUserScheduleManage': {
      'errorMsg': '',
      'required': '填报人为必填项',
    },
  };
 
  constructor(public navCtrl: NavController, 
  	          public navParams: NavParams,
              public formBuilder: FormBuilder) {
  	this.oper = this.navParams.get("oper");
  	this.itemTranfer = this.navParams.get("itemTranfer");
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
    this.applyFrom.valueChanges
      .subscribe(data => {
        const verifyMessages = this.verifyMessages;
        for (const field in verifyMessages) {
          verifyMessages[field].errorMsg = '';
          const control = this.applyFrom.get(field);
          if (control && control.dirty && !control.valid) {
            const messages = verifyMessages[field];
            for (const key in control.errors) {
              messages[key] && (verifyMessages[field].errorMsg += messages[key] + ' ');
            }
          }
        }
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScheduleManageItemPage');
  }

}

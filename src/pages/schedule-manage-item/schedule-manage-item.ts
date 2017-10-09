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
  itemShow:ScheduleManageInfo;
 
  constructor(public navCtrl: NavController, 
  	          public navParams: NavParams,
              public formBuilder: FormBuilder) {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScheduleManageItemPage');
  }

  getShowItem(){
    //this.itemTranfer.codeAcceptApply
    //this.itemShow
  }

  //保存
  save(){
    //Object.assign(this.userInfo, this.userForm.value);
    //this.storage.set('UserInfo', this.userInfo);
    //this.nativeService.showToast('保存成功');
    //this.viewCtrl.dismiss(this.userInfo);
  }

}

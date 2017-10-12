import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ScheduleManageInfo} from '../../model/schedule-manage-info.d';

import {Oper,Oper_Edit,Oper_Add} from '../../providers/TransferFeildName';
import {ItemTranfer} from '../../providers/TransferFeildName';

/**
 * Generated class for the ScheduleApplyItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedule-apply-item',
  templateUrl: 'schedule-apply-item.html',
})
export class ScheduleApplyItemPage {
    oper:string;
	  itemTranfer:ScheduleManageInfo;
    applyFrom:any;
  itemShow:ScheduleManageInfo;
 
  constructor(public navCtrl: NavController, 
  	          public navParams: NavParams,
              public formBuilder: FormBuilder) {
  	this.oper = this.navParams.get(Oper);
  	this.itemTranfer = this.navParams.get(ItemTranfer);
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

  //保存
  save(){
    //Object.assign(this.userInfo, this.userForm.value);
    //this.storage.set('UserInfo', this.userInfo);
    //this.nativeService.showToast('保存成功');
    //this.viewCtrl.dismiss(this.userInfo);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScheduleApplyItemPage');
  }

}

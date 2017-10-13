import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {ScheduleManageInfo} from '../../model/schedule-manage-info.d';

import {Oper,Oper_Look,Oper_Edit,Oper_Add,Oper_Approval} from '../../providers/TransferFeildName';
import {Title} from '../../providers/TransferFeildName';
import {ItemTranfer} from '../../providers/TransferFeildName';

import {Page_ChoiceApproversPage} from '../../providers/TransferFeildName';

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
  isShowCheck:boolean;
  isShowSend:boolean;
  title:string;
    oper:string;
	  itemTranfer:ScheduleManageInfo;
  itemShow:ScheduleManageInfo;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public formBuilder: FormBuilder,
              public alertCtrl: AlertController) {
    this.isShowCheck = false;
    this.isShowSend = false;
    this.title = this.navParams.get(Title);
  	this.oper = this.navParams.get(Oper);
    if(this.oper === Oper_Approval){
        this.isShowCheck = true;
    }
    if(this.oper === Oper_Edit || this.oper === Oper_Add){
        this.isShowSend = true;
    }
  	this.itemShow = this.navParams.get(ItemTranfer);
    this.getShowItem();

    //,'oper':'审批'
  }

  getShowItem(){
    //this.itemShow = new ScheduleManageInfo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScheduleApplyInfoPage');
  }

  check(){
    let prompt = this.alertCtrl.create({
      title: '审批',
      message: "请输入审批意见",
      inputs: [
        {
          name: 'title',
          placeholder: '请输入审批意见'
        },
      ],
      
    });

    prompt.addButton({
        text: '取消',
        cssClass:'alertButtionCancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      });
    prompt.addButton({
        text: '不通过',
        cssClass:'alertButtionNo',
        handler: data => {
          console.log(data);
        }
      });
    prompt.addButton({
      text: '通过',
      cssClass:'alertButtionYes',
      handler: data => {
      }
    });
    prompt.present();
  }

  send(){
      this.navCtrl.push(Page_ChoiceApproversPage, {BillNumberCode: this.itemShow.codeScheduleManage});
  }

}

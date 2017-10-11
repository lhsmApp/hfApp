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
  itemShow:ScheduleManageInfo;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public formBuilder: FormBuilder) {
    this.title = this.navParams.get("title");
  	this.oper = this.navParams.get("oper");
  	this.itemShow = this.navParams.get("itemTranfer");
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

  }

}

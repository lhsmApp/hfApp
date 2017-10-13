import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import {ReviewProcessMain} from '../../model/review-process-main';
import {ReviewProcessDetail} from '../../model/review-process-detail';

import {BillNumberCode} from '../../providers/TransferFeildName';

/**
 * Generated class for the ChoiceApproversPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 const detailList1: ReviewProcessDetail[]=[
     {isCheck:false, userCode:'审批人编码1',username:'审批人2'},
 ]
 const detailList2: ReviewProcessDetail[]=[
     {isCheck:false, userCode:'审批人编码12',username:'审批人12'},
     {isCheck:false, userCode:'审批人编码5',username:'审批人7'},
 ]
 const mainList: ReviewProcessMain[]=[
     {reviewType:'', billNumber:'', number:0, sequence:1,dutyId:'岗位编号1',dutyName:'岗位名称1',dutySpecial:'', current:9, userId:'', userName:'', result:0, date:'', option:'', vetoType:0, sendDate:'', designPosition:'', departCode:'', reviewPersons:'', reveiwPersonlist:detailList1},
     {reviewType:'', billNumber:'', number:0, sequence:2,dutyId:'岗位编号2',dutyName:'岗位名称2',dutySpecial:'', current:9, userId:'', userName:'', result:0, date:'', option:'', vetoType:0, sendDate:'', designPosition:'', departCode:'', reviewPersons:'', reveiwPersonlist:detailList2},
 ]

@IonicPage()
@Component({
  selector: 'page-choice-approvers',
  templateUrl: 'choice-approvers.html',
})
export class ChoiceApproversPage {
  billNumber:string;
  list: ReviewProcessMain[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private viewCtrl: ViewController) {
  	this.billNumber = this.navParams.get(BillNumberCode);

  	this.list = mainList;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChoiceApproversPage');
  }

  ok(){
    if(this.list!=null && this.list.length>0){
        //this.viewCtrl.dismiss(this.list);
        //this.viewCtrl.pop();
        this.navCtrl.pop();
    }
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import {ReviewProcessMain} from '../../model/review-process-main';
import {ReviewProcessDetail} from '../../model/review-process-detail';
import {ApprovalService} from '../../services/approvalService';
import {BillNumberCode} from '../../providers/TransferFeildName';
import {ResultBase} from "../../model/result-base";


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
     {reviewType:'', billNumber:'', number:0, sequence:1,dutyId:'岗位编号1',dutyName:'项目经理',dutySpecial:'', current:9, userId:'', userName:'', result:0, date:'', option:'', vetoType:0, sendDate:'', designPosition:'', departCode:'', reviewPersons:'', reveiwPersonlist:detailList1},
     {reviewType:'', billNumber:'', number:0, sequence:2,dutyId:'岗位编号2',dutyName:'总经理',dutySpecial:'', current:9, userId:'', userName:'', result:0, date:'', option:'', vetoType:0, sendDate:'', designPosition:'', departCode:'', reviewPersons:'', reveiwPersonlist:detailList2},
 ]

@IonicPage()
@Component({
  selector: 'page-choice-approvers',
  templateUrl: 'choice-approvers.html',
})
export class ChoiceApproversPage {
  billNumber:string;
  list: ReviewProcessMain[];
  reviewType:string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private viewCtrl: ViewController,
              private approvalService:ApprovalService) {
  	this.billNumber = this.navParams.get(BillNumberCode);
    this.reviewType=this.navParams.get('reviewType');
      console.log('reviewType：' + this.reviewType);
  	//this.list = mainList;
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ChoiceApproversPage');
    this.getList();
  }

  //获取付款单列表信息
  getList(){
      //console.log(ReviewType.REVIEW_TYPE_BASIC_PAYMENT);
      console.log('reviewType：' + this.reviewType);
      this.approvalService.queryUserReviewPay(this.billNumber,this.reviewType)
      .subscribe(object => {
        let resultBase:ResultBase=object[0] as ResultBase;
        if(resultBase.result=='true'){
          this.list = object[1] as ReviewProcessMain[];
        }
      }, () => {
        
      });
  }

  ok(){
    if(this.list!=null && this.list.length>0){
        //this.viewCtrl.dismiss(this.list);
        //this.viewCtrl.pop();
        this.navCtrl.pop();
    }
  }
}

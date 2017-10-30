import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,AlertController } from 'ionic-angular';
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
 /*const detailList1: ReviewProcessDetail[]=[
     {isCheck:false, userCode:'审批人编码1',username:'审批人2'},
 ]
 const detailList2: ReviewProcessDetail[]=[
     {isCheck:false, userCode:'审批人编码12',username:'审批人12'},
     {isCheck:false, userCode:'审批人编码5',username:'审批人7'},
 ]
 const mainList: ReviewProcessMain[]=[
     {reviewType:'', billNumber:'', number:0, sequence:1,dutyId:'岗位编号1',dutyName:'项目经理',dutySpecial:'', current:9, userId:'', userName:'', result:0, date:'', option:'', vetoType:0, sendDate:'', designPosition:'', departCode:'', reviewPersons:'', reveiwPersonlist:detailList1},
     {reviewType:'', billNumber:'', number:0, sequence:2,dutyId:'岗位编号2',dutyName:'总经理',dutySpecial:'', current:9, userId:'', userName:'', result:0, date:'', option:'', vetoType:0, sendDate:'', designPosition:'', departCode:'', reviewPersons:'', reveiwPersonlist:detailList2},
 ]*/

@IonicPage()
@Component({
  selector: 'page-choice-approvers',
  templateUrl: 'choice-approvers.html',
})
export class ChoiceApproversPage {
  billNumber:string;
  list: ReviewProcessMain[];
  reviewType:string;
  callback :any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              private viewCtrl: ViewController,
              private approvalService:ApprovalService) {
  	this.billNumber = this.navParams.get(BillNumberCode);
    this.reviewType=this.navParams.get('reviewType');
    this.callback    = this.navParams.get('callback');
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
          if(this.list){
              for(let item of this.list){
                //item
              }
          }
        }
      }, () => {
        
      });
  }

  ok(){
    if(this.list!=null && this.list.length>0){
      console.log(this.list);
      let data: ReviewProcessMain[];
      for(let item of this.list){
          let detailListAdd:ReviewProcessDetail[];
          if(item.reveiwPersonlist){
              for(let detail of item.reveiwPersonlist){
                  if(detail.isCheck){
                      detailListAdd.push(detail);
                  }
              }
          }
          if(detailListAdd!=null && detailListAdd.length>0){
              let baseAdd = item;
              baseAdd.reveiwPersonlist = detailListAdd;
              data.push(baseAdd);
          }
      }
      if(!(data!=null && data.length>0)){
        let alert = this.alertCtrl.create({
          title: '提示!',
          subTitle: "请勾选记录！",
          buttons: ['确定']
        });
        alert.present();
        return;
      }
      console.log("list:");
      console.log(this.list);
      console.log("data:");
      console.log(data);
      //billNumber:string,reviewType:string,data:object[]
      this.approvalService.sendReviewPay(this.billNumber,this.reviewType,data)
      .subscribe(object => {
        let resultBase:ResultBase=object[0] as ResultBase;
        if(resultBase.result=='true'){
            this.callback(true).then(()=>{ this.navCtrl.pop() });
        } else {
            let alert = this.alertCtrl.create({
              title: '提示!',
              subTitle: resultBase.message,
              buttons: ['确定']
            });
            alert.present();
        }
      }, () => {
        
      });
    }
  }
}

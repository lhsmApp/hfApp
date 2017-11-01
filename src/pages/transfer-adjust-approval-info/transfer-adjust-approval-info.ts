import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { IonicPage, NavController, NavParams,AlertController,ToastController } from 'ionic-angular';
import {TransferFundsMain} from '../../model/transfer-funds-main';
import {TransferFundsDetail} from '../../model/transfer-funds-detail';
import {AcceptService} from '../../services/acceptService';
import {ApprovalService} from '../../services/approvalService';
import {ResultBase} from "../../model/result-base";
import {ReviewType} from '../../enums/review-type';
import {DictUtil} from '../../providers/dict-util';
import {TransferFundsReviewStatus} from '../../enums/enums';
import {TransferFundsType} from '../../enums/enums';

import {Oper,Oper_Look,Oper_Approval} from '../../providers/TransferFeildName';
import {Title} from '../../providers/TransferFeildName';
import {ItemTranfer} from '../../providers/TransferFeildName';

import {Page_TransferAdjustAssetListPage} from '../../providers/TransferFeildName';
//import {Oper,Oper_Approval} from '../../providers/TransferFeildName';
//import {Title} from '../../providers/TransferFeildName';
//import {ItemTranfer} from '../../providers/TransferFeildName';

/**
 * Generated class for the TransferAdjustApprovalInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 /*const item:TransferFundsDetail = {
        reviewStatus:'单据状态',
              translateCode:'单据编号',                
        translateType:'转资类型',//(1、固定资产 2、无形资产3、长期待摊费用4、长期股权投资)                
        elementCode:'项目单元编码',            
        elementName:'项目单元名称',            
              beforehandDate:'达预转资时间',            
              translateContent:'转资说明',                
        costTotal: 47,//转资金额',,传double型                
        requireUser:'申请人',                  
        requireDate:'申请日期',                
        checkOpinion:'审批意见',         
 };*/

@IonicPage()
@Component({
  selector: 'page-transfer-adjust-approval-info',
  templateUrl: 'transfer-adjust-approval-info.html',
})
export class TransferAdjustApprovalInfoPage {
  isShow:boolean;
  title:string;
  oper:string;
  itemTranfer:TransferFundsMain;

  list: TransferFundsDetail[];
  itemShow:TransferFundsDetail;
  callback :any;
  isBackRefrash=false;
  hasApprovalProgress=false;
  approvalState:string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              private dictUtil:DictUtil,
              public alertCtrl: AlertController,
              public toastCtrl:ToastController,
              public acceptService:AcceptService,
              public approvalService:ApprovalService) {
    this.itemShow = new TransferFundsDetail();
    this.isShow = false;
    this.title = this.navParams.get(Title);
  	this.oper = this.navParams.get(Oper);
    if(this.oper === Oper_Approval){
        this.isShow = true;
    }
  	this.itemTranfer = this.navParams.get(ItemTranfer);
    this.callback    = this.navParams.get('callback');
    this.isBackRefrash=false;
    this.approvalState=this.navParams.get('approvalState');
    if(this.approvalState=='2'||this.approvalState=='3'||this.approvalState=='4'){
      this.hasApprovalProgress=true;
    }else{
      this.hasApprovalProgress=false;
    }
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad TransferAdjustApprovalInfoPage');
    this.isBackRefrash=false;
    this.itemShow = new TransferFundsDetail();
    this.getShowItem();
  }

  getShowItem(){
    this.itemShow = new TransferFundsDetail();
    this.acceptService.getTranslateVoucherDetailItem(this.itemTranfer.translateCode).subscribe(
      object => {
        let resultBase:ResultBase=object[0] as ResultBase;
        if(resultBase.result=='true'){
          this.list = object[1] as TransferFundsDetail[];
          if(this.list && this.list.length > 0){
              this.itemShow = this.list[0];   
              //单据状态"
              this.itemShow.reviewStatusName = this.dictUtil.getEnumsName(TransferFundsReviewStatus,this.itemShow.reviewStatus);
              //转资类型"(1、固定资产 2、无形资产3、长期待摊费用4、长期股权投资)
              this.itemShow.translateTypeName = this.dictUtil.getEnumsName(TransferFundsType,this.itemShow.translateType);
          }
        } else {
            let alert = this.alertCtrl.create({
              title: '提示!',
              subTitle: resultBase.message,
              buttons: ['确定']
            });
            alert.present();
        }
      }, () => {
    
      });/**/
    /*this.itemShow = item;*/
  }
  
  //资产明细
  toAssetDetail(){
        this.navCtrl.push(Page_TransferAdjustAssetListPage, {ItemTranfer: this.itemTranfer, Oper:Oper_Approval,Title:'转资调整审批'});
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
        //billNumber:string,reviewType:string,vetoReason:string
        this.approvalService.vetoReview(this.itemShow.translateCode, ReviewType[ReviewType.REVIEW_TYPE_BASIC_TRANSLATE_ADJUST], data)
          .subscribe(object => {
            let resultBase:ResultBase=object[0] as ResultBase;
            if(resultBase.result=='true'){
              this.isBackRefrash=true;
              let toast = this.toastCtrl.create({
                message: resultBase.message,
                duration: 3000
              });
              toast.present();
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
      });
    prompt.addButton({
      text: '通过',
      cssClass:'alertButtionYes',
      handler: data => {
        //billNumber:string,reviewType:string,vetoReason:string
        this.approvalService.auditReview(this.itemShow.translateCode, ReviewType[ReviewType.REVIEW_TYPE_BASIC_TRANSLATE_ADJUST], data)
          .subscribe(object => {
            let resultBase:ResultBase=object[0] as ResultBase;
            if(resultBase.result=='true'){
              this.isBackRefrash=true;
              let toast = this.toastCtrl.create({
                message: resultBase.message,
                duration: 3000
              });
              toast.present();
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
    });
    prompt.present();
  }

  goBack(){
    console.log('back');
    if(this.isBackRefrash){
      this.callback(this.isBackRefrash).then(()=>{ this.navCtrl.pop() });
    }else{
      this.navCtrl.pop();
    }
  }

  //审批进度
  approvalProgress(){
    this.navCtrl.push('ApprovalProgressPage',{BillNumberCode:this.itemShow.translateCode,'reviewType':ReviewType[ReviewType.REVIEW_TYPE_BASIC_TRANSLATE_ADJUST]});
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,ModalController } from 'ionic-angular';
import {Storage} from "@ionic/storage";

import {FormBuilder, Validators} from '@angular/forms';
import { AdvancePaymentDetail} from '../../model/advance-payment-detail';
import { AdvancePaymentMain} from '../../model/advance-payment-main';
import { PAYMENT_CATEGORY} from '../../enums/enums';
import {Page_ContractChoiceListPage} from '../../providers/TransferFeildName';
import { PaymentService} from '../../services/paymentService';
import {ResultBase} from "../../model/result-base";
import {DicBase} from "../../model/dic-base";

import {IN_DEPART} from "../../enums/storage-type";
import {OUT_DEPART} from "../../enums/storage-type";
import {DicInDepart} from '../../model/dic-in-depart';
import {DicOutDepart} from '../../model/dic-out-depart';

/**
 * Generated class for the AdvancePaymentApplyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 /*const listPayDept: DicBase[]=[
      {code:'1',name:'单位1'},
      {code:'2',name:'单位2'},
      {code:'3',name:'单位3'},
      {code:'4',name:'单位4'},
  ]

  const listIntercourse: DicBase[]=[
      {code:'1',name:'单位1'},
      {code:'2',name:'单位2'},
      {code:'3',name:'单位3'},
      {code:'4',name:'单位4'},
  ]*/

@IonicPage()
@Component({
  selector: 'page-advance-payment-apply',
  templateUrl: 'advance-payment-apply.html',
})
export class AdvancePaymentApplyPage {
  paymentForm: any;
  paymentDetail:AdvancePaymentDetail;
  paymentMain:AdvancePaymentMain;
  paymentCategory=PAYMENT_CATEGORY;
  listPayDept : DicInDepart;
  listIntercourse : DicOutDepart;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private viewCtrl: ViewController,
              private storage: Storage,
              private formBuilder: FormBuilder,private modalCtrl: ModalController,private paymentService:PaymentService) {
  	/*this.paymentForm = this.formBuilder.group({
      username: [, [Validators.required, Validators.pattern('[(\u4e00-\u9fa5)0-9a-zA-Z\_\s@]+')]],
      verificationCode: [, [Validators.required, Validators.minLength(6), Validators.pattern('1[0-9]{6}')]],
      phone: [, [Validators.required, Validators.pattern('1[0-9]{10}')]],
      password: [, [Validators.required]]
    })*/

    this.paymentMain=this.navParams.get("paymentItem");
    this.paymentForm = this.formBuilder.group({
      payCode: '',//付款单号，保存后自动生成
      clauseType: [, [Validators.required]],//款项类别，选择
      contractCode: [, [Validators.required]],//合同流水号，选择
      contractName: [, [Validators.required]],//合同名称，自动带出
      elementType: [, [Validators.required]],//项目性质，自动带出
      elementName: [, [Validators.required]],//项目单元名称，自动带出
      planType: [, [Validators.required]],//项目核算类别，自动带出
      payDigest: [, [Validators.required]],//付款原因，手工录入
      costMoney: [, [Validators.required]],//合同标的（审计）额，自动带出
      taxMoney: [, [Validators.required]],//已付款额度，自动带出
      payMoney: [, [Validators.required]],//本次申请金额，手工录入
      paymentCode: [, [Validators.required]],//付款单位编号，选择
      //payDepart: [, [Validators.required]],//付款单位名称，选择
      intercourseCode: [, [Validators.required]],//往来单位编号(收款单位)，选择
      //intercourseName: [, [Validators.required]],//往来单位名称(收款单位)，选择
      requireDate: [, [Validators.required]],//申请时间，自动填写当前时间
      requireUser: [, [Validators.required]]//申请人，自动填写当前用户
    });


  }

  //初始化数据
  initData(){
    if(this.paymentMain){
      this.paymentService.getPaymentDetail(this.paymentMain.payCode)
        .subscribe(object => {
          let resultBase:ResultBase=object[0] as ResultBase;
          if(resultBase.result=='true'){
            console.log(object[1][0]);
            this.paymentDetail = object[1][0] as AdvancePaymentDetail;
            this.paymentForm.patchValue({
              payCode:this.paymentDetail.payCode,
              clauseType:this.paymentDetail.clauseType,
              contractCode:this.paymentDetail.contractCode,
              contractName:this.paymentDetail.contractName,
              elementType:this.paymentDetail.elementType,
              elementName:this.paymentDetail.elementName,
              planType:this.paymentDetail.planType,
              payDigest:this.paymentDetail.payDigest,
              costMoney:this.paymentDetail.costMoney,
              taxMoney:this.paymentDetail.taxMoney,
              payMoney:this.paymentDetail.payMoney,
              paymentCode:this.paymentDetail.paymentCode,
              intercourseCode:this.paymentDetail.intercourseCode,
              requireDate:this.paymentDetail.requireDate,
              requireUser:this.paymentDetail.requireUser
            });
          }
        }, () => {
          
        });
      }
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad AdvancePaymentApplyPage');
    this.storage.get(IN_DEPART).then((inDepart: DicInDepart) => {
      this.listPayDept=inDepart;
    });
    this.storage.get(OUT_DEPART).then((outDepart: DicOutDepart) => {
      this.listIntercourse=outDepart;
    });

    this.initData();
  }

  //选择合同
  choiceContract(){
    console.log(this.paymentForm.get('paymentCode'));
    //this.navCtrl.push(Page_ContractChoiceListPage);
    let modal = this.modalCtrl.create(Page_ContractChoiceListPage);
    modal.present();
    modal.onDidDismiss(contractInfo => {
      console.log(contractInfo);
      if(contractInfo){
        console.log(contractInfo);
        this.paymentForm.patchValue({

          contractCode:contractInfo.contractCode,
          contractName:contractInfo.contractName,
          elementType:contractInfo.elementCode,
          elementName:contractInfo.elementName,
          planType:contractInfo.compactType,
          costMoney:contractInfo.contractMoney
        });
      }
    });
  }

  //保存
  save(){

  }

  /*getData = function(data){
    return new Promise((resolve, reject) => {
      for (let order of orders) {
        this.data = data;
      }
      console.log(data);
      resolve();
    });
  };*/

  //回调获取选择的工程量清单
  getData = (data) =>
  {
    return new Promise((resolve, reject) => {
      console.log(data);
      resolve();
    });
  };

  //发票
  invoice(paymentDetail:AdvancePaymentDetail){
  	//let payCode=paymentDetail.payCode;
  	//let contractCode=paymentDetail.contractCode;
    this.navCtrl.push("InvoiceApplyListPage",{'paymentItem':this.paymentMain});
  }

  

  //工程量清单
  billOfGcl(paymentDetail:AdvancePaymentDetail){
	  //let payCode=paymentDetail.payCode;
  	//let contractCode=paymentDetail.contractCode;
    this.navCtrl.push("BillGclSelectPage",{'paymentItem':this.paymentMain,callback:this.getData,'contractCode':this.paymentDetail.contractCode});
  }

  //送审
  send(){
    this.navCtrl.push('ChoiceApproversPage');
  }
}

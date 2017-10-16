import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,ModalController } from 'ionic-angular';
import {FormBuilder, Validators} from '@angular/forms';
import { AdvancePaymentDetail} from '../../model/advance-payment-detail';
import { PAYMENT_CATEGORY} from '../../enums/enums';
import {Page_ContractChoiceListPage} from '../../providers/TransferFeildName';

/**
 * Generated class for the AdvancePaymentApplyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-advance-payment-apply',
  templateUrl: 'advance-payment-apply.html',
})
export class AdvancePaymentApplyPage {
  paymentForm: any;
  paymentDetail:AdvancePaymentDetail;
  paymentCategory=PAYMENT_CATEGORY;
  
  

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private viewCtrl: ViewController,
              private formBuilder: FormBuilder,private modalCtrl: ModalController) {
  	/*this.paymentForm = this.formBuilder.group({
      username: [, [Validators.required, Validators.pattern('[(\u4e00-\u9fa5)0-9a-zA-Z\_\s@]+')]],
      verificationCode: [, [Validators.required, Validators.minLength(6), Validators.pattern('1[0-9]{6}')]],
      phone: [, [Validators.required, Validators.pattern('1[0-9]{10}')]],
      password: [, [Validators.required]]
    })*/

    this.paymentForm = this.formBuilder.group({
      payCode: [,[]],//付款单号，保存后自动生成
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
    let paymentInfo=new AdvancePaymentDetail();
    this.paymentForm.patchValue({
          payCode:paymentInfo.payCode,
          clauseType:paymentInfo.clauseType,
          contractCode:paymentInfo.contractCode,
          contractName:paymentInfo.contractName,
          elementType:paymentInfo.elementType,
          elementName:paymentInfo.elementName,
          planType:paymentInfo.planType,
          payDigest:paymentInfo.payDigest,
          costMoney:paymentInfo.costMoney,
          taxMoney:paymentInfo.taxMoney,
          payMoney:paymentInfo.payMoney,
          paymentCode:paymentInfo.paymentCode,
          intercourseCode:paymentInfo.intercourseCode,
          requireDate:paymentInfo.requireDate,
          requireUser:paymentInfo.requireUser
        });

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad AdvancePaymentApplyPage');
    this.initData();
  }

  //选择合同
  choiceContract(){
    //this.navCtrl.push(Page_ContractChoiceListPage);
    let modal = this.modalCtrl.create(Page_ContractChoiceListPage);
    modal.present();
    modal.onDidDismiss(contractInfo => {
      console.log(contractInfo);
      if(contractInfo){
        this.paymentForm.patchValue({
          contractCode:contractInfo.contractCode,
          contractName:contractInfo.contractName,
          /*elementType:contractInfo.elementType,
          elementName:contractInfo.elementName*/
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
    this.navCtrl.push("InvoiceApplyListPage");
  }

  

  //工程量清单
  billOfGcl(paymentDetail:AdvancePaymentDetail){
	  //let payCode=paymentDetail.payCode;
  	//let contractCode=paymentDetail.contractCode;
    this.navCtrl.push("BillGclSelectPage",{'payCode':'001',callback:this.getData});
  }

  //送审
  send(){
    this.navCtrl.push('ChoiceApproversPage');
  }
}

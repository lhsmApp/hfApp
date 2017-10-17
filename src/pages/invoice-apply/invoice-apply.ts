import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, Validators} from '@angular/forms';
import { InvoiceDetail} from '../../model/invoice-detail';
import { PaymentService} from '../../services/paymentService';
import {ResultBase} from "../../model/result-base";
import { InvoiceMain} from '../../model/invoice-main';
import { AdvancePaymentMain} from '../../model/advance-payment-main';
import { INVOICE_TYPE} from '../../enums/enums';

/**
 * Generated class for the InvoiceApplyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invoice-apply',
  templateUrl: 'invoice-apply.html',
})
export class InvoiceApplyPage {
  invoiceType=INVOICE_TYPE;
  invoiceForm: any;
  invoiceDetail:InvoiceDetail;
  invoiceMain:InvoiceMain;
  paymentMain:AdvancePaymentMain;

  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder: FormBuilder,private paymentService:PaymentService) {
    this.invoiceMain=this.navParams.get("invoiceItem");  	
    this.paymentMain=this.navParams.get("paymentItem");
    this.invoiceForm = this.formBuilder.group({
      chalanNumber: [,[]],//发票编号，手工录入
      sequence: [, [Validators.required]],//序号，自动生成，判断是否为空，空为增加，有则修改
      chalanType: [, [Validators.required]],//发票类型，选择
      price: [, [Validators.required]],//发票单价，手工录入
      singleAmount: [, [Validators.required]],//发票数量，手工录入
      sl: [, [Validators.required]],//税率，手工录入
      chalanMoney : [, [Validators.required]],//发票金额，手工录入
      noTaxMoney: [, [Validators.required]],//不含税金额，手工录入
      deductibleInputString : [, [Validators.required]],//可抵扣进项税，手工录入
      chalanDate : [, [Validators.required]],//发票日期，手工录入
      chalanContent: [, [Validators.required]],//发票内容，手工录入
      taxNumber: [, []]//完税凭证号，手工录入
    })
  }

  ionViewDidLoad() {
    this.initData();
  }

  //初始化数据
  initData(){
    if(this.paymentMain){
      this.paymentService.getInvoiceDetail(this.paymentMain.payCode,this.invoiceMain.chalanNumber)
        .subscribe(object => {
          let resultBase:ResultBase=object[0] as ResultBase;
          if(resultBase.result=='true'){
            console.log(object[1][0]);
            this.invoiceDetail = object[1][0] as InvoiceDetail;
            this.invoiceForm.patchValue({
            chalanNumber:this.invoiceDetail.chalanNumber,
            sequence:this.invoiceDetail.sequence,
            chalanType:this.invoiceDetail.chalanType,
            price:this.invoiceDetail.price,
            singleAmount:this.invoiceDetail.singleAmount,
            sl:this.invoiceDetail.sl,
            chalanMoney:this.invoiceDetail.chalanMoney,
            noTaxMoney:this.invoiceDetail.noTaxMoney,
            deductibleInputString:this.invoiceDetail.deductibleInputString,
            chalanDate:this.invoiceDetail.chalanDate,
            chalanContent:this.invoiceDetail.chalanContent,
            taxNumber:this.invoiceDetail.taxNumber
            });
          }
        }, () => {
          
        });
      }
  }

  //附件列表
  attachment(item){
    this.navCtrl.push("AttachmentPage");
  }
}

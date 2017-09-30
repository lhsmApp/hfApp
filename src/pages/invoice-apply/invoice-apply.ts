import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, Validators} from '@angular/forms';
import { InvoiceDetail} from '../../model/invoice-detail';

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
  invoiceForm: any;
  invoiceDetail:InvoiceDetail;

  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder: FormBuilder) {
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
    console.log('ionViewDidLoad InvoiceApplyPage');
  }

}

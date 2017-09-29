import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'query.html'
})
export class QueryPage {

  constructor(public navCtrl: NavController) {

	  
  }

  //项目单元查询
  queryProjectUnit() {
    this.navCtrl.push("AdvancePaymentPage");
  }

  //合同信息查询
  queryContract() {
    this.navCtrl.push('TestPage');
  }

  //付款信息查询
  queryPayment() {
    this.navCtrl.push('TestPage');
  }

  //验收信息查询
  queryYs() {
    this.navCtrl.push('TestPage');
  }

  //转资信息查询
  queryZz() {
    this.navCtrl.push('TestPage');
  }
}

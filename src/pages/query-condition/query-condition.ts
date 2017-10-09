import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Utils } from '../../providers/Utils';


/**
 * Generated class for the QueryConditionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-query-condition',
  templateUrl: 'query-condition.html',
})
export class QueryConditionPage {
  oper:string;
  startDate:string;
  endDate:string;
  relationship:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.oper = this.navParams.get("oper");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QueryConditionPage');
    this.relationship="1";
    this.startDate=Utils.dateFormat(new Date());
    this.endDate=(new Date()).toISOString();
    console.log(this.endDate);
  }

  openQuery(){
    if (this.oper === 'collects') {
        //合同信息查询
    }
    else if (this.oper === 'messages') {
        //付款信息查询
        this.navCtrl.push("AdvancePaymentQueryPage");
    }
    else if (this.oper === 'topics1') {
        //验收信息查询
        this.navCtrl.push("AcceptQueryListPage");
    }
    else if (this.oper === 'topics2') {
        //转资信息查询
        this.navCtrl.push("TransferFundsQueryListPage");
    }

  }
}

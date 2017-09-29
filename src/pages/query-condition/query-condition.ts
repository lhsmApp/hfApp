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

  startDate:string;
  endDate:string;
  relationship:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QueryConditionPage');
    this.relationship="1";
    this.startDate=Utils.dateFormat(new Date());
    this.endDate=(new Date()).toISOString();
    console.log(this.endDate);
  }

  openQuery(){
  	this.navCtrl.push("AdvancePaymentQueryPage");
  }
}

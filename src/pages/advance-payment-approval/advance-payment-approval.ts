import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdvancePaymentMain} from '../../model/advance-payment-main';
import { PaymentService} from '../../services/paymentService';
import {ResultBase} from "../../model/result-base";

/**
 * Generated class for the AdvancePaymentApprovalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 const  ADVANTAGE_LIST: AdvancePaymentMain []= [  
 { payCode: 'FKD2017080001', payDigest: '付款缺失合同明细', reviewStatus: '1',requireUser: 'jiachao'},
 { payCode: 'FKD2017080002', payDigest: '进度款需要申请' ,reviewStatus: '2',requireUser: 'zhangsan'},
 { payCode: 'FKD2017080003', payDigest: '进度款需要申请' ,reviewStatus: '3',requireUser: 'zhangsan'},
 { payCode: 'FKD2017080004', payDigest: '进度款需要申请' ,reviewStatus: '4',requireUser: 'zhangsan'}
 ];

@IonicPage()
@Component({
  selector: 'page-advance-payment-approval',
  templateUrl: 'advance-payment-approval.html',
})
export class AdvancePaymentApprovalPage {

  advancePaymentList:AdvancePaymentMain[];
  listAll:AdvancePaymentMain[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private paymentService:PaymentService) {
  	//this.advancePaymentList=ADVANTAGE_LIST;
  }

  //初始化View
  ionViewDidLoad() {
    this.getList();
  }

  //获取付款单列表信息
  getList(){
      let state="'1','3'";
      //getPaymentMainList(type:string,reviewStatus:string,payCode:string,startDate:string,endDate:string)
      this.paymentService.getPaymentMainList('3','',"","","")
      .subscribe(object => {
        let resultBase:ResultBase=object[0] as ResultBase;
        if(resultBase.result=='true'){
          this.listAll = object[1] as AdvancePaymentMain[];
          this.advancePaymentList = object[1] as AdvancePaymentMain[];
        }
      }, () => {
        
      });
  }

  //模糊查询
  getItems(ev: any) {
    // Reset items back to all of the items
    //this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.advancePaymentList = this.listAll.filter((item) => {
        return (item.payCode.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }else{
        this.advancePaymentList=this.listAll;
    }
  }


  //打开详情页
  openPage(item: AdvancePaymentMain) {
    this.navCtrl.push("AdvancePaymentInfoPage",{"paymentItem":item,approval:true});
  }

  //上拉刷新
  doRefresh(refresher) {
  	this.getList();
  	refresher.complete();
  }
}

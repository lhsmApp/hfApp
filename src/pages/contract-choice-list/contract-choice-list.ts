import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import {ContractMain} from '../../model/contract-main';
import {ContractService} from '../../services/contractService';
import {ResultBase} from "../../model/result-base";

import {Page_ContractChoiceConfirmPage} from '../../providers/TransferFeildName';
import {BillContractCode} from '../../providers/TransferFeildName';

/**
 * Generated class for the ContractChoiceListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

  const listGet:ContractMain[] = [
        { contractCode: 'HT201800001', contractName: '合同名称',sequence:'001',elementCode:'12001',elementName:'私营',compactType:'销售',contractMoney:'2044', requireUser: '申请人', checkResult: '1'},
        { contractCode: 'HT201800002', contractName: '合同名称',sequence:'001',elementCode:'12001',elementName:'私营',compactType:'销售',contractMoney:'2044', requireUser: '申请人', checkResult: '2'},
        { contractCode: 'HT201800003', contractName: '合同名称',sequence:'001',elementCode:'12001',elementName:'私营',compactType:'销售',contractMoney:'2044', requireUser: '申请人', checkResult: '3'},
        { contractCode: 'HT201800004', contractName: '合同名称',sequence:'001',elementCode:'12001',elementName:'私营',compactType:'销售',contractMoney:'2044', requireUser: '申请人', checkResult: '2'},
    ];

@IonicPage()
@Component({
  selector: 'page-contract-choice-list',
  templateUrl: 'contract-choice-list.html',
})
export class ContractChoiceListPage {
    listAll:ContractMain[] = [];
    list:ContractMain[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private viewCtrl: ViewController,
              public contractService:ContractService) {
    this.listAll = [];
    this.list = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractChoiceListPage');
    this.listAll = [];
    this.list = [];
    this.getList();
  }

  //获取列表信息
  getList() {
    this.listAll = [];
    this.list = [];
    //type,//1.申请 2.查询 3.审批
    //contractCode,//合同流水号" (模糊查询)
    //checkResult,//" 单据状态" //合同后端字段解释(括号中代表客户端对应字段)
          //0新增(新增) 
          //1审批通过(已审批)) 
          //2驳回(退回) 
          //3解约 
          //4审批中(待审批) 
          //10待审批(待审批)
    //contract_type,//类型，新增：基建与租赁区分1基建，2租赁(如果是查询界面调用必须输入)
    //type:string, contractCode:string, startDate:string, endDate:string, checkResult:string, contract_type:string
    /*this.contractService.getContractMainList('2', '', '', '', '1', '1').subscribe(
      object => {
        let resultBase:ResultBase=object[0] as ResultBase;
        if(resultBase.result=='true'){
          this.listAll = object[1] as ContractMain[];
          this.list = object[1] as ContractMain[];
        }
      }, () => {
    
      });*/
    this.listAll = listGet;
    this.list = listGet;
  }

  //模糊查询
  getItems(ev: any) {
    // Reset items back to all of the items
    //this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.list = this.listAll.filter((item) => {
        return (item.contractCode.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  //上拉刷新
  doRefresh(refresher) {
    /*this.params.page = 1;
    setTimeout(() => {
      this.topicService.getTopics(this.params).subscribe(
        data => {
          this.advancePaymentList = data.data;
          refresher.complete();
        }
        );
    }, 2000);*/

    this.list = this.listAll;
    refresher.complete();
  }

  //下拉加载
  doInfinite(infiniteScroll) {
    /*this.params.page++;
    setTimeout(() => {
      this.topicService.getTopics(this.params).subscribe(
        data => {
          if (data) {
            this.topics.push(...data.data);
            infiniteScroll.complete();
          }
          else {
            infiniteScroll.enable(false);
          }
        }
        );
    }, 500);*/
  }

    toDetail(contractCode: string) {
        this.navCtrl.push(Page_ContractChoiceConfirmPage, {BillContractCode: contractCode});
    }

  //选择合同
  selectContract(selectItem){
    this.viewCtrl.dismiss(selectItem);
    //this.navCtrl.pop();
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {AcceptApplyDetail} from '../../model/accept-apply-detail';
import {Depart} from '../../model/depart';
import {AcceptService} from '../../services/acceptService';
import {ResultBase} from "../../model/result-base";

import {Oper,Oper_Look,Oper_Edit,Oper_Add,Oper_Approval} from '../../providers/TransferFeildName';
import {Title} from '../../providers/TransferFeildName';
import {BillNumberCode} from '../../providers/TransferFeildName';

import {Page_AssetDetailsListInfoPage,Page_ChoiceApproversPage } from '../../providers/TransferFeildName';
import {TypeGetAsset,TypeGetAsset_AcceptApply} from '../../providers/TransferFeildName';

/**
 * Generated class for the AcceptApplyInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

  const listDeptGet: Depart[]=[
      {departCode:'1',departName:'单位1'},
      {departCode:'2',departName:'单位2'},
      {departCode:'133930001',departName:'单位3'},
      {departCode:'4',departName:'单位4'},
  ]

  /*const item: AcceptApplyDetail = { billNumber: 'XMDY0001', reviewStatus: '0', requireDate: '2017-09-25', requireUser: '申请人', contractCode:'HT0001', 
          contractName:'合同名称', elementCode:'XMDY0045', elementName:'项目单元名称', departCode:'4'};*/

@IonicPage()
@Component({
  selector: 'page-accept-apply-info',
  templateUrl: 'accept-apply-info.html',
})
export class AcceptApplyInfoPage {
  isShowCheck:boolean;
  isShowSend:boolean;
  title:string;
  oper:string;
  billNumber:string;

  list: AcceptApplyDetail[];
  itemShow:AcceptApplyDetail;
  listDept: Depart[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,
              public acceptService:AcceptService) {
    this.itemShow = new AcceptApplyDetail();
    this.isShowCheck = false;
    this.isShowSend = false;
    this.title = this.navParams.get(Title);
    this.oper = this.navParams.get(Oper);
    if(this.oper === Oper_Approval){
        this.isShowCheck = true;
    }
    if(this.oper === Oper_Edit || this.oper === Oper_Add){
        this.isShowSend = true;
    }
  	this.billNumber = this.navParams.get(BillNumberCode);
    this.listDept = listDeptGet;
  }

  ionViewDidLoad() {
    this.itemShow = new AcceptApplyDetail();
    this.getShowItem();
  }

  getShowItem(){
    this.itemShow = new AcceptApplyDetail();
    this.acceptService.getAcceptDetailItem(this.billNumber).subscribe(
      object => {
        let resultBase:ResultBase=object[0] as ResultBase;
        if(resultBase.result=='true'){
          this.list = object[1] as AcceptApplyDetail[];
          if(this.list && this.list.length > 0){
              this.itemShow = this.list[0] as AcceptApplyDetail;
          }
        }
      }, () => {
    
      });
    //this.itemShow = item;
  }
  
  //资产明细
  toAssetDetail(){
    this.navCtrl.push(Page_AssetDetailsListInfoPage, {BillNumberCode: this.billNumber, BillContractCode:this.itemShow.contractCode, TypeGetAsset:TypeGetAsset_AcceptApply});
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
        }
      });
    prompt.addButton({
      text: '通过',
      cssClass:'alertButtionYes',
      handler: data => {
      }
    });
    prompt.present();
  }

  send(){
      this.navCtrl.push(Page_ChoiceApproversPage, {BillNumberCode: this.billNumber});
  }

}

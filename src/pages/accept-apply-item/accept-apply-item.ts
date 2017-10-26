import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Storage} from '@ionic/storage';
import {IonicPage, NavController, NavParams, ViewController,ModalController} from 'ionic-angular';
import {AcceptApplyDetail} from '../../model/accept-apply-detail';
import {Depart} from '../../model/depart';
import {GlobalData} from "../../providers/GlobalData";
import {Utils} from "../../providers/Utils";
import {AcceptService} from '../../services/acceptService';
import {ResultBase} from "../../model/result-base";

import {IN_DEPART} from "../../enums/storage-type";
import {DicInDepart} from '../../model/dic-in-depart';

import {Oper,Oper_Add,Oper_Edit} from '../../providers/TransferFeildName';
import {BillNumberCode} from '../../providers/TransferFeildName';

import {Page_ContractChoiceListPage,Page_AssetDetailsListPage} from '../../providers/TransferFeildName';
import {Page_ChoiceApproversPage} from '../../providers/TransferFeildName';
import {TypeGetAsset,TypeGetAsset_AcceptApply} from '../../providers/TransferFeildName';

/**
 * Generated class for the AcceptApplyItemPage page.
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
  selector: 'page-accept-apply-item',
  templateUrl: 'accept-apply-item.html',
})
export class AcceptApplyItemPage {
  oper:string;
  billNumber:string;

  applyFrom:any;
  list: AcceptApplyDetail[];
  itemShow:AcceptApplyDetail;
  listDept: Depart[];

  constructor(public navCtrl: NavController,
              public params: NavParams,
              private formBuilder: FormBuilder,
              private storage: Storage,
              private modalCtrl: ModalController,
              private viewCtrl: ViewController,
              public acceptService:AcceptService, 
              private globalData: GlobalData) {
    this.itemShow = new AcceptApplyDetail();
  	this.oper = this.params.get(Oper);
  	this.billNumber = this.params.get(BillNumberCode);
    this.listDept = listDeptGet;

    this.applyFrom = this.formBuilder.group({
      contractCode: [, [Validators.required]],
      contractName: [, []],
      elementCode: [, []],
      elementName: [, []],
      departCode: [, [Validators.required]],
      requireDate: [, [Validators.required]],
      requireUser: [, [Validators.required]],

      billNumber: [, []],
      reviewStatus: [, []],
    });
  }

  FromPatchValue(){
    this.applyFrom.patchValue({
      contractCode: this.itemShow.contractCode,
      contractName: this.itemShow.contractName,
      elementCode: this.itemShow.elementCode,
      elementName: this.itemShow.elementName,
      departCode: this.itemShow.departCode,
      requireDate: this.itemShow.requireDate,
      requireUser: this.itemShow.requireUser,

      billNumber: this.itemShow.billNumber,
      reviewStatus: this.itemShow.reviewStatus,
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcceptApplyItemPage');
    //this.storage.get(IN_DEPART).then((inDepart: DicInDepart) => {
    //  this.listDept=inDepart;
    //});
    this.itemShow = new AcceptApplyDetail();
    this.getShowItem();
  }

  getShowItem(){
    this.itemShow = new AcceptApplyDetail();
    if(this.oper === Oper_Edit){
      console.log(this.oper);
      this.acceptService.getAcceptDetailItem(this.billNumber).subscribe(
        object => {
          let resultBase:ResultBase=object[0] as ResultBase;
          if(resultBase.result=='true'){
            this.list = object[1] as AcceptApplyDetail[];
            if(this.list && this.list.length > 0){
              this.itemShow = this.list[0] as AcceptApplyDetail;
              this.FromPatchValue();
            }
          }
        }, () => {
        
        });
      //this.itemShow = item;
      //this.FromPatchValue();
    } else if(this.oper === Oper_Add){
      console.log(this.oper);
      this.itemShow.billNumber = "";
      this.itemShow.contractCode = "";
      this.itemShow.contractName = "";
      this.itemShow.elementCode = "";
      this.itemShow.elementName = "";
      this.itemShow.departCode = "";
      this.itemShow.requireDate =  Utils.dateFormat(new Date());
      this.itemShow.requireUser = this.globalData.userName;
      this.itemShow.reviewStatus = "0";
      this.FromPatchValue();
    } else {
      this.FromPatchValue();
    }
  }

  //保存
  save(){
    /*if(this.paymentDetail.clauseType=='2'||this.paymentDetail.clauseType=='4'){
      if(this.gclListInfo==null||this.gclListInfo.length==0){
        let alert = this.alertCtrl.create({
          title: '提示!',
          subTitle: '请后再进行保存!',
          buttons: ['确定']
        });
        alert.present();
        return;
      }
    }*/
    let transferInfo=new Array<AcceptApplyDetail>();
    let detail=this.applyFrom.value as AcceptApplyDetail;
    if(this.oper === Oper_Add){
        detail.requireUser=this.globalData.userCode;
    }
    transferInfo.push(detail);

    this.acceptService.saveAcceptApplyMain(JSON.stringify(transferInfo))
      .subscribe(object => {
        let resultBase:ResultBase=object[0] as ResultBase;
        if(resultBase.result=='true'){
          this.oper = Oper_Edit;
          console.log(object[1][0]);
          this.itemShow = object[1][0] as AcceptApplyDetail;
          this.billNumber = this.itemShow.billNumber;
          this.FromPatchValue();
        }
      }, () => {
        
      });
  }

//送审
  send(){
      this.navCtrl.push(Page_ChoiceApproversPage, {BillNumberCode: this.billNumber});
  }
  
  //资产明细
  toAssetDetail(){
      this.navCtrl.push(Page_AssetDetailsListPage,  {BillNumberCode: this.billNumber, BillContractCode:this.itemShow.contractCode, TypeGetAsset:TypeGetAsset_AcceptApply});
  }

  //选择合同
  choiceContract(){
    //this.navCtrl.push(Page_ContractChoiceListPage);
    let modal = this.modalCtrl.create(Page_ContractChoiceListPage);
    modal.present();
    modal.onDidDismiss(contractInfo => {
      console.log(contractInfo);
      if(contractInfo){
          this.itemShow.contractCode = contractInfo.contractCode;
          this.itemShow.contractName = contractInfo.contractName;
          this.itemShow.elementCode = contractInfo.elementCode;
          this.itemShow.elementName = contractInfo.elementName;
          this.FromPatchValue();
      }
    });
  }

}

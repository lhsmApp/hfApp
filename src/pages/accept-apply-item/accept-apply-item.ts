import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Storage} from '@ionic/storage';
import {IonicPage, NavController, NavParams, ViewController,ModalController} from 'ionic-angular';
import {AcceptApplyDetail} from '../../model/accept-apply-detail';
import {DicDepart} from '../../model/dic-depart';
import {AcceptService} from '../../services/acceptService';
import {ResultBase} from "../../model/result-base";
import {GlobalData} from "../../providers/GlobalData";

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

  const listDeptGet: DicDepart[]=[
      {departCode:'1',departName:'单位1',parentCode:'',shortName:'',markHolding:'',departLevel:1,markTail:1,dutyCenterName:'',costCenterName:'',},
      {departCode:'2',departName:'单位2',parentCode:'',shortName:'',markHolding:'',departLevel:1,markTail:1,dutyCenterName:'',costCenterName:'',},
      {departCode:'133930001',departName:'单位3',parentCode:'',shortName:'',markHolding:'',departLevel:1,markTail:1,dutyCenterName:'',costCenterName:'',},
      {departCode:'4',departName:'单位4',parentCode:'',shortName:'',markHolding:'',departLevel:1,markTail:1,dutyCenterName:'',costCenterName:'',},
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
  listDept: DicDepart[];

  constructor(public navCtrl: NavController,
              public params: NavParams,
              private formBuilder: FormBuilder,
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
      requireUser: [, [Validators.required]]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcceptApplyItemPage');
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
      this.itemShow.requireDate = "2017-10-18 10:37";
      this.itemShow.requireUser = this.globalData.userName;
      this.itemShow.reviewStatus = "0";
      this.FromPatchValue();
    } else {
      this.FromPatchValue();
    }
  }

  FromPatchValue(){
    this.applyFrom.patchValue({
      contractCode: this.itemShow.contractCode,
      contractName: this.itemShow.contractName,
      elementCode: this.itemShow.elementCode,
      elementName: this.itemShow.elementName,
      departCode: this.itemShow.departCode,
      requireDate: this.itemShow.requireDate,
      requireUser: this.itemShow.requireUser
    });
  }

  //保存
  save(){
    //Object.assign(this.userInfo, this.userForm.value);
    //this.storage.set('UserInfo', this.userInfo);
    //this.nativeService.showToast('保存成功');
    //this.viewCtrl.dismiss(this.userInfo);


    //保存后设置this.billNumber
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

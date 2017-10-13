import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Storage} from '@ionic/storage';
import {IonicPage, NavController, NavParams, ViewController,ModalController} from 'ionic-angular';
import {AcceptApplyDetail} from '../../model/accept-apply-detail';
import {DicDepart} from '../../model/dic-depart';

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
      {departCode:'3',departName:'单位3',parentCode:'',shortName:'',markHolding:'',departLevel:1,markTail:1,dutyCenterName:'',costCenterName:'',},
      {departCode:'4',departName:'单位4',parentCode:'',shortName:'',markHolding:'',departLevel:1,markTail:1,dutyCenterName:'',costCenterName:'',},
  ]

@IonicPage()
@Component({
  selector: 'page-accept-apply-item',
  templateUrl: 'accept-apply-item.html',
})
export class AcceptApplyItemPage {
  oper:string;
  billNumber:string;

  applyFrom:any;
  itemShow:AcceptApplyDetail;
  listDept: DicDepart[];

  constructor(public navCtrl: NavController,
              public params: NavParams,
              private formBuilder: FormBuilder,
              private modalCtrl: ModalController,
              private viewCtrl: ViewController) {
  	this.oper = this.params.get(Oper);
  	this.billNumber = this.params.get(BillNumberCode);
    this.listDept = listDeptGet;
    this.getShowItem();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcceptApplyItemPage');
  }

  getShowItem(){
    this.itemShow = new AcceptApplyDetail();
    this.itemShow.billNumber = this.billNumber;

    this.applyFrom = this.formBuilder.group({
      contractCode: [this.itemShow.contractCode, [Validators.required]],
      contractName: [this.itemShow.contractName],
      elementCode: [this.itemShow.elementCode],
      elementName: [this.itemShow.elementName],
      departCode: [this.itemShow.departCode, [Validators.required]],
      requireDate: [this.itemShow.requireDate, [Validators.required]],
      requireUser: [this.itemShow.requireUser, [Validators.required]]
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
    //if(this.billNumber!=null&&this.billNumber.trim()!=""){
    //    this.navCtrl.push(Page_AssetDetailsListPage,  {BillNumberCode: this.billNumber, BillContractCode:this.itemShow.contractCode, TypeGetAsset:TypeGetAsset_AcceptApply});
    //} else {
    //  //提示单号为空，请先保存
    //}
    //if(this.oper==="添加"){
    //    this.navCtrl.push(Page_AssetDetailsAddPage, {BillNumberCode: this.billNumber, BillContractCode:this.itemShow.contractCode, TypeGetAsset:TypeGetAsset_AcceptApply});
    //} else if(this.oper==="编辑"){
    //    this.navCtrl.push(Page_AssetDetailsListPage,  {BillNumberCode: this.billNumber, BillContractCode:this.itemShow.contractCode, TypeGetAsset:TypeGetAsset_AcceptApply});
    //} 
  }

//选择合同
  choiceContract(){
    //this.navCtrl.push(Page_ContractChoiceListPage);
    let modal = this.modalCtrl.create(Page_ContractChoiceListPage);
    modal.present();
    modal.onDidDismiss(contractInfo => {
      console.log(contractInfo);
      if(contractInfo){
          this.itemShow.contractName = contractInfo.contractCode;
          this.itemShow.contractName = contractInfo.contractName;
      }
    });
  }

}

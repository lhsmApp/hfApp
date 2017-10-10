import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Storage} from '@ionic/storage';
import {IonicPage, NavController, NavParams, AlertController, ViewController} from 'ionic-angular';
import {AcceptApplyDetail} from '../../model/accept-apply-detail';
import {DepartInfo} from '../../model/depart-info.d';

/**
 * Generated class for the AcceptApplyItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

  const listDeptGet: DepartInfo[]=[
      {codeDept:'1',nameDept:'单位1'},
      {codeDept:'2',nameDept:'单位2'},
      {codeDept:'3',nameDept:'单位3'},
      {codeDept:'4',nameDept:'单位4'},
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
  listDept: DepartInfo[];

  constructor(public navCtrl: NavController,
              public params: NavParams,
              private formBuilder: FormBuilder,
              private storage: Storage,
              private alertCtrl: AlertController, 
              private viewCtrl: ViewController) {
  	this.oper = this.params.get("oper");
  	this.billNumber = this.params.get("CodeTranfer");
    this.listDept = listDeptGet;
    this.getShowItem();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcceptApplyItemPage');
  }

  getShowItem(){
    //this.CodeTranfer
    this.itemShow = new AcceptApplyDetail();

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
  }

//送审
  send(){

  }
  
  //资产明细
  toAssetDetail(){
    if(this.oper==="添加"){
        this.navCtrl.push("AssetDetailsAddPage", {'CodeTranfer': this.billNumber});
    } else if(this.oper==="编辑"){
        this.navCtrl.push("AssetDetailsListPage", {'CodeTranfer': this.billNumber});
    } 
  }

//选择合同
  choiceContract(){
    this.navCtrl.push("ContractChoiceListPage");
  }

}

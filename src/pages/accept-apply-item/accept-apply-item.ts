import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Storage} from '@ionic/storage';
import {IonicPage, NavController, NavParams, AlertController, ViewController} from 'ionic-angular';
import {AcceptApplyInfo} from '../../model/accept-apply-info.d';
import {DepartInfo} from '../../model/depart-info.d';

/**
 * Generated class for the AcceptApplyItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

  const listDept: DepartInfo[]=[
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
  itemTranfer:AcceptApplyInfo;
  applyFrom:any;
  itemShow:AcceptApplyInfo;

  constructor(public navCtrl: NavController,
              public params: NavParams,
              private formBuilder: FormBuilder,
              private storage: Storage,
              private alertCtrl: AlertController, 
              private viewCtrl: ViewController) {
  	this.oper = this.params.get("oper");
  	this.itemShow = this.params.get("itemTranfer");
    this.getShowItem();

    this.applyFrom = this.formBuilder.group({
      contractCodeAcceptApply: [this.itemShow.contractCodeAcceptApply, [Validators.required]],
      contractNameAcceptApply: [this.itemShow.contractNameAcceptApply],
      projTypeAcceptApply: [this.itemShow.projTypeAcceptApply],
      projPartNameAcceptApply: [this.itemShow.projPartNameAcceptApply],
      applyDepartAcceptApply: [this.itemShow.applyDepartAcceptApply, [Validators.required]],
      applyTimeAcceptApply: [this.itemShow.applyTimeAcceptApply, [Validators.required]],
      applyAcceptApply: [this.itemShow.applyAcceptApply, [Validators.required]]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcceptApplyItemPage');
  }

  getShowItem(){
    //this.itemTranfer.codeAcceptApply
    //this.itemShow
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
        this.navCtrl.push("AssetDetailsAddPage", {'itemTranfer': this.itemShow});
    } else if(this.oper==="编辑"){
        this.navCtrl.push("AssetDetailsListPage", {'itemTranfer': this.itemShow});
    } 
  }

//选择合同
  choiceContract(){
    this.navCtrl.push("ContractChoiceListPage");
  }

}

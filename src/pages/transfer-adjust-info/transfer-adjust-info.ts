import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {TransferAdjustMain} from '../../model/transfer-adjust-main';
import {TransferAdjustDetail} from '../../model/transfer-adjust-detail';

import {Oper,Oper_Look,Oper_Approval} from '../../providers/TransferFeildName';
import {Title} from '../../providers/TransferFeildName';
import {BillNumberCode} from '../../providers/TransferFeildName';

/**
 * Generated class for the TransferAdjustInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 const item:TransferAdjustDetail = {
 xh: '序号',
assetsType: '资产类型',
//assetsCodeType: '资产类别',
assetsCode: '资产编码',
assetsName: '资产名称',
departCode: '所属单位',
//entityCode: '所属资产组',
assetsStandard: '规格型号',
licenceNumber: '车牌井号',
unitCode: '计量单位',
makeFactory: '制造厂家',
factoryNumber: '出厂编号',
productDate: '出厂日期',
operateDate: '投产日期',
//usedAspect: '使用方向',
//contractCode: '合同编号',
applyCode: '取得方式',
//guaDate: '保修截止日期',
depreciateYear: 3,//预计使用年限(int 型)
usedState: '使用状况',
storePlace: '存放地点',
userPerson: '保管人',
specialLine: '技术鉴定部门',
originalValue: 58,//原值(double)
nowValue: 36,//净值(double)
addDepreciate: 35,//累计折旧(double)
devalueValue: 25,//减值准备(double)
keyCode: '资产键码',
tzOriginalValue: 6,//调整原值', (double)     
tzNowValue: 9,//调整净值', (double)          
tzDepreciateValue: 4,//调整累计折旧',(double)
};

@IonicPage()
@Component({
  selector: 'page-transfer-adjust-info',
  templateUrl: 'transfer-adjust-info.html',
})
export class TransferAdjustInfoPage {
  isShow:boolean;
  title:string;
  oper:string;
  itemTranfer:TransferAdjustMain;
  itemShow:TransferAdjustDetail;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              public alertCtrl: AlertController) {
    this.isShow = false;
    this.title = this.navParams.get("title");
  	this.oper = this.navParams.get("oper");
    if(this.oper === Oper_Approval){
        this.isShow = true;
    }
  	this.itemTranfer = this.navParams.get("itemTranfer");
    this.getShowItem();

    //,'oper':'审批'
  }

  getShowItem(){
    //this.itemTranfer.codeAcceptApply
    this.itemShow = item;
  }
  
  //资产明细
  toAssetDetail(){
    this.navCtrl.push("AssetDetailsListInfoPage", {'itemTranfer': this.itemShow});
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransferAdjustInfoPage');
  }

}

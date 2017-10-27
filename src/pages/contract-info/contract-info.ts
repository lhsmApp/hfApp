import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
import {ContractDetail} from '../../model/contract-detail';
import {ContractMain} from '../../model/contract-main';
import {ContractService} from '../../services/contractService';
import {ResultBase} from "../../model/result-base";

/**
 * Generated class for the ContractInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contract-info',
  templateUrl: 'contract-info.html',
})
export class ContractInfoPage {
  isapproval:boolean;
  contractDetailInfo:ContractDetail;
  contractMain:ContractMain;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,private contractService:ContractService) {
    this.isapproval=this.navParams.get('approval');
    this.contractMain=this.navParams.get('contractMain');
  }

  ionViewDidLoad() {
    this.initData();
  }

  //初始化数据
  initData(){
    this.contractService.getContractDetailItem(this.contractMain.contractCode,this.contractMain.sequence)
      .subscribe(object => {
        let resultBase:ResultBase=object[0] as ResultBase;
        if(resultBase.result=='true'){
          console.log(object[1][0]);
          this.contractDetailInfo = object[1][0] as ContractDetail;
        }else{
          let alert = this.alertCtrl.create({
            title: '提示!',
            subTitle: resultBase.message,
            buttons: ['确定']
          });
          alert.present();
        }
      }, () => {
        
      });
  }

  //审批
  approval(){
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

  //合同明细
  contractDetail(){
  	this.navCtrl.push("AssetDetailsListInfoPage",{'contractCode':this.contractDetailInfo.contractCode});
  }

  //工程量清单
  billOfGcl(){
	this.navCtrl.push("BillGclPage",{'contractCode':this.contractDetailInfo.contractCode,'type':'ht','sequence':this.contractDetailInfo.sequence});
  }

  //附件
  attachment(){
  	this.navCtrl.push("AttachmentInfoPage");
  }

}

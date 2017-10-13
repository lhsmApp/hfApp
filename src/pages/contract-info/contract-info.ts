import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';

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
  payCode:string;
  isapproval:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.payCode=this.navParams.get('id');
    this.isapproval=this.navParams.get('approval');
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
  	this.navCtrl.push("AssetDetailsListInfoPage");
  }

  //工程量清单
  billOfGcl(){
	this.navCtrl.push("BillGclPage");
  }

  //附件
  attachment(){
  	this.navCtrl.push("AttachmentInfoPage");
  }

}

import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Storage} from '@ionic/storage';
import {IonicPage, NavController, NavParams, AlertController, ViewController} from 'ionic-angular';
import {AcceptApplyInfo} from '../../model/accept-apply-info.d';

/**
 * Generated class for the AcceptApplyItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-accept-apply-item',
  templateUrl: 'accept-apply-item.html',
})
export class AcceptApplyItemPage {
  oper:string;
  itemTranfer:AcceptApplyInfo;
  applyFrom:any;
  verifyMessages = {
    'contractCodeAcceptApply': {
      'errorMsg': '',
      'required': '合同流水号为必填项',
    },
    'contractNameAcceptApply': {
      'errorMsg': '',
    },
    'projTypeAcceptApply': {
      'errorMsg': '',
    },
    'projPartNameAcceptApply': {
      'errorMsg': '',
    },
    'applyDepartAcceptApply': {
      'errorMsg': '',
      'required': '申请单位为必填项',
    },
    'applyTimeAcceptApply': {
      'errorMsg': '',
      'required': '申请时间为必填项',
    },
    'applyAcceptApply': {
      'errorMsg': '',
      'required': '申请人为必填项',
    }
  };

  constructor(public navCtrl: NavController,
              public params: NavParams,
              private formBuilder: FormBuilder,
              private storage: Storage,
              private alertCtrl: AlertController, 
              private viewCtrl: ViewController) {
  	this.oper = this.params.get("oper");
  	this.itemTranfer = this.params.get("itemTranfer");

    this.applyFrom = this.formBuilder.group({
      contractCodeAcceptApply: [this.itemTranfer.contractCodeAcceptApply, [Validators.required]],
      contractNameAcceptApply: [this.itemTranfer.contractNameAcceptApply],
      projTypeAcceptApply: [this.itemTranfer.projTypeAcceptApply],
      projPartNameAcceptApply: [this.itemTranfer.projPartNameAcceptApply],
      applyDepartAcceptApply: [this.itemTranfer.applyDepartAcceptApply, [Validators.required]],
      applyTimeAcceptApply: [this.itemTranfer.applyTimeAcceptApply, [Validators.required]],
      applyAcceptApply: [this.itemTranfer.applyAcceptApply, [Validators.required]]
    });
    this.applyFrom.valueChanges
      .subscribe(data => {
        const verifyMessages = this.verifyMessages;
        for (const field in verifyMessages) {
          verifyMessages[field].errorMsg = '';
          const control = this.applyFrom.get(field);
          if (control && control.dirty && !control.valid) {
            const messages = verifyMessages[field];
            for (const key in control.errors) {
              messages[key] && (verifyMessages[field].errorMsg += messages[key] + ' ');
            }
          }
        }
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcceptApplyItemPage');
  }

  onSubmit() {
    //Object.assign(this.userInfo, this.userForm.value);
    //this.storage.set('UserInfo', this.userInfo);
    //this.nativeService.showToast('保存成功');
    //this.viewCtrl.dismiss(this.userInfo);
  }

  toChecked(){

  }
  
  toAssetDetail(){
    this.navCtrl.push("AssetDetailsListPage", {'itemTranfer': this.itemTranfer});
  }

}

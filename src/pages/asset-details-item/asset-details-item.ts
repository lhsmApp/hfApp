import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AssetDetailsItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-asset-details-item',
  templateUrl: 'asset-details-item.html',
})
export class AssetDetailsItemPage {

  assetFrom:any;
  verifyMessages = {
    'name': {
      'errorMsg': '',
      'required': '合同流水号为必填项',
    },
  };

  constructor(public navCtrl: NavController, 
  	          public navParams: NavParams,
  	          public formBuilder: FormBuilder) {
  	this.assetFrom = formBuilder.group({
      //name: [this.itemTranfer.name, [Validators.required]],
  	});
    this.assetFrom.valueChanges
      .subscribe(data => {
        const verifyMessages = this.verifyMessages;
        for (const field in verifyMessages) {
          verifyMessages[field].errorMsg = '';
          const control = this.assetFrom.get(field);
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
    console.log('ionViewDidLoad AssetDetailsItemPage');
  }

  onSubmit() {
    //Object.assign(this.userInfo, this.userForm.value);
    //this.storage.set('UserInfo', this.userInfo);
    //this.nativeService.showToast('保存成功');
    //this.viewCtrl.dismiss(this.userInfo);
  }

}

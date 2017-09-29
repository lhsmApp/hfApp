import {Component} from '@angular/core';
import {Storage} from '@ionic/storage';
import {NavController, NavParams, AlertController, ViewController} from 'ionic-angular';
import {AcceptApplyInfo} from '../../model/AcceptApplyInfo.d';

/**
 * Generated class for the AcceptApplyItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-accept-apply-item',
  templateUrl: 'accept-apply-item.html',
})
export class AcceptApplyItemPage {

  oper:string;
  itemTranfer:AcceptApplyInfo;
  itemShow:AcceptApplyInfo;

  constructor(public navCtrl: NavController,
              public params: NavParams,
              private storage: Storage,
              private alertCtrl: AlertController, 
              private viewCtrl: ViewController) {
  	this.oper = this.params.get("oper");
  	this.itemTranfer = this.params.get("itemTranfer");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcceptApplyItemPage');
  }
    
    dismiss() {
      this.viewCtrl.dismiss();
    }


}

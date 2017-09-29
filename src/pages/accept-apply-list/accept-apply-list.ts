import {Component} from '@angular/core';
import {Storage} from '@ionic/storage';
import {NavController, NavParams, ViewController,IonicPage} from 'ionic-angular';
import {AcceptApplyInfo} from '../../model/AcceptApplyInfo.d';
import {AcceptApplyItemPage} from '../accept-apply-item/accept-apply-item';

/**
 * Generated class for the AcceptApplyListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-accept-apply-list',
  templateUrl: 'accept-apply-list.html',
})
export class AcceptApplyListPage {

    sreachValue: string;
    selectItem:AcceptApplyInfo;
    list:AcceptApplyInfo[] = [
        { codeAcceptApply: 'XMDY0001', stateAcceptApply: '新增', contractCodeAcceptApply: '',contractNameAcceptApply: '',projTypeAcceptApply: '',projPartNameAcceptApply: '',applyDepartAcceptApply: '',applyTimeAcceptApply: '',applyAcceptApply: '' },
        { codeAcceptApply: 'XMDY0002', stateAcceptApply: '退回', contractCodeAcceptApply: '',contractNameAcceptApply: '',projTypeAcceptApply: '',projPartNameAcceptApply: '',applyDepartAcceptApply: '',applyTimeAcceptApply: '',applyAcceptApply: '' },
    ];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage: Storage, 
              private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcceptApplyListPage');
  }

    setSelectedItem(item: AcceptApplyInfo) {
      this.selectItem=item;
    }
    toDetail() {
        this.navCtrl.push(AcceptApplyItemPage, {'itemTranfer': this.selectItem,'oper':'编辑'});
    }
    toChecked() {

    }

    add(){
        this.navCtrl.push(AcceptApplyItemPage, {'itemTranfer': null,'oper':'添加'});
    }

    dismiss() {
      this.viewCtrl.dismiss();
    }

}

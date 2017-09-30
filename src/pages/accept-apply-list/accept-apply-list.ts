import {Component} from '@angular/core';
import {Storage} from '@ionic/storage';
import {NavController, NavParams, ViewController,IonicPage} from 'ionic-angular';
import {AcceptApplyInfo} from '../../model/accept-apply-info.d';

/**
 * Generated class for the AcceptApplyListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

  const listGet:AcceptApplyInfo[] = [
        { codeAcceptApply: 'XMDY0001', stateAcceptApply: '新增', contractCodeAcceptApply: '',contractNameAcceptApply: '',projTypeAcceptApply: '',projPartNameAcceptApply: '',applyDepartAcceptApply: '',applyTimeAcceptApply: '',applyAcceptApply: '' },
        { codeAcceptApply: 'XMDY0002', stateAcceptApply: '退回', contractCodeAcceptApply: '',contractNameAcceptApply: '',projTypeAcceptApply: '',projPartNameAcceptApply: '',applyDepartAcceptApply: '',applyTimeAcceptApply: '',applyAcceptApply: '' },
        { codeAcceptApply: 'XMDY0003', stateAcceptApply: '退回', contractCodeAcceptApply: '',contractNameAcceptApply: '',projTypeAcceptApply: '',projPartNameAcceptApply: '',applyDepartAcceptApply: '',applyTimeAcceptApply: '',applyAcceptApply: '' },
        { codeAcceptApply: 'XMDY0004', stateAcceptApply: '退回', contractCodeAcceptApply: '',contractNameAcceptApply: '',projTypeAcceptApply: '',projPartNameAcceptApply: '',applyDepartAcceptApply: '',applyTimeAcceptApply: '',applyAcceptApply: '' },
    ];

@IonicPage()
@Component({
  selector: 'page-accept-apply-list',
  templateUrl: 'accept-apply-list.html',
})
export class AcceptApplyListPage {

    sreachValue: string;
    list:AcceptApplyInfo[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage: Storage, 
              private viewCtrl: ViewController) {
    this.list = listGet;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcceptApplyListPage');
  }

  //上拉刷新
  doRefresh(refresher) {
    /*this.params.page = 1;
    setTimeout(() => {
      this.topicService.getTopics(this.params).subscribe(
        data => {
          this.advancePaymentList = data.data;
          refresher.complete();
        }
        );
    }, 2000);*/

    this.list = listGet;
    refresher.complete();
  }

  //下拉加载
  doInfinite(infiniteScroll) {
    /*this.params.page++;
    setTimeout(() => {
      this.topicService.getTopics(this.params).subscribe(
        data => {
          if (data) {
            this.topics.push(...data.data);
            infiniteScroll.complete();
          }
          else {
            infiniteScroll.enable(false);
          }
        }
        );
    }, 500);*/
  }

    toDetail(item: AcceptApplyInfo) {
        this.navCtrl.push("AcceptApplyItemPage", {'itemTranfer': item,'oper':'编辑'});
    }

    add(){
        this.navCtrl.push("AcceptApplyItemPage", {'itemTranfer': [],'oper':'添加'});
    }
    delete(item: AcceptApplyInfo){
        
    }
}

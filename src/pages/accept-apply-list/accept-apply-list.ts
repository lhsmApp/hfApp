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
        { codeAcceptApply: 'XMDY0001', stateAcceptApply: '新增', contractCodeAcceptApply: '', contractNameAcceptApply: '', projTypeAcceptApply: '', projPartNameAcceptApply: '', applyDepartAcceptApply: '', applyTimeAcceptApply: '', applyAcceptApply: ''},
        { codeAcceptApply: 'XMDY0002', stateAcceptApply: '退回', contractCodeAcceptApply: '', contractNameAcceptApply: '', projTypeAcceptApply: '', projPartNameAcceptApply: '', applyDepartAcceptApply: '', applyTimeAcceptApply: '', applyAcceptApply: ''},
        { codeAcceptApply: 'XMDY0003', stateAcceptApply: '退回', contractCodeAcceptApply: '', contractNameAcceptApply: '', projTypeAcceptApply: '', projPartNameAcceptApply: '', applyDepartAcceptApply: '', applyTimeAcceptApply: '', applyAcceptApply: ''},
        { codeAcceptApply: 'XMDY0004', stateAcceptApply: '退回', contractCodeAcceptApply: '', contractNameAcceptApply: '', projTypeAcceptApply: '', projPartNameAcceptApply: '', applyDepartAcceptApply: '', applyTimeAcceptApply: '', applyAcceptApply: ''},
    ];

@IonicPage()
@Component({
  selector: 'page-accept-apply-list',
  templateUrl: 'accept-apply-list.html',
})
export class AcceptApplyListPage {
    list:AcceptApplyInfo[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.getList();
  }

  //获取列表信息
  getList() {
    /*this.topicService.getTopics(this.params).subscribe(
      data => this.topics = data.data
      );*/
    this.list = listGet;
  }

  //模糊查询
  getItems(ev: any) {
    // Reset items back to all of the items
    //this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.list = this.list.filter((item) => {
        return (item.codeAcceptApply.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
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
        this.navCtrl.push("AcceptApplyInfoPage", {'itemTranfer': item,'oper':'查看'});
    }

  //增加
    add(){
        this.navCtrl.push("AcceptApplyItemPage", {'itemTranfer': [],'oper':'添加'});
    }

  //编辑
  edit(item: AcceptApplyInfo){
        this.navCtrl.push("AcceptApplyItemPage", {'itemTranfer': item,'oper':'编辑'});
  }

  //删除
    delete(item: AcceptApplyInfo){
        
    }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TransferAdjustMain} from '../../model/transfer-adjust-main';

/**
 * Generated class for the TransferAdjustApprovalListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

  const listGet:TransferAdjustMain[] = [
        { assetsCode: 'ZZ0001', assetsName: '2017-09-01', departCode: 'XXXXXX', keyCode: ''},
        { assetsCode: 'ZZ0002', assetsName: '2017-09-01', departCode: 'XXXXX', keyCode: ''},
        { assetsCode: 'ZZ0003', assetsName: '2017-09-01', departCode: 'XXXXXX', keyCode: ''},
        { assetsCode: 'ZZ0004', assetsName: '2017-09-01', departCode: 'XXXXXX', keyCode: ''},
    ];

@IonicPage()
@Component({
  selector: 'page-transfer-adjust-approval-list',
  templateUrl: 'transfer-adjust-approval-list.html',
})
export class TransferAdjustApprovalListPage {
    list:TransferAdjustMain[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
        return (item.assetsCode.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
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

    toDetail(item: TransferAdjustMain) {
        this.navCtrl.push("TransferAdjustInfoPage", {'itemTranfer': item,'oper':'审批','title':'转资调整审批'});
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransferAdjustApprovalListPage');
  }

}

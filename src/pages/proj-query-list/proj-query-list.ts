import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ContractInfo} from '../../model/contract-info.d';

/**
 * Generated class for the ProjQueryListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

  const listGet:ContractInfo[] = [
        { codeContract: 'HT201800001', nameContract: 'XXXXXXXX', jeContract: 'XXXXX', projTypeContract: '', projPartNameContract: '', projSettTypeContract: '', paySeasonContract: '', readyPayContract: '', nowApplyContract: '', payDeptContract: '', getDeptContract: '', applyTimeContract: '', applyContract: ''},
        { codeContract: 'HT201800002', nameContract: 'XXXXXXXX', jeContract: 'XXXXX', projTypeContract: '', projPartNameContract: '', projSettTypeContract: '', paySeasonContract: '', readyPayContract: '', nowApplyContract: '', payDeptContract: '', getDeptContract: '', applyTimeContract: '', applyContract: ''},
        { codeContract: 'HT201800003', nameContract: 'XXXXXXXX', jeContract: 'XXXXX', projTypeContract: '', projPartNameContract: '', projSettTypeContract: '', paySeasonContract: '', readyPayContract: '', nowApplyContract: '', payDeptContract: '', getDeptContract: '', applyTimeContract: '', applyContract: ''},
        { codeContract: 'HT201800004', nameContract: 'XXXXXXXX', jeContract: 'XXXXX', projTypeContract: '', projPartNameContract: '', projSettTypeContract: '', paySeasonContract: '', readyPayContract: '', nowApplyContract: '', payDeptContract: '', getDeptContract: '', applyTimeContract: '', applyContract: ''},
    ];

@IonicPage()
@Component({
  selector: 'page-proj-query-list',
  templateUrl: 'proj-query-list.html',
})
export class ProjQueryListPage {
    list:ContractInfo[];

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
        return (item.codeContract.toLowerCase().indexOf(val.toLowerCase()) > -1);
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

    toDetail(item: ContractInfo) {
        this.navCtrl.push("ProjInfoPage", {'itemTranfer': item});
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjQueryListPage');
  }

}

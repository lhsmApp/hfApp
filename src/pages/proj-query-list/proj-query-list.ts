import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProjectUnitMain} from '../../model/project-unit-main';

/**
 * Generated class for the ProjQueryListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

  const listGet:ProjectUnitMain[] = [
        { elementCode: 'HT201800001', elementName: 'XXXXXXXX', elementType: '项目单元类别', sgsx: '施工属性'},
        { elementCode: 'HT201800002', elementName: 'XXXXXXXX', elementType: '项目单元类别', sgsx: '施工属性'},
        { elementCode: 'HT201800003', elementName: 'XXXXXXXX', elementType: '项目单元类别', sgsx: '施工属性'},
        { elementCode: 'HT201800004', elementName: 'XXXXXXXX', elementType: '项目单元类别', sgsx: '施工属性'},
    ];

@IonicPage()
@Component({
  selector: 'page-proj-query-list',
  templateUrl: 'proj-query-list.html',
})
export class ProjQueryListPage {
    list:ProjectUnitMain[];

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
        return (item.elementCode.toLowerCase().indexOf(val.toLowerCase()) > -1);
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

    toDetail(elementCode: string) {
        this.navCtrl.push("ProjInfoPage", {'CodeTranfer': elementCode});
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjQueryListPage');
  }

}

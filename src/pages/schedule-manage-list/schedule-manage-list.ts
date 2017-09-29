import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ScheduleManageInfo} from '../../model/schedule-manage-info.d'

/**
 * Generated class for the ScheduleManageListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 const listGet:ScheduleManageInfo[]=[
     {codeScheduleManage: 'XMDY00001', nameScheduleManage: '名称1', typeScheduleManage: '性质1'},
     {codeScheduleManage: 'XMDY00002', nameScheduleManage: '名称2', typeScheduleManage: '性质2'},
     {codeScheduleManage: 'XMDY00003', nameScheduleManage: '名称3', typeScheduleManage: '性质3'},
 ];

@IonicPage()
@Component({
  selector: 'page-schedule-manage-list',
  templateUrl: 'schedule-manage-list.html',
})
export class ScheduleManageListPage {
	selectItem:ScheduleManageInfo;
	list:ScheduleManageInfo[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.list = listGet;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScheduleManageListPage');
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

    setSelectedItem(item: ScheduleManageInfo) {
      this.selectItem=item;
    }

    toDetail(item: ScheduleManageInfo) {
        this.navCtrl.push("ScheduleManageItemPage", {'itemTranfer': item,'oper':'编辑'});
    }

    add(){
        this.navCtrl.push("ScheduleManageItemPage", {'itemTranfer': null,'oper':'添加'});
    }
    edit(item: ScheduleManageInfo){
        this.navCtrl.push("ScheduleManageItemPage", {'itemTranfer': item,'oper':'编辑'});
    }
    delete(item: ScheduleManageInfo){
        
    }
}

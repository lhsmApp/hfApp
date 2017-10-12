import {Component} from '@angular/core';
import {Storage} from '@ionic/storage';
import {NavController, NavParams, ViewController,IonicPage} from 'ionic-angular';
import {AcceptApplyMain} from '../../model/accept-apply-main';

import {Page_AcceptApplyInfoPage,Page_AcceptApplyItemPage} from '../../providers/TransferFeildName';
import {Oper,Oper_Add,Oper_Edit} from '../../providers/TransferFeildName';
import {Title} from '../../providers/TransferFeildName';
import {BillNumberCode} from '../../providers/TransferFeildName';


/**
 * Generated class for the AcceptApplyListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

  const listGet:AcceptApplyMain[] = [
        { billNumber: 'XMDY0001', reviewStatus: '0', requireDate: '2017-09-25', requireUser: '申请人'},
        { billNumber: 'XMDY0002', reviewStatus: '0', requireDate: '2017-09-25', requireUser: '申请人'},
        { billNumber: 'XMDY0003', reviewStatus: '99', requireDate: '2017-09-25', requireUser: '申请人'},
        { billNumber: 'XMDY0004', reviewStatus: '99', requireDate: '2017-09-25', requireUser: '申请人'},
    ];

@IonicPage()
@Component({
  selector: 'page-accept-apply-list',
  templateUrl: 'accept-apply-list.html',
})
export class AcceptApplyListPage {
    list:AcceptApplyMain[];

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
        return (item.billNumber.toLowerCase().indexOf(val.toLowerCase()) > -1);
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

    toDetail(billNumber: string) {
        this.navCtrl.push(Page_AcceptApplyInfoPage, {BillNumberCode: billNumber,Oper:Oper_Edit,Title:'验收申请'});
    }

  //增加
    add(){
        this.navCtrl.push(Page_AcceptApplyItemPage, {BillNumberCode: '',Oper:Oper_Add});
    }

  //编辑
  edit(billNumber: string){
        this.navCtrl.push(Page_AcceptApplyItemPage, {BillNumberCode: billNumber,Oper:Oper_Edit});
  }

  //删除
    delete(billNumber: string){
        
    }
}

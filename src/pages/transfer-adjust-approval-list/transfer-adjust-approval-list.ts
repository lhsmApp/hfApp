import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {TransferAdjustMain} from '../../model/transfer-adjust-main';
import {AcceptService} from '../../services/acceptService';
import {ResultBase} from "../../model/result-base";
import {Storage} from "@ionic/storage";
import {IN_DEPART} from "../../enums/storage-type";
import {DicInDepart} from '../../model/dic-in-depart';
import {DictUtil} from '../../providers/dict-util';

import {Page_TransferAdjustInfoPage} from '../../providers/TransferFeildName';
import {Oper,Oper_Look} from '../../providers/TransferFeildName';
import {Title} from '../../providers/TransferFeildName';
import {BillNumberCode} from '../../providers/TransferFeildName';
import {BillKeyCode} from '../../providers/TransferFeildName';

/**
 * Generated class for the TransferAdjustApprovalListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

  /*const listGet:TransferAdjustMain[] = [
        { translateCode: "1", assetsCode: 'ZZ0001', assetsName: '2017-09-01', departCode: '单位XXX', keyCode: ''},
        { translateCode: "2", assetsCode: 'ZZ0002', assetsName: '2017-09-01', departCode: '单位XXX', keyCode: ''},
        { translateCode: "3", assetsCode: 'ZZ0003', assetsName: '2017-09-01', departCode: '单位XXX', keyCode: ''},
        { translateCode: "4", assetsCode: 'ZZ0004', assetsName: '2017-09-01', departCode: '单位XXX', keyCode: ''},
    ];/**/

@IonicPage()
@Component({
  selector: 'page-transfer-adjust-approval-list',
  templateUrl: 'transfer-adjust-approval-list.html',
})
export class TransferAdjustApprovalListPage {
    listAll:TransferAdjustMain[];
    list:TransferAdjustMain[];
  listDept: DicInDepart[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl: AlertController,
              private storage: Storage,
              private dictUtil:DictUtil,
              public tzCostService:AcceptService) {
    //this.listAll = [];
    //this.list = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransferAdjustApprovalListPage');
    //this.listAll = [];
    //this.list = [];
    this.storage.get(IN_DEPART).then((inDepart: DicInDepart[]) => {
      this.listDept=inDepart;
    });
    this.getList();
  }

  //获取列表信息
  getList() {
    //this.listAll = [];
    //this.list = [];
    //type:string, feeFlag:string, translateCode:string
    //type,//  1.申请 2.查询 3.审批
    //feeFlag,//  是否已分摊费用 0否 1是  //”转资单号”
    this.tzCostService.getTzCostMainList('3', '', '').subscribe(
      object => {
        let resultBase:ResultBase=object[0] as ResultBase;
        if(resultBase.result=='true'){
          this.listAll = object[1] as TransferAdjustMain[];
          if(this.listAll){
            for(let item of this.listAll){
              item.departName  = this.dictUtil.getInDepartName(this.listDept,item.departCode);
            }
          }
          this.list = this.listAll;
        } else {
            let alert = this.alertCtrl.create({
              title: '提示!',
              subTitle: resultBase.message,
              buttons: ['确定']
            });
            alert.present();
        }
      }, () => {
  
      });
    /*this.listAll = listGet;
    this.list = listGet;*/
  }

  //模糊查询
  getItems(ev: any) {
    // Reset items back to all of the items
    //this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.list = this.listAll.filter((item) => {
        return (item.assetsCode.toLowerCase().indexOf(val.toLowerCase()) > -1
          || item.assetsName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.list = this.listAll;
    }
  }

  //上拉刷新
  doRefresh(refresher) {
    this.getList();
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
        this.navCtrl.push(Page_TransferAdjustInfoPage, {callback:this.checkRefresh,BillNumberCode: item.translateCode, BillKeyCode: item.keyCode, Oper:Oper_Look,Title:'转资调整审批'});
    }

  //回调
  checkRefresh = (data) =>
  {
    return new Promise((resolve, reject) => {
      console.log(data);
      if(data){
        this.getList();
      }
      resolve();
    });
  };

}

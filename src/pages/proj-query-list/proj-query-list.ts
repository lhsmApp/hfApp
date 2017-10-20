import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProjectUnitMain} from '../../model/project-unit-main';
import {ProjectElementService} from '../../services/projectElementService';
import {ResultBase} from "../../model/result-base";

import {Page_ProjInfoPage} from '../../providers/TransferFeildName';
import {Oper,Oper_Look} from '../../providers/TransferFeildName';
import {BillElementCode} from '../../providers/TransferFeildName';

/**
 * Generated class for the ProjQueryListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

  /*const listGet:ProjectUnitMain[] = [
        { elementCode: 'HT201800001', elementName: 'XXXXXXXX', elementType: '项目单元类别', sgsx: '施工属性'},
        { elementCode: 'HT201800002', elementName: 'XXXXXXXX', elementType: '项目单元类别', sgsx: '施工属性'},
        { elementCode: 'HT201800003', elementName: 'XXXXXXXX', elementType: '项目单元类别', sgsx: '施工属性'},
        { elementCode: 'HT201800004', elementName: 'XXXXXXXX', elementType: '项目单元类别', sgsx: '施工属性'},
    ];*/

@IonicPage()
@Component({
  selector: 'page-proj-query-list',
  templateUrl: 'proj-query-list.html',
})
export class ProjQueryListPage {
  listAll:ProjectUnitMain[];
    list:ProjectUnitMain[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public projectElementService: ProjectElementService) {
    this.listAll = [];
    this.list = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjQueryListPage');
    this.listAll = [];
    this.list = [];
    this.getList();
  }

  //获取列表信息
  getList() {
    this.listAll = [];
    this.list = [];
    //type 1.申请 2.查询 3.审批
    //sgsx ”施工属性”（如果是进度管理输入0，如果是项目单元查询则输入空）,
    //checkResult "单据状态"
          //项目单元后端字段解释(括号中代表客户端对应字段)
          //0新增(新增) 
          //1审批通过(已审批)) 
          //2驳回(退回) 
          //3解约 
          //4审批中(待审批) 
          //10待审批(待审批)
    //type:string, sgsx:string, elementCode:string, startDate:string, endDate:string, checkResult:string
    this.projectElementService.getProjectElementMainList('2', '', '', '', '', '').subscribe(
      object => {
        let resultBase:ResultBase=object[0] as ResultBase;
        if(resultBase.result=='true'){
          this.listAll = object[1] as ProjectUnitMain[];
          this.list = object[1] as ProjectUnitMain[];
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

    this.list = this.listAll;
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
        this.navCtrl.push(Page_ProjInfoPage, {BillElementCode: elementCode, Oper:Oper_Look});
    }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {ProjectUnitMain} from '../../model/project-unit-main'
import {ProjectElementService} from '../../services/projectElementService';
import {ResultBase} from "../../model/result-base";
import { QueryCondition } from '../../model/query-condition';
import {Storage} from "@ionic/storage";
import {DictUtil} from '../../providers/dict-util';
//import {} from "../../enums/storage-type";
import {Sgsx} from '../../enums/enums';

import {Page_ScheduleApplyInfoPage} from '../../providers/TransferFeildName';
import {Oper,Oper_Look} from '../../providers/TransferFeildName';
import {Title} from '../../providers/TransferFeildName';
import {BillElementCode} from '../../providers/TransferFeildName';

/**
 * Generated class for the ScheduleQueryListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 /*const listGet:ProjectUnitMain[]=[
     {elementCode: 'XMDY00001', elementName: '名称1', elementType: '性质1', sgsx: '施工属性1'},
     {elementCode: 'XMDY00002', elementName: '名称2', elementType: '性质2', sgsx: '施工属性2'},
     {elementCode: 'XMDY00003', elementName: '名称3', elementType: '性质3', sgsx: '施工属性3'},
 ];*/

@IonicPage()
@Component({
  selector: 'page-schedule-query-list',
  templateUrl: 'schedule-query-list.html',
})
export class ScheduleQueryListPage {
  queryCondition:QueryCondition;
  
  listAll:ProjectUnitMain[];
  list:ProjectUnitMain[];
  //dicElementType: DicComplex[];//项目单元类别"        

  constructor(public navCtrl: NavController, 
              public alertCtrl: AlertController,
              public navParams: NavParams,
              private storage: Storage,
              private dictUtil:DictUtil,
              public projectElementService: ProjectElementService) {
    //this.listAll = [];
    //this.list = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScheduleQueryListPage');
    //this.listAll = [];
    //this.list = [];
     this.queryCondition=this.navParams.get("queryCondition");
    this.getList();
  }

  //获取列表信息
  getList() {
    //this.listAll = [];
    //this.list = [];
    //this.storage.get().then((dicList: DicComplex[]) => {
    //  this.dicElementType=dicList;
    //});
      let state;
      if(this.queryCondition){
        if(this.queryCondition.state=='1'){
          state="0";
        }else if(this.queryCondition.state=='2'){
          state="4,10";
        }else if(this.queryCondition.state=='3'){
          state="1";
        }else if(this.queryCondition.state=='4'){
          state="2,3";
        }else{
          state="";
        }
      }
      let code=this.queryCondition.queryString;
      let startDate=this.queryCondition.startDate;
      let endDate=this.queryCondition.endDate;
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
    this.projectElementService.getProjectElementMainList('2', '0', code, startDate, endDate, state).subscribe(
      object => {
        let resultBase:ResultBase=object[0] as ResultBase;
        if(resultBase.result=='true'){
          this.listAll = object[1] as ProjectUnitMain[];
            for(let item of this.listAll){
              //item.elementTypeName = this.dictUtil.(this.dicElementType,item.elementType);//项目单元类别"          
              item.sgsxName = this.dictUtil.getEnumsName(Sgsx,item.sgsx);//施工属性"" 
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
    
      });/**/
    /*this.listAll = listGet;
    this.list = listGet;*/
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

    toDetail(elementCode: string) {
        this.navCtrl.push(Page_ScheduleApplyInfoPage, {BillElementCode: elementCode,Oper:Oper_Look, Title: '进度管理'});
    }

}

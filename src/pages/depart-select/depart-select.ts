import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';
import { Depart} from '../../model/depart';
import {LoginService} from '../../services/LoginService';
import {ResultBase} from "../../model/result-base";
import {GlobalData} from "../../providers/GlobalData";

/**
 * Generated class for the DepartSelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

const  DEPART_LIST: Depart []= [  
 { departCode: '13393000100010001', departName: '广东销售/广东分公司/营销管理处'},
 { departCode: '10223700000300030001', departName: '党群工作处'},
 { departCode: '10223700000300030002', departName: '河源分公司'},
 { departCode: '10223700000300030003', departName: '广东销售/肇庆地区'}
 ];

@IonicPage()
@Component({
  selector: 'page-depart-select',
  templateUrl: 'depart-select.html',
})
export class DepartSelectPage {

  departList:Depart[];
  selectDepart:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl: ViewController,private loginService: LoginService
    ,private globalData: GlobalData) {
	  this.departList=DEPART_LIST;
  }

  ionViewDidLoad() {
    //this.getList();
  }

  getList(){
    let userinfo=this.navParams.get('userinfo');
    this.loginService.getDepart(userinfo)
      .subscribe(object => {
        let resultBase:ResultBase=object[0] as ResultBase;
        if(resultBase.result=='true'){
          let userInfo=object[1];
          this.globalData.sessionId=userInfo.sessionId;
          this.departList = object[2] as Depart[];
        }
      }, () => {
        
      });
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

  	this.departList = DEPART_LIST;
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

  //确定选择
  confirm(){
  	console.log(this.selectDepart);
  	this.viewCtrl.dismiss(this.selectDepart);
  	//this.navCtrl.pop();
  }

}

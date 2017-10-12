import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Attachment} from '../../model/attachment';

/**
 * Generated class for the AttachmentInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 const  ATTACHMENT_LIST: Attachment []= [  
 { attachmentCode: 'FKD2017080001', attachmentName: '办公发票', attachmentPath: 'http://102.'},
 { attachmentCode: 'FKD2017080004', attachmentName: '旅游发票' ,attachmentPath: 'http://102.'}
 ];

@IonicPage()
@Component({
  selector: 'page-attachment-info',
  templateUrl: 'attachment-info.html',
})
export class AttachmentInfoPage {

  attachmentList:Attachment[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.attachmentList=ATTACHMENT_LIST;
  }

  ionViewDidLoad() {
    //this.getList();
  }

  //获取发票列表信息
  getList() {
   /*this.topicService.getTopics(this.params).subscribe(
   data => this.topics = data.data
   );*/
  }

  //打开详情页
  openPage(id: string) {
  	//this.appCtrl.getRootNav().push(HomeDetailPage, { id: id });
  	this.navCtrl.push("AttachmentViewPage",{id:id});
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

  	this.attachmentList = ATTACHMENT_LIST;
  	refresher.complete();
  }
}

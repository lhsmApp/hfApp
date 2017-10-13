import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { Attachment} from '../../model/attachment';
import {DEFAULT_INVOICE} from "../../providers/Constants";

/**
 * Generated class for the AttachmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 const  ATTACHMENT_LIST: Attachment []= [  
 { attachmentCode: 'FKD2017080001', attachmentName: '办公发票', attachmentPath: DEFAULT_INVOICE},
 { attachmentCode: 'FKD2017080004', attachmentName: '旅游发票' ,attachmentPath: DEFAULT_INVOICE}
 ];


@IonicPage()
@Component({
  selector: 'page-attachment',
  templateUrl: 'attachment.html',
})
export class AttachmentPage {

  attachmentList:Attachment[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private modalCtrl: ModalController) {
  	this.attachmentList=ATTACHMENT_LIST;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvoiceApplyListPage');
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

  //增加
  add(){
    let modal = this.modalCtrl.create('AttachmentAddPage', {invoiceCode: '001'});
    modal.present();
    /*modal.onDidDismiss(data => {
      data && (this.invoiceCode = data.invoiceCode)
    });*/
  }

  //上传
  upload(){

  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { Attachment} from '../../model/attachment';
import {DEFAULT_INVOICE} from "../../providers/Constants";
import { AttachmentService} from '../../services/attachmentService';
import {ResultBase} from "../../model/result-base";

/**
 * Generated class for the AttachmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 const  ATTACHMENT_LIST: Attachment []= [  
 { fileName: '办公发票', fileInfo: '办公发票描述', filePath: DEFAULT_INVOICE,sequence:1},
 { fileName: '旅游发票', fileInfo: '旅游发票描述',filePath: DEFAULT_INVOICE,sequence:2}
 ];


@IonicPage()
@Component({
  selector: 'page-attachment',
  templateUrl: 'attachment.html',
})
export class AttachmentPage {

  attachmentList:Attachment[];
  billNumber:string;
  contractCode :string;
  type:string;//1.合同 2.发票 

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private modalCtrl: ModalController,
    private attachmentService:AttachmentService) {
  	this.attachmentList=ATTACHMENT_LIST;
    this.billNumber=this.navParams.get('billNumber');
    this.contractCode=this.navParams.get('contractCode');
    this.type=this.navParams.get('type');
  }

  ionViewDidLoad() {
    //this.getList();
  }

  //获取附件列表信息
  getList(){
    this.attachmentService.getAttachmentList(this.billNumber,this.contractCode,this.type)
    .subscribe(object => {
      let resultBase:ResultBase=object[0] as ResultBase;
      if(resultBase.result=='true'){
        this.attachmentList = object[1] as Attachment[];
      }
    }, () => {
      
    });
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

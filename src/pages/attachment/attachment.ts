import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,AlertController } from 'ionic-angular';
import { Attachment} from '../../model/attachment';
import {DEFAULT_INVOICE} from "../../providers/Constants";
import { AttachmentService} from '../../services/attachmentService';
import {ResultBase} from "../../model/result-base";
import {DEFAULT_INVOICE_EMPTY} from "../../providers/Constants";
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
  emptyPath=DEFAULT_INVOICE_EMPTY;
  isEmpty:boolean=false;
  title:string;
  thumbPath=DEFAULT_INVOICE;
  attachmentList:Attachment[];
  billNumber:string;
  contractCode :string;
  type:string;//1.合同 2.发票 

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private modalCtrl: ModalController,
    private alertCtrl:AlertController,
    private attachmentService:AttachmentService) {
  	//this.attachmentList=ATTACHMENT_LIST;
    this.billNumber=this.navParams.get('billNumber');
    this.contractCode=this.navParams.get('contractCode');
    this.type=this.navParams.get('type');
    if(this.type=='1'){
      this.title='合同附件';
    }else if(this.type=='2'){
      this.title='发票附件';
    }
  }

  ionViewDidLoad() {
    this.getList();
  }

  //获取附件列表信息
  getList(){
    this.attachmentService.getAttachmentList(this.billNumber,this.contractCode,this.type)
    .subscribe(object => {
      let resultBase:ResultBase=object[0] as ResultBase;
      if(resultBase.result=='true'){
        if(object[1]!=null&&object[1].length>0){
          this.attachmentList = object[1] as Attachment[];
        }else{
          this.isEmpty=true;
        }
      }else{
        let alert = this.alertCtrl.create({
          title: '提示!',
          subTitle: resultBase.message,
          buttons: ['确定']
        });
        alert.present();
      }
    }, () => {
      
    });
  }

  //打开详情页
  openPage(item: Attachment) {
  	//this.appCtrl.getRootNav().push(HomeDetailPage, { id: id });
  	this.navCtrl.push("AttachmentViewPage",{attachment:item});
  }

  //上拉刷新
  doRefresh(refresher) {
  	this.getList();
  	refresher.complete();
  }

  //增加
  add(){
    let modal = this.modalCtrl.create('AttachmentAddPage', {title:this.title,billNumber:this.billNumber,contractCode:this.contractCode,type:this.type});
    modal.present();
    modal.onDidDismiss(data => {
      data && this.getList();
    });
  }

  //删除
  delete(item:Attachment){
    let confirm = this.alertCtrl.create({
      title: '删除提示?',
      message: '确认要删除当前付款单吗?',
      buttons: [
        {
          text: '取消',
          handler: () => {
            console.log('cancel');
          }
        },
        {
          text: '确认',
          handler: () => {
            this.attachmentService.deleteAttachment(this.billNumber,this.contractCode,this.type,item.sequence)
            .subscribe(object => {
              let resultBase:ResultBase=object[0] as ResultBase;
              if(resultBase.result=='true'){
                this.attachmentList = this.attachmentList.filter(h => h !== item);
              }else{
                let alert = this.alertCtrl.create({
                title: '提示!',
                subTitle: resultBase.message,
                buttons: ['确定']
              });
              alert.present();
              }
            }, () => {
              
            });
          }
        }
      ]
    });
    confirm.present();
  }
}

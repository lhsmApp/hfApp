import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';
import {DEFAULT_INVOICE} from "../../providers/Constants";
import { Attachment} from '../../model/attachment';
import { AttachmentService} from '../../services/attachmentService';
import {ResultBase} from "../../model/result-base";

/**
 * Generated class for the AttachmentViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-attachment-view',
  templateUrl: 'attachment-view.html',
})
export class AttachmentViewPage {

  content:any;
  attachmentPath: string=DEFAULT_INVOICE;
  attachment:Attachment;
  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl: ViewController,private attachmentService:AttachmentService) {
    this.attachment=this.navParams.get('attachment');
    this.attachmentPath=this.attachment.filePath;
  }

  ionViewDidLoad() {
    this.initData();
  }

  //初始化数据
  initData(){
    this.attachmentService.viewAttachmentList(this.attachment.filePath)
      .subscribe(object => {
        this.content=object;
        /*let resultBase:ResultBase=object[0] as ResultBase;
        if(resultBase.result=='true'){
          this.paymentDetail = object[1][0] as AdvancePaymentDetail;
        }else{
          let alert = this.alertCtrl.create({
            title: '提示!',
            subTitle: resultBase.message,
            buttons: ['确定']
          });
          alert.present();
        }*/
      }, () => {
        
      });
      
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

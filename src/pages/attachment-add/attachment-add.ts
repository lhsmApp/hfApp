import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,AlertController } from 'ionic-angular';
import {FileService} from "../../providers/FileService";
import {FileObj} from "../../model/FileObj";
import {NativeService} from '../../providers/NativeService';
import {DEFAULT_INVOICE_EMPTY} from "../../providers/Constants";
import {AttachmentService} from '../../services/attachmentService';
import {ResultBase} from "../../model/result-base";
import {GlobalData} from "../../providers/GlobalData";


/**
 * Generated class for the AttachmentAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-attachment-add',
  templateUrl: 'attachment-add.html',
})
export class AttachmentAddPage {
  title:string;
  attachmentPath: string=DEFAULT_INVOICE_EMPTY;
  billNumber:string;//单号:如果是合同页contractCode，如果是发票页sequence
  contractCode:string;//如果是发票页必须传，contractCode合同页传空
  type :string;//1.合同 2.发票 

  constructor(private params: NavParams,
              private viewCtrl: ViewController,
              private alertCtrl:AlertController,
              private fileService: FileService,
              private nativeService: NativeService,
              private attachmentService: AttachmentService,
              private globalData: GlobalData
              //private storage: Storage
              ) {
    //this.invoicePath = this.params.get('avatarPath');
    this.title=this.params.get('title');
    this.billNumber=this.params.get('billNumber');
    this.contractCode=this.params.get('contractCode');
    this.type=this.params.get('type');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttachmentAddPage');
  }

  getPicture(type) {//1拍照,0从图库选择
    let options = {
      targetWidth: 400,
      targetHeight: 400,
      quality: 100
    };
    if (type == 1) {
      this.nativeService.getPictureByCamera(options).subscribe(imageBase64 => {
        this.attachmentPath=imageBase64;
        console.log(this.attachmentPath);
        //this.getPictureSuccess(imageBase64);
      });
    } else {
      this.nativeService.getPictureByPhotoLibrary(options).subscribe(imageBase64 => {
        this.attachmentPath=imageBase64;
        //this.getPictureSuccess(imageBase64);
        console.log(this.attachmentPath);
        let data={
         'type' :type,//（1,2） 1.合同 2.发票
         'billNumber' :this.billNumber,//”单号”（如果是合同页contractCode，如果是发票页sequence）
        'fileFlag ' :1,//(模块标记1,基建 2，租赁 目前始终传1)
        'contractCode' :this.contractCode,//如果是发票页必须传，contractCode合同页传空
        'depiction':''//文件信息
       };
        console.log(JSON.stringify(data));
        console.log(this.globalData.sessionId);
      });
    }
  }

  //保存附件
  saveAttachment() {
    this.attachmentService.uploadAttachment(this.attachmentPath,this.type,this.billNumber,this.contractCode).subscribe(object => {//保存avatar字段到用户表
      
      let resultBase:ResultBase=object[0] as ResultBase;
      if(resultBase.result=='true'){
        this.viewCtrl.dismiss({'reflesh': true});
      }else{
        let alert = this.alertCtrl.create({
          title: '提示!',
          subTitle: resultBase.message,
          buttons: ['确定']
        });
        alert.present();
      }
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}


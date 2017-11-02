import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';
import {DEFAULT_INVOICE} from "../../providers/Constants";
import { Attachment} from '../../model/attachment';
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

  attachmentPath: string=DEFAULT_INVOICE;
  attachment:Attachment;
  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl: ViewController) {
    this.attachment=this.navParams.get('attachment');
    this.attachmentPath=this.attachment.filePath;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttachmentViewPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

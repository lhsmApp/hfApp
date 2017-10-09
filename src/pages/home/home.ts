import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Notice} from '../../model/notice';
import {DEFAULT_YS,DEFAULT_YFK,DEFAULT_HT,DEFAULT_ZZ,DEFAULT_ZZTZ} from "../../providers/Constants";

const NOTICES: Notice[] = [
      { id: 11, name: 'Mr. Nice',isRead:false },
      { id: 12, name: 'Narco',isRead:true  }
    ];

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  htPath: String = DEFAULT_HT;
  ysPath: String = DEFAULT_YS;
  yfkPath: String = DEFAULT_YFK;
  zzPath: String = DEFAULT_ZZ;
  zztzPath: String = DEFAULT_ZZTZ;

  notices = NOTICES;
  messageCount: string;
  constructor(public navCtrl: NavController) {
    this.messageCount="2";
  }

  itemSelected(notice:Notice){

  }

  openPage(cate: string) {
    if (cate === 'ht') {
      this.navCtrl.push("TestPage");
    }else if (cate === 'yfk') {
      this.navCtrl.push("AdvancePaymentApprovalPage");
    }else if(cate === 'ys'){
      this.navCtrl.push("AcceptApprovalListPage");
    }else if(cate === 'zz'){
      this.navCtrl.push("TransferFundsApprovalListPage");
    }else if(cate === 'zztz'){
      this.navCtrl.push("TransferAdjustApprovalListPage");
    }
  }
}

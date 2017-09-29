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
    if (cate === 'collects') {
      this.navCtrl.push("TestPage");
    }
    else if (cate === 'messages') {
      this.navCtrl.push("TestPage");
    }
    else {
      this.navCtrl.push("TestPage");
    }
  }
}

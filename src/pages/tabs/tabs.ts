import { Component ,OnInit } from '@angular/core';
import {GlobalData} from "../../providers/GlobalData";
import {Helper} from "../../providers/Helper";
import {LoginInfo} from "../../model/UserInfo";
import {Storage} from '@ionic/storage';
import {Tabs, Events} from "ionic-angular";

import { ApplyPage } from '../apply/apply';
import { QueryPage } from '../query/query';
import { HomePage } from '../home/home';
import { MinePage } from '../mine/mine';

import {AlertController, ModalController,NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage implements OnInit {

  tab1Root = HomePage;
  tab2Root = ApplyPage;
  tab3Root = QueryPage;
  tab4Root = MinePage;
  constructor(private navParams: NavParams,public events: Events, private globalData: GlobalData, private storage: Storage, private helper: Helper) {

  }

   ngOnInit(): void {
     //this.userInfo = this.params.get('userInfo');
    //this.avatarPath = this.params.get('avatarPath');
    let loginInfo=this.navParams.get('loginInfo');
    let userInfo = loginInfo.user;
    console.log(userInfo);
    this.globalData.userId = userInfo.id;
      this.globalData.username = userInfo.username;
      this.globalData.fullName = userInfo.fullName;
      if (!userInfo.avatarPath) {
        this.helper.loadAvatarPath(userInfo.avatarId).subscribe(avatarPath => {
          userInfo.avatarPath = avatarPath;
          this.storage.set('LoginInfo', loginInfo);
        });
      }
      this.helper.setTags();
      this.helper.setAlias(userInfo.id);
  }

  /*ionViewWillEnter() {
    this.events.subscribe('user:login', (loginInfo: LoginInfo) => {
      let userInfo = loginInfo.user;
      this.globalData.userId = userInfo.id;
      this.globalData.username = userInfo.username;
      this.globalData.fullName = userInfo.fullName;
      if (!userInfo.avatarPath) {
        this.helper.loadAvatarPath(userInfo.avatarId).subscribe(avatarPath => {
          userInfo.avatarPath = avatarPath;
          this.storage.set('LoginInfo', loginInfo);
        });
      }
      this.helper.setTags();
      this.helper.setAlias(userInfo.id);
      console.log(loginInfo);
    });
  }*/
}

import {Component} from "@angular/core";
import {Storage} from "@ionic/storage";
import {Platform, NavController, ModalController, AlertController,Tabs} from "ionic-angular";
import {MineEditPage} from "./mine-edit/mine-edit";
import {MineEditAvatarModalPage} from "./mine-edit-avatar-modal/mine-edit-avatar-modal";
import {UserInfo} from "../../model/UserInfo";
import {AboutPage} from "./about/about";
import {LoginPage} from "../login/login";
import {Helper} from "../../providers/Helper";
import {DEFAULT_AVATAR} from "../../providers/Constants";
import {WorkMapPage} from "./work-map/work-map";
import {SettingPage} from "./setting/setting";
import {NativeService} from "../../providers/NativeService";
import {DicComplex} from '../../model/dic-complex';
import {DicInDepart} from '../../model/dic-in-depart';
import {DicOutDepart} from '../../model/dic-out-depart';
import {DicBasicEntity} from '../../model/dic-basic-entity';
import {DicAsset} from '../../model/dic-asset';
import {SystemService} from '../../services/systemService';
import {ResultBase} from "../../model/result-base";
import {UNIT} from "../../enums/storage-type";
import {USED_ASPECT} from "../../enums/storage-type";
import {APPLY_CODE} from "../../enums/storage-type";
import {USED_STATE} from "../../enums/storage-type";
import {SPECIAL_LINE} from "../../enums/storage-type";
import {IN_DEPART} from "../../enums/storage-type";
import {OUT_DEPART} from "../../enums/storage-type";
import {BASIC_ENTITY} from "../../enums/storage-type";
import {ASSETS} from "../../enums/storage-type";
import {DictUtil} from "../../providers/dict-util";
import {PROJECT_ELEMENT} from "../../enums/storage-type";
import {CONTRACT_TYPE} from "../../enums/storage-type";
import {ADDITIONAL_PERSON} from "../../enums/storage-type";
import {DicBase} from '../../model/dic-base';

import {GlobalData} from "../../providers/GlobalData";

@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html'
})
export class MinePage {
  userInfo: UserInfo;
  avatarPath: String = DEFAULT_AVATAR;

  constructor(private navCtrl: NavController,
              private platform: Platform,
              private storage: Storage,
              private helper: Helper,
              private modalCtrl: ModalController,
              private nativeService: NativeService,
              private alertCtrl: AlertController,
              private systemService:SystemService,
              private dictUtil:DictUtil,
              private globalData: GlobalData) {

  }

  ionViewWillEnter() {
    this.storage.get('userinfo').then(userinfo => {
      if (userinfo) {
        this.userInfo = userinfo;
        this.avatarPath = userinfo.avatarPath;
      }
    });
  }

  edit() {
    this.navCtrl.push(MineEditPage, {'userInfo': this.userInfo,'avatarPath':this.avatarPath});
  }

  setting() {
    this.navCtrl.push(SettingPage);
    //之后建议用下面这种方式
    //this.navCtrl.push('TestPage');
  }

  //切换单位
  changeUnit(){
    let userinfo={usercode:this.globalData.userId,password:this.globalData.passWord};
    console.log(userinfo);
    let modal = this.modalCtrl.create('DepartSelectPage',{'userinfo':userinfo});
    modal.present();
    modal.onDidDismiss(departInfo => {
        if(departInfo){
          let departCodeAndName:string[]=departInfo.split('|');
          this.systemService.changeDepart(departCodeAndName[0]).subscribe(object => {
            let resultBase:ResultBase=object[0] as ResultBase;
            if(resultBase.result=='true'){
              this.globalData.departCode = departCodeAndName[0];
            }
          }, () => {
            
          });
      }
    });
  }

  loginOut() {
    this.alertCtrl.create({
      title: '确认重新登录？',
      buttons: [{text: '取消'},
        {
          text: '确定',
          handler: () => {
            if(this.navCtrl.canGoBack()){
              this.navCtrl.popAll();
            }
            let tabs:Tabs=this.navCtrl.parent;
            let parent:NavController=tabs.parent;
            parent.setRoot(LoginPage);
            
            //this.navCtrl.push(LoginPage);
            /*let modal = this.modalCtrl.create(LoginPage);
            modal.present();
            modal.onDidDismiss(userInfo => {
              if (userInfo) {
                this.userInfo = userInfo;
                this.helper.loadAvatarPath(userInfo.avatarId).subscribe(avatarPath => {//获取头像路径
                  this.avatarPath = avatarPath
                });
              }
            });*/
          }
        }
      ]
    }).present();
  }

  //数据字典刷新
  dictReflesh() {
    //this.navCtrl.push(WorkMapPage);
    //获取综合字典
    this.systemService.getSystemDict()
    .subscribe(object => {
      let resultBase:ResultBase=object[0] as ResultBase;
      if(resultBase.result=='true'){
        let complexDicts = object[1];
        for(let complexDict of complexDicts){
          //unit:计量单位
          //usedAspect:使用方向
          //applyCode:取得方式
          //usedState:使用状态
          //specialLine:技术部门
          //depositary:存放地点
          //specialLine:技术部门
          //console.log(complexDict.CodeProperty);
          //console.log(complexDict.codeDetail);
          this.storage.set(complexDict.CodeProperty, complexDict.codeDetail);
        }
        
      }
    }, () => {
      
    });

    //获取内部单位字典
    this.systemService.getDepartDict()
    .subscribe(object => {
      let resultBase:ResultBase=object[0] as ResultBase;
      if(resultBase.result=='true'){
        let inDepart = object[1] as DicInDepart[];
        this.storage.set(IN_DEPART, inDepart);
      }
    }, () => {
      
    });

    //获取外部单位字典
    this.systemService.getOutDepartDict()
    .subscribe(object => {
      let resultBase:ResultBase=object[0] as ResultBase;
      if(resultBase.result=='true'){
        let outDepart = object[1] as DicOutDepart[];
        this.storage.set(OUT_DEPART, outDepart);
      }
    }, () => {
      
    });

    //获取资产组字典
    this.systemService.getBasicEntityManagerDict()
    .subscribe(object => {
      let resultBase:ResultBase=object[0] as ResultBase;
      if(resultBase.result=='true'){
        let basicEntity = object[1] as DicBasicEntity[];
        this.storage.set(BASIC_ENTITY, basicEntity);
      }
    }, () => {
      
    });

    //获取资产目录字典
    this.systemService.getAssetsDict()
    .subscribe(object => {
      let resultBase:ResultBase=object[0] as ResultBase;
      if(resultBase.result=='true'){
        let aeests = object[1] as DicAsset[];
        this.storage.set(ASSETS, aeests);
      }
    }, () => {
      
    });

    //获取合同类别字典
    this.systemService.getContractTypeDict()
    .subscribe(object => {
      let contractTypeList = object as Array<Object>;
      let tarContractTypeList=new Array<DicBase>();
      if(contractTypeList){
        for(let item of contractTypeList){
          let dicBase=new DicBase();
          dicBase.code=item[0];
          dicBase.name=item[1];
          tarContractTypeList.push(dicBase);
        }
        this.storage.set(CONTRACT_TYPE, tarContractTypeList);
      }
    }, () => {
      
    });

    //获取项目单元字典
    this.systemService.getProjectElementDict()
    .subscribe(object => {

      let projectElementList = object as Array<Object>;
      let tarProjectElementList=new Array<DicBase>();
      if(projectElementList){
        for(let item of projectElementList){
          let dicBase=new DicBase();
          dicBase.code=item[0];
          dicBase.name=item[1];
          tarProjectElementList.push(dicBase);
        }
        this.storage.set(PROJECT_ELEMENT, tarProjectElementList);
      }
    }, () => {
      
    });
  }


  exitSoftware() {
    this.alertCtrl.create({
      title: '确认退出软件？',
      buttons: [{text: '取消'},
        {
          text: '确定',
          handler: () => {
            this.platform.exitApp();
          }
        }
      ]
    }).present();
  }

  about() {
    this.navCtrl.push(AboutPage);
  }

  viewAvatar() {
    let modal = this.modalCtrl.create(MineEditAvatarModalPage, {avatarPath: this.avatarPath});
    modal.present();
    modal.onDidDismiss(data => {
      data && (this.avatarPath = data.avatarPath)
    });
  }

  notice(){
    this.nativeService.alert('开发中...');
  }

}

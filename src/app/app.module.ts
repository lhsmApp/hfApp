import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler,Config } from 'ionic-angular';
import {IonicStorageModule} from "@ionic/storage";

//Modules
import {MineModule} from "../pages/mine/mine.module";

//Pages
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/login/register/register';

import { ApplyPage } from '../pages/apply/apply';
import { QueryPage } from '../pages/query/query';
import { HomePage } from '../pages/home/home';
//import { MinePage } from '../pages/mine/mine';
import { TabsPage } from '../pages/tabs/tabs';

//Native Part
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import {AppVersion} from "@ionic-native/app-version";
import {Toast} from "@ionic-native/toast";
import {File} from "@ionic-native/file";
import {FileTransfer} from "@ionic-native/file-transfer";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {ImagePicker} from "@ionic-native/image-picker";
import {Network} from "@ionic-native/network";
import {AppMinimize} from "@ionic-native/app-minimize";
import {JPush} from "../../typings/modules/jpush/index";

//Service Part
import {NativeService} from "../providers/NativeService";
import {HttpService} from "../providers/HttpService";
import {FileService} from "../providers/FileService";
import {Helper} from "../providers/Helper";
import {Utils} from "../providers/Utils";
import {HttpModule} from "@angular/http";
import {GlobalData} from "../providers/GlobalData";
import {ENABLE_FUNDEBUG, IS_DEBUG, FUNDEBUG_API_KEY} from "../providers/Constants";
import {Logger} from "../providers/Logger";
import {ModalFromRightEnter, ModalFromRightLeave, ModalScaleEnter, ModalScaleLeave} from "./modal-transitions";
import {Diagnostic} from "@ionic-native/diagnostic";

//Business Service
import {LoginService} from '../services/LoginService';
import {PaymentService} from '../services/paymentService';
import {AcceptService} from '../services/acceptService';
import {ContractService} from '../services/contractService';
import {ProjectElementService} from '../services/projectElementService';

//指令
import { TabDirective } from "../directive/";

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    ApplyPage,
    QueryPage,
    HomePage,
    //MinePage,
    TabsPage

    //指令
    //TabDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: '',
      backButtonIcon: 'ios-arrow-back',
      pageTransition: 'ios-transition'
    }),
    IonicStorageModule.forRoot(),

    //自定义模块
    MineModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    ApplyPage,
    QueryPage,
   ///MinePage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Toast,
    File,
    FileTransfer,
    InAppBrowser,
    ImagePicker,
    Network,
    AppMinimize,
    Diagnostic,
    AppVersion,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    //Native Part
    JPush,

    //Service Part
    NativeService,
    HttpService,
    FileService,
    Helper,
    Utils,
    GlobalData,
    Logger,

    //service
    LoginService,
    PaymentService,
    AcceptService,
    ContractService,
    ProjectElementService
  ]
})
export class AppModule {

  constructor(public config: Config) {
    this.setCustomTransitions();
  }

  private setCustomTransitions() {
    this.config.setTransition('modal-from-right-enter', ModalFromRightEnter);
    this.config.setTransition('modal-from-right-leave', ModalFromRightLeave);
    this.config.setTransition('modal-scale-enter', ModalScaleEnter);
    this.config.setTransition('modal-scale-leave', ModalScaleLeave);
  }
}

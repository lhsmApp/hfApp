import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Notice} from '../../model/notice';
import {DEFAULT_YS,DEFAULT_YFK,DEFAULT_HT,DEFAULT_ZZ,DEFAULT_ZZTZ} from "../../providers/Constants";

const NOTICES: Notice[] = [
      { id: 11, name: 'Mr. Nice',isRead:false ,messageContent:'天津航空物流发展有限公司（以下简称为航发公司）成立于2014年07月，坐落在天津航空物流区,位于天津滨海国际机场西侧,总规划面积7.5平方公里。目前已有中外运、海航物流、中远空运、康捷空、顺丰等众多知名物流企业入驻,其目标是打造成为中国北方最便捷的航空物流综合平台,未来主要负责推进天津航空物流市场资源整合运营。航发公司领导在公司组建初期就高度重视企业的信息化建设，截止目前已正式应用的系统有金蝶ESM系统、建筑信息模型BIM系统、档案管理系统、实物资产管理系统等。但针对投资工程管理与财务核算的集成方面，还处于空白。由此，航发公司希望搭建一套满足ISO体系要求的投资项目资产管理平台，并且该平台可以与金蝶财务系统实现集成，进而实现将工程项目核算前移，以提高项目核算的精度与效率。', publishDate:'2016-01-06', userCode:'用户编码',username:'用户名称'},
      { id: 12, name: 'Narco',isRead:true  ,messageContent:'天津航空物流发展有限公司（以下简称为航发公司）成立于2014年07月，坐落在天津航空物流区,位于天津滨海国际机场西侧,总规划面积7.5平方公里。目前已有中外运、海航物流、中远空运、康捷空、顺丰等众多知名物流企业入驻,其目标是打造成为中国北方最便捷的航空物流综合平台,未来主要负责推进天津航空物流市场资源整合运营。航发公司领导在公司组建初期就高度重视企业的信息化建设，截止目前已正式应用的系统有金蝶ESM系统、建筑信息模型BIM系统、档案管理系统、实物资产管理系统等。但针对投资工程管理与财务核算的集成方面，还处于空白。由此，航发公司希望搭建一套满足ISO体系要求的投资项目资产管理平台，并且该平台可以与金蝶财务系统实现集成，进而实现将工程项目核算前移，以提高项目核算的精度与效率。', publishDate:'2016-01-06', userCode:'用户编码',username:'用户名称'}
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

  toNoticeList(){
      this.navCtrl.push("NoticeQueryListPage");
  }

  itemSelected(notice:Notice){
      this.navCtrl.push("NoticeInfoPage",{'itemTranfer': notice});
  }

  openPage(cate: string) {
    if (cate === 'ht') {
      this.navCtrl.push("ContractApprovalPage");
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

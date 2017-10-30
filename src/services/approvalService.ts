import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {Observable} from "rxjs";
import {LoginInfo} from "../model/UserInfo";
import {HttpService} from "../providers/HttpService";
import {GlobalData} from "../providers/GlobalData";
import {ReviewType} from '../enums/review-type';

@Injectable()
export class ApprovalService {
  constructor(public httpService: HttpService, private globalData: GlobalData) {
  }

  //付款单据送审-审列表接口review_process 审批流程表
  queryUserReviewPay(billNumber:string, type:string): Observable<(Object)> {
    console.log('type: ' + type);
    let action = "";
    let reviewType = "";
    let getDo = "";
    if(type == ReviewType[ReviewType.REVIEW_TYPE_BASIC_PAYMENT]){
        action = 'queryUserReviewPay';
        reviewType = "";
        getDo = "phonePaymentRequest.do";
    } else {
      if(type == ReviewType[ReviewType.BASICACCEPTANCE_APPLY]){
        action = 'queryUserReviewAcceptance';
        reviewType = "验收申请审批";
        getDo = "phoneAcceptanceApply.do";
      }
    }
    console.log('action: ' + action);
    console.log('reviewType: ' + reviewType);
    console.log('getDo: ' + getDo);
    let param = {
     //必传
     'action': action,
     'sessionid':this.globalData.sessionId,
     'billNumber': billNumber,
     'reviewType':reviewType//审批使用常量名
     };
     return this.httpService.get(getDo, param).map((res: Response) => res.json());
  }

  //单据送审确认接口- review_process 审批流程表
  sendReviewPay(billNumber:string,reviewType:string,data:object[]): Observable<(Object)> {
    let param = {
     //必传
     'action': 'sendReviewPay',
     'sessionid':this.globalData.sessionId,
     'billNumber': billNumber,
     'reviewType':reviewType,//审批使用常量名
     'data': data,
     };
     return this.httpService.post('phoneCommon.do', param).map((res: Response) => res.json());
  }

  //审批接口review_process 审批流程表
  auditReview(billNumber:string,reviewType:string,vetoReason:string): Observable<(Object)> {
    let param = {
     //必传
     'action': 'auditReview',
     'sessionid':this.globalData.sessionId,
     'billNumber': billNumber,//单据单号
     'reviewType':reviewType,//审批使用常量名
     'vetoReason': vetoReason,//审批意见
     };
     return this.httpService.post('phoneCommon.do', param).map((res: Response) => res.json());
  }

  //否决接口review_process 审批流程表
  vetoReview(billNumber:string,reviewType:string,vetoReason:string): Observable<(Object)> {
    let param = {
     //必传
     'action': 'vetoReview',
     'sessionid':this.globalData.sessionId,
     'billNumber': billNumber,//单据单号
     'reviewType':reviewType,//审批使用常量名
     'vetoReason': vetoReason,//审批意见
     };
     return this.httpService.post('phoneCommon.do', param).map((res: Response) => res.json());
  }
}

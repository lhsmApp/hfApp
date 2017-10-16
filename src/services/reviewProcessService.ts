import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {Observable} from "rxjs";
import {HttpService} from "../providers/HttpService";
import {GlobalData} from "../providers/GlobalData";

/*
 验收
 */
@Injectable()
export class AcceptService {
  constructor(public httpService: HttpService, private globalData: GlobalData) {
  }

  //验收单据送审-审列表接口review_process 审批流程表
  sendAcceptApply(billNumber:string, reviewType:string):Observable<(object)>{
    console.log('验收单据送审'+this.globalData.sessionId);
    let param = {
        'action': "queryUserReviewPay",
        'sessionid': this.globalData.sessionId,
        'billNumber': billNumber,//”验收单号”，
        'reviewType': reviewType,//”审批使用常量名”
    };
    return this.httpService.post('phoneAcceptanceApply.do', param).map((res:Response) => res.json());
  }

  //否决接口review_process 审批流程表
  approvalVetoAcceptApply(billNumber:string, reviewType:string, vetoReason:string):Observable<(object)>{
    console.log('否决接口'+this.globalData.sessionId);
    let param = {
        'action': "vetoReview",
        'sessionid': this.globalData.sessionId,
        'billNumber': billNumber,//”验收单号”，
        'reviewType': reviewType,//”审批使用常量名”
        'vetoReason': vetoReason,//”审批意见”
    };
    return this.httpService.post('phoneAcceptanceApply.do', param).map((res:Response) => res.json());
  }

  
}

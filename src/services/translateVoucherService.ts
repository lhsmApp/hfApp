import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {Observable} from "rxjs";
import {HttpService} from "../providers/HttpService";
import {GlobalData} from "../providers/GlobalData";

/*
 转资
 */
@Injectable()
export class TranslateVoucherService {
  constructor(public httpService: HttpService, private globalData: GlobalData) {
  }

  //转资申请列表----basic_translate_voucher  转资单据表
  getTranslateVoucherMainList(type:string, translateCode:string, startDate:string, endDate:string, reviewStatus:string): Observable<(Object)> {
  	console.log('转资申请列表'+this.globalData.sessionId);
    let param = {
     'action': 'queryListPhoneBasicTranslateVoucher',
     'sessionid': this.globalData.sessionId,
     'type': type,//1.申请 2.查询 3.审批
     'translateCode': translateCode,//单据编号
     'startDate': startDate,//"开始日期"(对应  requireDate :"申请日期")
     'endDate': endDate,//"结束日期"(对应   requireDate :"申请日期")
     'reviewStatus': reviewStatus,//" 单据状态"  
          //转资后端字段解释(括号中代表客户端对应字段)
          //0未提交(新增) 
          //1未审批(待审批) 
          //2已驳回(退回) 
          //3审批中(待审批)  
          //4已审批(已审批) 
          //若客户端传空的时候则后端查询全部
     };
     return this.httpService.post('phoneAcceptanceApply.do', param).map((res: Response) => res.json());
  }

  //转资申请详细----basic_translate_voucher  转资单据表
  getTranslateVoucherDetailItem(translateCode:string):Observable<(object)>{
    console.log('转资申请详细'+this.globalData.sessionId);
    let param = {
        'action': "queryPhoneBasicTranslateVoucher",
        'sessionid': this.globalData.sessionId,
        'translateCode': translateCode,//单据编号
    };
    return this.httpService.post('phoneAcceptanceApply.do', param).map((res:Response) => res.json());
  }
}

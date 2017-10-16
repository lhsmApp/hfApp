import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {Observable} from "rxjs";
import {HttpService} from "../providers/HttpService";
import {GlobalData} from "../providers/GlobalData";

/*
 转资调整
 */
@Injectable()
export class TzCostService {
  constructor(public httpService: HttpService, private globalData: GlobalData) {
  }

  //转资调整单明细列表-----basic_tz_cost 转资调整明细表
  getTzCostMainList(translateCode:string): Observable<(Object)> {
  	console.log('转资调整单明细列表'+this.globalData.sessionId);
    let param = {
     'action': 'queryListPhonebasicTzCost',
     'sessionid': this.globalData.sessionId,
     'translateCode': translateCode,//”转资单号”
     };
     return this.httpService.post('phoneAcceptanceApply.do', param).map((res: Response) => res.json());
  }

  //转资调整单明细-----basic_tz_cost 转资调整明细表
  getTzCostDetailItem(translateCode:string, keyCode:string):Observable<(object)>{
    console.log('转资调整单明细'+this.globalData.sessionId);
    let param = {
        'action': "queryPhonebasicTzCost",
        'sessionid': this.globalData.sessionId,
        'translateCode': translateCode,//转资单号
        'keyCode': keyCode,//资产键码
    };
    return this.httpService.post('phoneAcceptanceApply.do', param).map((res:Response) => res.json());
  }
}

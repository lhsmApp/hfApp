import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {Observable} from "rxjs";
import {LoginInfo} from "../model/UserInfo";
import {HttpService} from "../providers/HttpService";
import {GlobalData} from "../providers/GlobalData";

@Injectable()
export class PaymentService {
  constructor(public httpService: HttpService, private globalData: GlobalData) {
  }

  login(user): Observable<(LoginInfo)> {
    let param = {
     'action': 'userLogin',
     //'sessionid':this.globalData.sessionId,
     'userCode': user.username,
     'passWord': user.password,
     //'departCode':this.globalData.departCode
     };
     return this.httpService.get('phoneLogin/login.do', param).map((res: Response) => res.json());
  }

  //付款单据申请列表---basic_pay_main       付款主表
  getPaymentMainList(): Observable<(Object)> {
  	console.log('付款抓表'+this.globalData.sessionId);
    let param = {
     'action': 'queryListPhonePayMain',
     'sessionid':this.globalData.sessionId,
     'reviewStatus': '1',
     'payCode': '',
     'startDate':'',
     'endDate':'',
     };
     return this.httpService.post('phonePaymentRequest.do', param).map((res: Response) => res.json());
  }
}

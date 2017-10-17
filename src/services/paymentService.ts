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


  //付款单据申请列表---basic_pay_main       付款主表
  getPaymentMainList(): Observable<(Object)> {
  	console.log('付款主表'+this.globalData.sessionId);
    let param = {
     'action': 'queryListPhonePayMain',
     'sessionid':this.globalData.sessionId,
     //'reviewStatus': 0,
     'payCode': '',
     'startDate':'',
     'endDate':'',
     'type':'1'
     };
     return this.httpService.get('phonePaymentRequest.do', param).map((res: Response) => res.json());
  }

  //付款单据申请详情---basic_pay_main
  getPaymentDetail(payCode:string): Observable<(Object)> {
    let param = {
     'action': 'queryPhonePayMain',
     'sessionid':this.globalData.sessionId,
     //'reviewStatus': 0,
     'payCode': payCode
     };
     return this.httpService.get('phonePaymentRequest.do', param).map((res: Response) => res.json());
  }

  //发票列表basic_chalan_manager 发票主表
  getInvoiceMainList(payCode:string,chalanNumber :string): Observable<(Object)> {
    let param = {
     //必传
     'action': 'queryListPhoneBasicChalan',
     'sessionid':this.globalData.sessionId,
     'payCode': payCode,
     //可传
     'chalanNumber' :chalanNumber
     };
     return this.httpService.get('phonePaymentRequest.do', param).map((res: Response) => res.json());
  }

  //发票详细信息basic_chalan_manager 发票主表
  getInvoiceDetail(payCode:string,chalanNumber :string): Observable<(Object)> {
    let param = {
     //必传
     'action': 'queryPhoneBasicChalan',
     'sessionid':this.globalData.sessionId,
     'payCode': payCode,
     'chalanNumber' :chalanNumber
     };
     return this.httpService.get('phonePaymentRequest.do', param).map((res: Response) => res.json());
  }

  //工作量清单列表----basic_contract_work_list工作量清单表
  getGclMainList(contractCode:string,type:string,payCode:string,sequence :string): Observable<(Object)> {
    let param = {
     //必传
     'action': 'queryListPhoneContractWorkList',
     //'sessionid':this.globalData.sessionId,
     'contractCode': contractCode,//合同流水号
     'type': type,//ht，fk（ht合同，fk付款，合同时把工作量清单全部查出，付款的话查询付款单号及没有付款单号的清单）
     'nullItem1' :sequence,//工作量清单序号
     //可传
     'payCode': payCode,//付款单号
     };
     return this.httpService.get('phonePaymentRequest.do', param).map((res: Response) => res.json());
  }

  //工作量清单详情----basic_contract_work_list工作量清单表
  getGclDetail(contractCode:string,sequence :string): Observable<(Object)> {
    let param = {
     //必传
     'action': 'queryPhoneContractWorkList',
     'contractCode':contractCode,//合同流水号
     'sequence': sequence//工作量清单序号
     };
     return this.httpService.get('phonePaymentRequest.do', param).map((res: Response) => res.json());
  }
}

import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {Observable} from "rxjs";
import {HttpService} from "../providers/HttpService";
import {GlobalData} from "../providers/GlobalData";

/*
 合同
 */
@Injectable()
export class ContractService {
  constructor(public httpService: HttpService, private globalData: GlobalData) {
  }

  //合同申请列表-----basic_contract_main  合同主表
  getContractMainList(type:string, contractCode:string, startDate:string, endDate:string, 
              checkResult:string, contract_type:string): Observable<(Object)> {
  	console.log('合同申请列表'+this.globalData.sessionId);
    console.log(type + " " + checkResult + " " + contract_type);
    let param = {
     'action': 'queryListPhoneContractMain',
     'sessionid': this.globalData.sessionId,

     'type': type,//1.申请 2.查询 3.审批
     'contractCode': contractCode,//合同流水号" (模糊查询)

     'startDate': startDate,//"开始日期"(对应  requireDate :"申请日期")
     'endDate': endDate,//"结束日期"(对应   requireDate :"申请日期")
     'checkResult': checkResult,//" 单据状态"
          //合同后端字段解释(括号中代表客户端对应字段)
          //0新增(新增) 
          //1审批通过(已审批)) 
          //2驳回(退回) 
          //3解约 
          //4审批中(待审批) 
          //10待审批(待审批)
     'contract_type': contract_type,//类型，新增：基建与租赁区分1基建，2租赁(如果是查询界面调用必须输入)
     };
     return this.httpService.get('phoneContactMain.do', param).map((res: Response) => res.json());
  }

  //合同单据详情-----basic_contract_main  合同主表
  getContractDetailItem(contractCode:string, sequence:string):Observable<(object)>{
    console.log('合同单据详情'+this.globalData.sessionId);
    let param = {
        'action': "queryPhoneContractMain",
        'sessionid': this.globalData.sessionId,
        'contractCode': contractCode,//合同流水号
        'sequence': sequence,//序号
    };
    return this.httpService.get('phoneContactMain.do', param).map((res:Response) => res.json());
  }

  //资产明细列表-----basic_contract_detail 合同明细表
  getAssetDetailList(contractCode:string, translateCode:string, acceptanceFlag:string):Observable<(object)>{
    console.log('资产明细列表'+this.globalData.sessionId);
    let param = {
        'action': "queryListPhoneContractDetail",
        'sessionid': this.globalData.sessionId,
        'contractCode': contractCode,//合同流水号
        'translateCode': translateCode,//”转资单号”
        'acceptanceFlag': acceptanceFlag,//是否已验收0为未验收1为验收 0未验收 1已复核 2已验收未复核（如果是验收单据查询，则需要查询未验收的0，如果是转资单据查询，则需要传验收1，如果是合同查询则不用传参）
    };
    return this.httpService.get('phoneContactMain.do', param).map((res:Response) => res.json());
  }

  //资产明细详情-----basic_contract_detail 合同明细表
  getAssetDetailItem(contractCode:string, keyCode:string):Observable<(object)>{
    console.log('资产明细详情'+this.globalData.sessionId);
    let param = {
        'action': "queryPhoneContractDetail",
        'sessionid': this.globalData.sessionId,
        'contractCode': contractCode,//合同流水号
        'keyCode': keyCode,//资产键码
    };
    return this.httpService.get('phonePaymentRequest.do', param).map((res:Response) => res.json());
  }

}

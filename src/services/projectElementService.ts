import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {Observable} from "rxjs";
import {HttpService} from "../providers/HttpService";
import {GlobalData} from "../providers/GlobalData";

/*
 项目单元
 */
@Injectable()
export class ProjectElementService {
  constructor(public httpService: HttpService, private globalData: GlobalData) {
  }

  //项目单元列表-----basic_project_element  项目单元表
  getProjectElementMainList(type:string, sgsx:string, elementCode:string, startDate:string, endDate:string, checkResult:string): Observable<(Object)> {
  	console.log('项目单元列表'+this.globalData.sessionId);
    let param = {
     'action': 'queryListPhoneBasicProjectElement',
     'sessionid': this.globalData.sessionId,
     'type': type,//1.申请 2.查询 3.审批
     'sgsx': sgsx,//”施工属性”（如果是进度管理输入0，如果是项目单元查询则输入空）,
     'elementCode': elementCode,//"项目单元编号" (模糊查询)
     'startDate': startDate,//"开始日期"(对应  requireDate :"申请日期")
     'endDate': endDate,//"结束日期"(对应   requireDate :"申请日期")
     'checkResult': checkResult,//" 单据状态"
          //项目单元后端字段解释(括号中代表客户端对应字段)
          //0新增(新增) 
          //1审批通过(已审批)) 
          //2驳回(退回) 
          //3解约 
          //4审批中(待审批) 
          //10待审批(待审批)
     };
     return this.httpService.get('phoneAcceptanceApply.do', param).map((res: Response) => res.json());
  }

  //项目单元详细-----basic_project_element  项目单元表
  getProjectElementDetailItem(elementCode:string):Observable<(object)>{
    console.log('项目单元详细'+this.globalData.sessionId);
    let param = {
        'action': "queryPhoneBasicProjectElement ",
        'sessionid': this.globalData.sessionId,
        'elementCode': elementCode,//项目单元编号
    };
    return this.httpService.post('phoneAcceptanceApply.do', param).map((res:Response) => res.json());
  }
}

import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {Observable} from "rxjs";
import {LoginInfo} from "../model/UserInfo";
import {HttpService} from "../providers/HttpService";
import {GlobalData} from "../providers/GlobalData";

@Injectable()
export class AttachmentService {
  constructor(public httpService: HttpService, private globalData: GlobalData) {
  }

  //查询附件上传列表-----basic_up_file 附件表
  getAttachmentList(billNumber :string,contractCode:string,type:string): Observable<(Object)> {
    let param = {
     //必传
     'action': 'queryListBasicUpFile',
     'sessionid':this.globalData.sessionId,
     'type': type,//1.合同 2.发票 
     'billNumber' :billNumber,//”单号”（如果是合同页contractCode，如果是发票页sequence）
     'fileFlag ' :1,//(模块标记1,基建 2，租赁 目前始终传1)
     'contractCode' :contractCode,//如果是发票页必须传，contractCode合同页传空
     };
     return this.httpService.get('phoneBasicUpFile.do', param).map((res: Response) => res.json());
  }

  //附件删除-----basic_up_file 附件表
  deleteAttachment(payCode:string,type:string,billNumber:string,contractCode:string,sequence:string):Observable<(Object)> {
    /*let param = {
     //必传
     'action': 'deletePhoneBasicChalan',
     'sessionid':this.globalData.sessionId,
     'payCode':payCode,
     'chalanNumber': chalanNumber
     };*/

     let formData: FormData = new FormData(); 
     //必传
     formData.append('action', 'delBasicUpFile');
     formData.append('sessionid', this.globalData.sessionId);
     formData.append('type', type);//1.合同 2.发票 
     formData.append('billNumber', billNumber);//”单号”（如果是合同页contractCode，如果是发票页sequence）
     formData.append('fileFlag', '1');//“1”(模块标记1,基建 2，租赁 目前始终传1)
     formData.append('contractCode', contractCode);//如果是发票页必须传，contractCode合同页传空”
     formData.append('sequence', sequence);//序号(int型)

     console.log('billNumber:'+billNumber);
     console.log('contractCode:'+contractCode);
     console.log('sequence:'+sequence);
     return this.httpService.postMultiFormData('phoneBasicUpFile.do', formData).map((res: Response) => res.json());
  }

  //附件上传-----basic_up_file 附件表
  uploadAttachment(payCode:string,type:string,billNumber:string,contractCode:string,sequence:string):Observable<(Object)> {
    /*let param = {
     //必传
     'action': 'deletePhoneBasicChalan',
     'sessionid':this.globalData.sessionId,
     'payCode':payCode,
     'chalanNumber': chalanNumber
     };*/

     let data={
     	'type' :type,//（1,2） 1.合同 2.发票
     	'billNumber' :billNumber,//”单号”（如果是合同页contractCode，如果是发票页sequence）
	    'fileFlag ' :1,//(模块标记1,基建 2，租赁 目前始终传1)
	    'contractCode' :contractCode,//如果是发票页必须传，contractCode合同页传空
	    'depiction':''//文件信息
     };
     let formData: FormData = new FormData(); 
     //必传
     formData.append('action', '');
     formData.append('sessionid', this.globalData.sessionId);
     //formData.append('type', type);//1.合同 2.发票 
     formData.append('data', JSON.stringify(data));//”单号”（如果是合同页contractCode，如果是发票页sequence）
     
     console.log('data:'+data);
     return this.httpService.postMultiFormData('phoneBasicUpFile.do', formData).map((res: Response) => res.json());
  }
}
import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {Observable} from "rxjs";
import {LoginInfo} from "../model/UserInfo";
import {HttpService} from "../providers/HttpService";
import {GlobalData} from "../providers/GlobalData";

@Injectable()
export class LoginService {
  constructor(public httpService: HttpService, private globalData: GlobalData) {
  }

  login(user): Observable<(LoginInfo)> {
    /* let param = {
     'client_id': 'app',
     'username': user.username,
     'password': user.password
     };
     return this.httpService.post('/authenticate', param).map((res: Response) => res.json());*/

    /*let loginInfo = {
      access_token: 'test_test_test_test_test_test_test',
      user: {
        id: 1,
        username: user.username,
        fullName: 'jiachao',
        email: 'jiaccool@163.com',
        phone: '13904271473',
        avatarId: '',
        description: '互联网+事业部'
      }
    };
    return Observable.create((observer) => {
      observer.next(loginInfo);
    });*/


    /*let param = {
     'action': 'userLogin',
     'sessionid':this.globalData.sessionId,
     'userCode': user.username,
     'passWord': user.password,
     'departCode':this.globalData.departCode
     };
     return this.httpService.get('phoneLogin/login.do', param).map((res: Response) => res.json());*/

    let loginInfo = [
      {result:'true',message:'success'},
      {
        userCode: 1,
        userName: 'gdliyh',
        departCode: '互联网+事业部',
        avatarId: ''
      }
    ];
    return Observable.create((observer) => {
      observer.next(loginInfo);
    });
  }


  getDepart(user): Observable<(Object)> {
    let param = {
     'action': 'userLogin',
     //'sessionid':'',
     'userCode': user.username,
     'passWord': user.password,
     //'departCode':''
     };
     return this.httpService.get('phoneLogin/login.do', param).map((res: Response) => res.json());
  }

}

import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {Observable} from "rxjs";
import {LoginInfo} from "../../model/UserInfo";
import {HttpService} from "../../providers/HttpService";
import {GlobalData} from "../../providers/GlobalData";

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

     let param = {
     'action': 'userLogin',
     'sessionid':'',
     'userCode': user.username,
     'password': user.password,
     'departCode':''
     };
     return this.httpService.post('/login', param).map((res: Response) => res.json());

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
  }

}

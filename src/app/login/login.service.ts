import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginAccount} from './model/login-account';
import {UserToken} from './dto/user-token';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly URL_BE = 'http://localhost:8080/api/v2';

  constructor(private  http: HttpClient) {
  }

  loginAccount(loginAccount:any) {
    return this.http.post<any>(`${this.URL_BE}`, loginAccount);
  }


}

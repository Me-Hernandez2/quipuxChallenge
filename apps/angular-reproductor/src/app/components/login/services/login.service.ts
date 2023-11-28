import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from "@angular/common/http";
import {RequestLogin, ResponseLogin} from "../interfaces/login.interfaces";
import {environments} from "../../../shared/environments/environments";
import {map, Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(request: RequestLogin): Observable<ResponseLogin>{
    return this.http.post( environments.api_base+'auth/login', request)
      .pipe(
        map((response: any) => {
          const responseLogin: ResponseLogin = {
            token: response.token,
            expirationDate: response.expirationDate,
          };
          return responseLogin;
        })
      );
  }

}

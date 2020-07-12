import { Injectable } from '@angular/core';
import { LoginParams, RegisterParams } from '@core/interfaces';
import { HttpClient } from '@angular/common/http';
import { Config } from '@app/config/config';

/**
 * @description Authentication Service which handles the user session and authentication related API
 */
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  /**
   * @description boolean to check logged in user in the app session level.
   */
  isLoggedIn: boolean;

  constructor(private http: HttpClient) { }

  /**
   * @description To check whether the user is logged in or not.
   */
  isSessionActive() {
    return localStorage.getItem(Config.userToken);
  }

  /**
   * @description Set the logged in user token to localstorage
   */
  set token(token: string) {
    this.isLoggedIn = true;
    localStorage.setItem(Config.userToken, token);
  }

  /**
   * @description Get the logged in user token.
   */
  get token() {
    return localStorage.getItem(Config.userToken);
  }

  /**
   * @param loginParams The login request params for the login API.
   * @description Login to the application, triggers login API.
   */
  login(loginParams: LoginParams) {
    return this.http.post('/login', loginParams);
  }

  /**
   * @param registerParams The register/signup api request params.
   * @description Register/Signup to the application, triggers register API.
   */
  register(registerParams: RegisterParams) {
    return this.http.post('/register', registerParams);
  }
}

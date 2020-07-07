import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  isSessionActive() {
    return localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  refreshToken(newToken) {
    localStorage.setItem('token', newToken);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '@app/core/services';
import { LoginParams, LoginResponse } from '@app/core/interfaces';

/**
 * @description Login Form Component
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  /**
   * @description To create login form modal.
   */
  createLoginForm(): void {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  /**
   * @description Trigger login method of authentication service with params from the form.
   */
  login() {
    const loginParams: LoginParams = {...this.loginForm.value};
    this.auth.login(loginParams).subscribe((response: LoginResponse) => {
      this.auth.token = response.token;
    });
  }

}
